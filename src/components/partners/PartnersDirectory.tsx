import { MapPin, Mail, Phone, Globe } from "lucide-react";
import mapImage from "@/assets/contact-map-anz-region.png";

interface Partner {
  name: string;
  address: string;
  phone?: string;
  mobile?: string;
  email: string;
  website?: string;
}

interface StatePartners {
  state: string;
  stateCode: string;
  partners: Partner[];
}

const partnersData: StatePartners[] = [
  {
    state: "Western Australia",
    stateCode: "WA",
    partners: [
      {
        name: "PMT Security Systems – Perth",
        address: "Unit 7/8 Booth Place Balcatta, WA 6021",
        phone: "1300 853 686",
        email: "Cindy.Coetzee@pmtsecurity.com.au",
        website: "www.pmtsecurity.com.au"
      },
      {
        name: "NIDA Technology",
        address: "P O BOX 2338, Ellenbrook WA 6069",
        mobile: "04 2093 9184",
        email: "admin@nida.net.au"
      }
    ]
  },
  {
    state: "Victoria",
    stateCode: "VIC",
    partners: [
      {
        name: "PMT Security Systems – Melbourne",
        address: "Level 1, 5 Tullamarine Park Rd, Tullamarine VIC 3043",
        phone: "1300 853 686",
        email: "kane@pmtsecurity.com.au",
        website: "www.pmtsecurity.com.au"
      },
      {
        name: "Omnivision – Melbourne",
        address: "3, 3-5 Gilda Ct, Mulgrave VIC 3170",
        phone: "1300 688 788",
        email: "vishr@omnivision.net.au",
        website: "www.omnivision.net.au"
      },
      {
        name: "Auspro Security Services – Melbourne",
        address: "PO BOX 2005, Werribee VIC 3030",
        phone: "03 9360 8077",
        mobile: "0413 422 216",
        email: "info@ausprosecurity.com.au"
      },
      {
        name: "Look Video Surveillance – Bendigo",
        address: "245 Lloyd Street, East Bendigo VIC 3550",
        mobile: "0438 436 199",
        email: "info@looksecurity.com.au",
        website: "www.looksecurity.com.au"
      }
    ]
  },
  {
    state: "New South Wales",
    stateCode: "NSW",
    partners: [
      {
        name: "Wilks Air Pty Ltd T/A Laser Electrical Inverell",
        address: "3C Swanbrook Road, Inverell, NSW 2360",
        phone: "02 6722 1981",
        email: "inverell@laserelectrical.com.au"
      },
      {
        name: "Stapleton Electrical",
        address: "Bega, NSW 2550",
        mobile: "0420 384 743",
        email: "stapletonelectrical@bigpond.com"
      },
      {
        name: "Omnivision - Sydney",
        address: "Unit 1/29 Wentworth Street, Greenacre, NSW 2190",
        phone: "1300 688 788",
        email: "Ranjitc@omnivision.net.au",
        website: "www.omnivision.net.au"
      },
      {
        name: "PMT Security Systems – Sydney",
        address: "Unit 1&2, 7 Tucks Rd Seven Hills NSW 2147",
        phone: "1300 853 686",
        email: "michael@pmtsecurity.com.au",
        website: "www.pmtsecurity.com.au"
      },
      {
        name: "Anything Electrical Australia",
        address: "Caple Street, Young, NSW 2594",
        mobile: "0487 777 774",
        email: "pete@anythingelectrical.com.au",
        website: "www.anythingelectrical.com.au"
      }
    ]
  },
  {
    state: "Queensland",
    stateCode: "QLD",
    partners: [
      {
        name: "Back 2 Base Monitoring – Brisbane",
        address: "43 Flinders Parade, North Lakes QLD 4035",
        phone: "07 3865 6642",
        email: "robert@back2base.net.au",
        website: "www.back2base.net.au"
      },
      {
        name: "Sunshine Security & Surveillance",
        address: "U4, 68 Parramatta Road, Underwood QLD 4119",
        phone: "1300 022 880",
        mobile: "0420 996 923",
        email: "mushir@sunshinesecurity.com.au",
        website: "www.sunshinesecurity.com.au"
      }
    ]
  },
  {
    state: "South Australia",
    stateCode: "SA",
    partners: [
      {
        name: "LHB Pty Ltd",
        address: "21 Kilkenny Rd, Woodville Park SA 5011",
        phone: "08 8244 6776",
        email: "admin@lhb.net.au"
      }
    ]
  },
  {
    state: "Northern Territory",
    stateCode: "NT",
    partners: [
      {
        name: "CCSNT - Communication Cabling Solutions NT",
        address: "158 Coonawarra Road, Winnellie",
        phone: "08 8984 3150",
        email: "info@ccsnt.com.au"
      }
    ]
  }
];

const PartnerCard = ({ partner }: { partner: Partner }) => {
  return (
    <div className="group bg-background border border-border rounded-xl p-5 md:p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full flex flex-col w-full">
      <div className="flex items-start justify-between mb-4 gap-2">
        <h3 className="font-inter text-[15px] md:text-[16px] font-bold text-foreground leading-snug flex-1 min-w-0">
          <span className="line-clamp-2">{partner.name}</span>
        </h3>
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <MapPin className="h-4 w-4 text-primary" />
        </div>
      </div>

      <div className="space-y-3 flex-1">
        <div className="flex items-start gap-2.5">
          <div className="mt-0.5">
            <div className="w-1 h-1 rounded-full bg-muted-foreground/40"></div>
          </div>
          <p className="font-dm-sans text-[13px] md:text-[14px] text-muted-foreground leading-relaxed">
            {partner.address}
          </p>
        </div>

        <div className="pt-2 border-t border-border/50 space-y-2.5">
          {partner.phone && (
            <div className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 text-primary/70 flex-shrink-0" />
              <a
                href={`tel:${partner.phone.replace(/\s/g, '')}`}
                className="font-dm-sans text-[13px] md:text-[14px] text-foreground hover:text-primary transition-colors font-medium"
              >
                {partner.phone}
              </a>
            </div>
          )}

          {partner.mobile && (
            <div className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 text-primary/70 flex-shrink-0" />
              <a
                href={`tel:${partner.mobile.replace(/\s/g, '')}`}
                className="font-dm-sans text-[13px] md:text-[14px] text-foreground hover:text-primary transition-colors font-medium"
              >
                {partner.mobile}
              </a>
            </div>
          )}

          <div className="flex items-center gap-2.5">
            <Mail className="h-4 w-4 text-primary/70 flex-shrink-0" />
            <a
              href={`mailto:${partner.email}`}
              className="font-dm-sans text-[13px] md:text-[14px] text-foreground hover:text-primary transition-colors break-all"
            >
              {partner.email}
            </a>
          </div>

          {partner.website && (
            <div className="flex items-center gap-2.5">
              <Globe className="h-4 w-4 text-primary/70 flex-shrink-0" />
              <a
                href={`https://${partner.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-dm-sans text-[13px] md:text-[14px] text-primary hover:text-primary/80 transition-colors font-medium"
              >
                {partner.website}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const PartnersDirectory = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-[1200px] mx-auto">
          {/* Map Section */}
          <div className="bg-background border border-border rounded-2xl p-6 md:p-8 mb-10 md:mb-12">
            <div className="grid md:grid-cols-5 gap-6 md:gap-8 items-center">
              <div className="md:col-span-2">
                <h2 className="font-inter text-[20px] md:text-[24px] font-bold text-foreground mb-4">
                  Find Your Local Partner
                </h2>
                <p className="font-dm-sans text-[13px] md:text-[15px] text-muted-foreground leading-relaxed mb-5">
                  Our certified partners are strategically located across Australia to provide expert installation and support.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {partnersData.map((state) => (
                    <div key={state.stateCode} className="flex items-center justify-between bg-muted rounded-lg px-3 py-2">
                      <span className="font-inter text-[13px] font-bold text-primary">{state.stateCode}</span>
                      <span className="font-dm-sans text-[12px] text-muted-foreground">{state.partners.length} {state.partners.length === 1 ? 'partner' : 'partners'}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:col-span-3 flex justify-center">
                <img
                  src={mapImage}
                  alt="Australia partner locations"
                  className="rounded-xl w-full max-w-[450px] h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Partners Grid by State */}
          <div className="space-y-8 md:space-y-10">
            {partnersData.map((stateData) => (
              <div key={stateData.stateCode}>
                <div className="flex items-center gap-3 mb-4 md:mb-5">
                  <div className="bg-primary rounded-lg px-3 py-1.5">
                    <span className="text-white font-inter text-[13px] md:text-[14px] font-bold">
                      {stateData.stateCode}
                    </span>
                  </div>
                  <h3 className="font-inter text-[18px] md:text-[22px] font-bold text-foreground">
                    {stateData.state}
                  </h3>
                  <div className="h-px flex-1 bg-border ml-2"></div>
                </div>

                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:overflow-visible">
                  <div className="flex md:contents gap-3 md:gap-0">
                    {stateData.partners.map((partner, index) => (
                      <div key={index} className="w-[85vw] md:w-auto flex-shrink-0 md:flex-shrink">
                        <PartnerCard partner={partner} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersDirectory;
