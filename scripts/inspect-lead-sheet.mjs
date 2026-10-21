import fs from 'node:fs';
import { createSign } from 'node:crypto';
import dotenv from 'dotenv';
const env = { ...dotenv.parse(fs.readFileSync('.env.vercel')), ...process.env };
const repair = process.argv.includes('--ensure-column');
const now = Math.floor(Date.now()/1000);
const encode = value => Buffer.from(JSON.stringify(value)).toString('base64url');
const unsigned = encode({alg:'RS256',typ:'JWT'})+'.'+encode({iss:env.GOOGLE_SERVICE_ACCOUNT_EMAIL,scope:repair?'https://www.googleapis.com/auth/spreadsheets':'https://www.googleapis.com/auth/spreadsheets.readonly',aud:'https://oauth2.googleapis.com/token',iat:now,exp:now+3600});
const signer = createSign('RSA-SHA256'); signer.update(unsigned); signer.end();
const assertion = unsigned+'.'+signer.sign(env.GOOGLE_PRIVATE_KEY.replace(/\\n/g,'\n'),'base64url');
const auth = await fetch('https://oauth2.googleapis.com/token',{method:'POST',body:new URLSearchParams({grant_type:'urn:ietf:params:oauth:grant-type:jwt-bearer',assertion})});
const token = await auth.json(); if(!auth.ok) throw new Error('Google auth failed: '+auth.status);
const headers={Authorization:'Bearer '+token.access_token};
const base='https://sheets.googleapis.com/v4/spreadsheets/'+encodeURIComponent(env.GOOGLE_SHEET_ID);
const response=await fetch(base+'?fields=sheets.properties',{headers});
const metadata=await response.json();
const target=metadata.sheets?.find(s=>s.properties.title===(env.GOOGLE_SHEET_TAB||'Contact Form - Website'));
console.log(JSON.stringify({metadataStatus:response.status,target:target?.properties}));
if (repair && target?.properties.gridProperties.columnCount < 30) {
 const length = 30 - target.properties.gridProperties.columnCount;
 const update = await fetch(base+':batchUpdate',{method:'POST',headers:{...headers,'Content-Type':'application/json'},body:JSON.stringify({requests:[{appendDimension:{sheetId:target.properties.sheetId,dimension:'COLUMNS',length}}]})});
 if(!update.ok) throw new Error('Unable to append missing column: '+update.status);
 console.log(JSON.stringify({appendedColumns:length,existingData:'preserved'}));
}
const range="'"+(env.GOOGLE_SHEET_TAB||'Contact Form - Website').replace(/'/g,"''")+"'!AD1";
const read=await fetch(base+'/values/'+encodeURIComponent(range),{headers});
const result=await read.json();
console.log(JSON.stringify({contactHeaderStatus:read.status,header:result.values?.[0]?.[0]||null,error:result.error?.message}));
if (process.argv.includes('--verify-test')) {
 const testRange="'"+(env.GOOGLE_SHEET_TAB||'Contact Form - Website').replace(/'/g,"''")+"'!A:AD";
 const read=await fetch(base+'/values/'+encodeURIComponent(testRange),{headers});
 if(!read.ok) throw new Error('Unable to verify test row: '+read.status);
 const result=await read.json();
 const rows=(result.values||[]).filter(row=>row[4]==='website-qa@example.invalid' && row[10]==='/financing?qa=column-repair');
 console.log(JSON.stringify({financingTestRows:rows.length,latestType:rows.at(-1)?.[1],contactKeyPresent:Boolean(rows.at(-1)?.[29])}));
 if(!rows.length) process.exitCode=1;
}
