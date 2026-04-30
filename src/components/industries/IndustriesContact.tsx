import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import logoImg from "@/assets/fog-bandit-logo-stacked.svg";

const IndustriesContact = () => {
  return (
    <section className="py-10 md:py-14 bg-muted/50" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-start">
          <div>
            <img src={logoImg} alt="Fog Bandit" className="h-16 md:h-20 object-contain mb-4 hidden md:block" />
            <h2 className="text-[18px] md:text-xl lg:text-[26px] font-bold text-foreground mb-3 leading-snug">
              <span className="md:hidden">If it's worth protecting, it's worth stopping theft properly</span>
              <span className="hidden md:inline">Know your risk before it becomes a loss</span>
            </h2>
            <p className="text-muted-foreground mb-5 leading-relaxed text-[13px] md:text-sm">
              <span className="md:hidden">Talk to our team and get a Fog Bandit solution tailored to your space. No guesswork — just proven protection that works when it matters most.</span>
              <span className="hidden md:inline">Get a tailored security assessment for your business. Our team will evaluate your space and recommend a solution designed to stop theft before it impacts your operations.</span>
            </p>
            <h3 className="font-semibold text-foreground mb-1.5 text-[13px] md:text-sm">Or phone us</h3>
            <p className="text-[13px] text-muted-foreground">1800 BANDIT (226348)</p>
            <p className="text-[13px] text-muted-foreground">+61 2 9999 9999 (outside Australia)</p>
          </div>

          <div className="space-y-3.5">
            <div className="grid grid-cols-2 gap-3.5">
              <div>
                <label className="text-[13px] font-medium text-foreground mb-1 block">First Name<span className="text-primary">*</span></label>
                <Input placeholder="Enter your first name" className="rounded-lg h-9 text-[13px]" />
              </div>
              <div>
                <label className="text-[13px] font-medium text-foreground mb-1 block">Last Name<span className="text-primary">*</span></label>
                <Input placeholder="Enter your last name" className="rounded-lg h-9 text-[13px]" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3.5">
              <div>
                <label className="text-[13px] font-medium text-foreground mb-1 block">Company<span className="text-primary">*</span></label>
                <Input placeholder="Enter your company name" className="rounded-lg h-9 text-[13px]" />
              </div>
              <div>
                <label className="text-[13px] font-medium text-foreground mb-1 block">Email<span className="text-primary">*</span></label>
                <Input type="email" placeholder="Enter your email" className="rounded-lg h-9 text-[13px]" />
              </div>
            </div>
            <div>
              <label className="text-[13px] font-medium text-foreground mb-1 block">Requirements</label>
              <Textarea placeholder="Tell us about your requirements" className="rounded-lg min-h-[80px] text-[13px]" />
            </div>
            <Button className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-lg h-10 text-[13px] font-semibold">
              Get my security plan
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesContact;
