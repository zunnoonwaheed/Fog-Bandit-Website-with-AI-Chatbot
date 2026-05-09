import Anthropic from '@anthropic-ai/sdk';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from parent directory
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const app = express();
const PORT = process.env.PORT || 8787;
const apiKey = process.env.ANTHROPIC_API_KEY;

if (!apiKey) {
  console.warn('WARNING: ANTHROPIC_API_KEY is not set. POST /api/chat will return an error until you add it to .env');
} else {
  console.log('✓ ANTHROPIC_API_KEY loaded successfully');
}

app.use(cors());
app.use(express.json());

const anthropic = apiKey
  ? new Anthropic({
      apiKey,
    })
  : null;

app.post('/api/chat', async (req, res) => {
  try {
    if (!anthropic) {
      return res.status(500).json({
        error: 'ANTHROPIC_API_KEY is not configured. Add it to your .env file.',
      });
    }

    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: `You are the Fog Bandit Quote Assistant. Help customers get security quotes.

Keep responses SHORT and to-the-point - 1-2 sentences max. Ask ONE question at a time. Be friendly but concise.`,
      messages: messages,
    });

    const textBlock = response.content.find((b) => b.type === 'text');
    const reply = textBlock && textBlock.type === 'text' ? textBlock.text : '';

    res.json({
      reply,
      content: reply,
      id: response.id,
    });
  } catch (error) {
    console.error('Error calling Anthropic API:', error);
    res.status(500).json({
      error: 'Failed to get response from AI',
      details: error.message
    });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Chatbot API is running' });
});

app.listen(PORT, () => {
  console.log(`Chatbot API server running on http://localhost:${PORT}`);
});
