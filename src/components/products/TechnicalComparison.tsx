import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const models = [
  {
    model: "Bandit 240 DB / DB/A",
    discharge: "28 m³/sec",
    coverage: "504 m³",
    density: "Visibility < 30cm",
    certs: [
      { label: "ANZ 4488", color: "bg-[#021373] text-white" },
      { label: "ISO 9001", color: "bg-[#021373] text-white" },
    ],
    power: "60W (Standby)",
  },
  {
    model: "Bandit 320 Compact",
    discharge: "20 m³/sec",
    coverage: "200 m³",
    density: "Visibility < 25cm",
    certs: [
      { label: "ANZ 4488", color: "bg-[#021373] text-white" },
      { label: "CE", color: "bg-[#021373] text-white" },
    ],
    power: "40W (Standby)",
  },
  {
    model: "Fog Bandit 320 Vertical",
    discharge: "15 m³/sec",
    coverage: "80 m³",
    density: "Visibility < 35cm",
    certs: [
      { label: "IPX4 Rated", color: "bg-[#021373] text-white" },
    ],
    power: "12V Battery / DC",
  },
  {
    model: "Fog Bandit 320 Ceiling",
    discharge: "10 m³/sec",
    coverage: "150 m³",
    density: "Visibility < 40cm",
    certs: [
      { label: "ISO 9001", color: "bg-[#021373] text-white" },
    ],
    power: "30W (Standby)",
  },
];

const TechnicalComparison = () => {
  return (
    <section className="pb-14 md:pb-[120px]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-inter text-[20px] md:text-[28px] font-semibold text-foreground mb-2">
            Technical Comparison & Certification
          </h2>
          <p className="font-dm-sans text-[14px] md:text-[18px] font-medium text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Detailed specifications to help you select the precise unit for your facility's volume and security requirements.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-background border border-border rounded-2xl p-6 lg:p-8">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-4 pr-4 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Model</th>
                <th className="pb-4 pr-4 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Discharge Rate</th>
                <th className="pb-4 pr-4 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Max Coverage (60s)</th>
                <th className="pb-4 pr-4 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Fog Density</th>
                <th className="pb-4 pr-4 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Certifications</th>
                <th className="pb-4 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Power Use</th>
              </tr>
            </thead>
            <tbody>
              {models.map((m, i) => (
                <tr key={i} className={i < models.length - 1 ? "border-b border-border" : ""}>
                  <td className="py-5 pr-4 text-[13px] font-bold text-foreground">{m.model}</td>
                  <td className="py-5 pr-4 text-[13px] text-muted-foreground">{m.discharge}</td>
                  <td className="py-5 pr-4 text-[13px] text-muted-foreground">{m.coverage}</td>
                  <td className="py-5 pr-4 text-[13px] text-muted-foreground">{m.density}</td>
                  <td className="py-5 pr-4">
                    <div className="flex gap-1.5 flex-wrap">
                      {m.certs.map((c, j) => (
                        <span key={j} className={`${c.color} text-[10px] font-semibold px-2 py-1 rounded`}>{c.label}</span>
                      ))}
                    </div>
                  </td>
                  <td className="py-5 text-[13px] text-muted-foreground">{m.power}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden bg-background border border-border rounded-2xl p-4 space-y-4">
          <div className="flex justify-between border-b border-border pb-3">
            <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Model</span>
            <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Discharge Rate</span>
          </div>
          {models.map((m, i) => (
            <div key={i} className={`pb-3 ${i < models.length - 1 ? "border-b border-border" : ""}`}>
              <div className="flex justify-between items-center">
                <p className="text-[13px] font-bold text-foreground">{m.model}</p>
                <span className="text-[12px] text-muted-foreground">{m.discharge}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Configuration CTA */}
        <div className="mt-8 md:mt-10 bg-background border border-border rounded-2xl p-5 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="font-inter text-[16px] md:text-[18px] font-bold text-foreground mb-1">
              Need a Custom Configuration?
            </h3>
            <p className="font-dm-sans text-[13px] md:text-[14px] text-muted-foreground leading-relaxed">
              Our engineers can design multi-unit arrays for stadiums, airports, and extreme-scale logistics hubs.
            </p>
          </div>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 md:px-8 h-11 md:h-12 text-[13px] md:text-[14px] font-semibold whitespace-nowrap flex-shrink-0 w-full md:w-auto">
            <Link to="/contact">Speak with a Consultant</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TechnicalComparison;
