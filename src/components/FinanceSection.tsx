import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import financeMeeting from "@/assets/finance-meeting.png";
import iconTick from "@/assets/icon-tick.svg";
import iconTrust from "@/assets/icon-finance-trust.svg";
import iconTerms from "@/assets/icon-finance-terms.svg";
import iconCoverage from "@/assets/icon-finance-coverage.svg";

const features = [
  { icon: iconTrust, title: "Trust & Reliability", desc: "Partnered with leading industrial financiers." },
  { icon: iconTerms, title: "Transparent Terms", desc: "No hidden fees, no complex jargon." },
  { icon: iconCoverage, title: "Immediate Coverage", desc: "Deployment begins as soon as finance is approved." },
];

const benefits = [
  "Low monthly installment options",
  "Fixed rates for better financial planning",
  "Rapid approval process for business owners",
];

const FinanceSection = () => {
  return (
    <section className="pb-14 lg:pb-[120px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left content */}
          <div className="flex flex-col h-full">
            <h2 className="section-heading text-left">
              Finance Assistance: Professional Protection, Flexible Payments.
            </h2>
            <p className="section-subtext mt-4 text-left">
              At Fog Bandit, we believe security should be accessible. Our
              Finance Assistance program allows manageable installments.
            </p>
            <Link to="/financing" className="btn-primary mt-6 inline-flex self-start">
              Apply for Financing <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="mt-10 flex-1 flex flex-col gap-4">
              {features.map((f) => (
                <div key={f.title} className="bg-background border border-border rounded-xl p-5 flex items-start gap-4 flex-1">
                  <img src={f.icon} alt="" className="w-8 h-8 shrink-0" />
                  <div>
                    <h4 className="font-heading font-bold text-secondary text-base">{f.title}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image + benefits */}
          <div>
            <div className="rounded-3xl overflow-hidden w-full">
              <img
                src={financeMeeting}
                alt="Finance assistance"
                className="w-full h-auto aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>
            <div className="mt-8 space-y-5">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <div className="shrink-0">
                    <img src={iconTick} alt="" className="w-7 h-7" />
                  </div>
                  <span className="text-base text-secondary font-medium">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinanceSection;
