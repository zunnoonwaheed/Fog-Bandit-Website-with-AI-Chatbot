import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const models = [
  {
    model: "Bandit 240 DB / DB/A",
    performance: "30 m³/sec",
    bestUse: "Small to Large spaces, narrow spaces, high ceiling spaces and hidden installs",
    visibility: "< 30 cm (zero visibility), Dense Fog",
    certs: [
      { label: "EN 50131-8", color: "bg-[#021373]" },
      { label: "NF&A2P", color: "bg-[#021373]" },
      { label: "ISO 9001", color: "bg-[#021373]" },
      { label: "CNPP", color: "bg-[#021373]" },
      { label: "CE", color: "bg-[#021373]" },
      { label: "Acclaim", color: "bg-[#021373]" },
      { label: "A-Tick", color: "bg-[#021373]" },
      { label: "sDs", color: "bg-[#021373]" },
    ],
    note: "(World's only Security Fogging Device to achieve the Highest NF&A2P Security Level 2 Shield.)",
  },
  {
    model: "Bandit 320 Compact",
    performance: "50 m³/sec",
    bestUse: "Small to Medium spaces, narrow spaces, high ceiling spaces, Split spaces and hidden installs",
    visibility: "< 30 cm (zero visibility), Dense Fog",
    certs: [
      { label: "EN 50131-8", color: "bg-[#021373]" },
      { label: "NF&A2P", color: "bg-[#021373]" },
      { label: "ISO 9001", color: "bg-[#021373]" },
      { label: "CNPP", color: "bg-[#021373]" },
      { label: "CE", color: "bg-[#021373]" },
      { label: "Acclaim", color: "bg-[#021373]" },
      { label: "A-Tick", color: "bg-[#021373]" },
      { label: "sDs", color: "bg-[#021373]" },
    ],
    note: "(World's only Security Fogging Device to achieve the Highest NF&A2P Security Level 2 Shield.)",
  },
];

const TechnicalComparison = () => {
  return (
    <section className="pb-14 md:pb-[100px]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-inter text-[24px] md:text-[32px] font-bold text-[#111827] mb-3">
            Technical Comparison & Certification
          </h2>
          <p className="font-dm-sans text-[14px] md:text-[16px] text-[#6B7280] leading-[1.6] max-w-2xl mx-auto">
            Detailed specifications to help you select the precise unit for your facility's volume and security requirements.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white border border-[#E5E7EB] rounded-[16px] p-8 shadow-sm">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[#E5E7EB]">
                <th className="pb-5 pr-6 text-[11px] font-bold text-[#6B7280] uppercase tracking-wider text-left">MODEL</th>
                <th className="pb-5 pr-6 text-[11px] font-bold text-[#6B7280] uppercase tracking-wider text-left">PERFORMANCE</th>
                <th className="pb-5 pr-6 text-[11px] font-bold text-[#6B7280] uppercase tracking-wider text-left">BEST USE</th>
                <th className="pb-5 pr-6 text-[11px] font-bold text-[#6B7280] uppercase tracking-wider text-left">VISIBILITY</th>
                <th className="pb-5 text-[11px] font-bold text-[#6B7280] uppercase tracking-wider text-left">CERTIFICATIONS</th>
              </tr>
            </thead>
            <tbody>
              {models.map((m, i) => (
                <tr key={i} className={i < models.length - 1 ? "border-b border-[#E5E7EB]" : ""}>
                  <td className="py-8 pr-6 text-[14px] font-bold text-[#111827] align-top">{m.model}</td>
                  <td className="py-8 pr-6 text-[14px] text-[#374151] align-top">{m.performance}</td>
                  <td className="py-8 pr-6 text-[13px] text-[#4B5563] leading-[1.6] max-w-[280px] align-top">{m.bestUse}</td>
                  <td className="py-8 pr-6 text-[13px] text-[#374151] align-top">{m.visibility}</td>
                  <td className="py-8 align-top">
                    <div className="mb-2">
                      {/* Row 1: 2 tags */}
                      <div className="flex gap-1.5 mb-1.5">
                        {m.certs.slice(0, 2).map((c, j) => (
                          <span key={j} className={`${c.color} text-white text-[10px] font-semibold px-2.5 py-1 rounded`}>{c.label}</span>
                        ))}
                      </div>
                      {/* Row 2: 3 tags */}
                      <div className="flex gap-1.5 mb-1.5">
                        {m.certs.slice(2, 5).map((c, j) => (
                          <span key={j} className={`${c.color} text-white text-[10px] font-semibold px-2.5 py-1 rounded`}>{c.label}</span>
                        ))}
                      </div>
                      {/* Row 3: 3 tags */}
                      <div className="flex gap-1.5">
                        {m.certs.slice(5, 8).map((c, j) => (
                          <span key={j} className={`${c.color} text-white text-[10px] font-semibold px-2.5 py-1 rounded`}>{c.label}</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-[10px] text-[#6B7280] leading-[1.4] max-w-[200px]">{m.note}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden bg-white border border-[#E5E7EB] rounded-[16px] p-5 space-y-4 shadow-sm">
          {models.map((m, i) => (
            <div key={i} className={`pb-4 ${i < models.length - 1 ? "border-b border-[#E5E7EB]" : ""}`}>
              <p className="text-[14px] font-bold text-[#111827] mb-2">{m.model}</p>
              <p className="text-[12px] text-[#6B7280] mb-3">{m.bestUse}</p>
              <div className="flex gap-1.5 flex-wrap">
                {m.certs.slice(0, 4).map((c, j) => (
                  <span key={j} className={`${c.color} text-white text-[9px] font-semibold px-2 py-1 rounded`}>{c.label}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Custom Configuration CTA */}
        <div className="mt-10 md:mt-12 bg-white border border-[#E5E7EB] rounded-[16px] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-sm">
          <div>
            <h3 className="font-inter text-[17px] md:text-[19px] font-bold text-[#111827] mb-2">
              Need a Custom Configuration?
            </h3>
            <p className="font-dm-sans text-[13px] md:text-[14px] text-[#6B7280] leading-[1.6]">
              Our engineers can design multi-unit arrays for stadiums, airports, and extreme-scale logistics hubs.
            </p>
          </div>
          <Button asChild className="bg-[#DC2626] text-white hover:bg-[#B91C1C] rounded-[10px] px-7 h-12 text-[14px] font-semibold whitespace-nowrap flex-shrink-0 w-full md:w-auto shadow-none">
            <Link to="/contact">Speak with a Consultant</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TechnicalComparison;
