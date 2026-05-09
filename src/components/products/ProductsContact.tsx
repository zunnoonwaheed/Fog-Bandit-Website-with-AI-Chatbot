import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import logoImg from "@/assets/fog-bandit-logo-stacked.svg";

const ProductsContact = () => {
  return (
    <section className="py-14 md:py-[120px] bg-muted/50" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-start">
          <div>
            <img src={logoImg} alt="Fog Bandit" className="h-14 md:h-20 object-contain mb-4 hidden md:block" />
            <h2 className="font-inter text-[20px] md:text-[28px] font-semibold text-foreground mb-3 leading-snug">
              <span className="md:hidden">If it's worth protecting, it's worth stopping theft properly</span>
              <span className="hidden md:inline">Upgrade from detection to prevention</span>
            </h2>
            <p className="font-dm-sans text-[14px] md:text-[20px] font-medium text-muted-foreground mb-5 leading-relaxed">
              <span className="md:hidden">Talk to our team and get a Fog Bandit solution tailored to your space. No guesswork — just proven protection that works when it matters most.</span>
              <span className="hidden md:inline">Traditional systems tell you something went wrong. Fog Bandit ensures it doesn't. Speak with our team to get a system tailored to your space and risk level.</span>
            </p>
            <h3 className="font-inter font-semibold text-foreground mb-1.5 text-[15px] md:text-[18px]">Or phone us</h3>
            <p className="font-dm-sans text-[14px] md:text-[16px] text-foreground">1800 BANDIT (226348)</p>
            <p className="font-dm-sans text-[14px] md:text-[16px] text-foreground">+61 2 9999 9999 (outside Australia)</p>
          </div>

          <div className="space-y-3.5">
            <div className="grid grid-cols-2 gap-3.5">
              <div>
                <label className="text-[13px] font-bold text-foreground mb-1 block">First Name<span className="text-primary">*</span></label>
                <Input placeholder="Enter your first name" className="rounded-lg h-12 text-[13px] bg-[#F9F9F9] border-0 placeholder:text-[#94A3B8]" />
              </div>
              <div>
                <label className="text-[13px] font-bold text-foreground mb-1 block">Last Name<span className="text-primary">*</span></label>
                <Input placeholder="Enter your last name" className="rounded-lg h-12 text-[13px] bg-[#F9F9F9] border-0 placeholder:text-[#94A3B8]" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3.5">
              <div>
                <label className="text-[13px] font-bold text-foreground mb-1 block">Company<span className="text-primary">*</span></label>
                <Input placeholder="Enter your company name" className="rounded-lg h-12 text-[13px] bg-[#F9F9F9] border-0 placeholder:text-[#94A3B8]" />
              </div>
              <div>
                <label className="text-[13px] font-bold text-foreground mb-1 block">Email<span className="text-primary">*</span></label>
                <Input type="email" placeholder="Enter your email" className="rounded-lg h-12 text-[13px] bg-[#F9F9F9] border-0 placeholder:text-[#94A3B8]" />
              </div>
            </div>
            <div>
              <label className="text-[13px] font-bold text-foreground mb-1 block">Requirements</label>
              <Textarea placeholder="Tell us about your requirements" className="rounded-lg min-h-[120px] text-[13px] bg-[#F9F9F9] border-0 placeholder:text-[#94A3B8]" />
            </div>
            <Button
              onClick={() => toast.success("Thanks! Our team will be in touch shortly.")}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg h-12 text-[14px] font-semibold"
            >
              Request a quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsContact;
