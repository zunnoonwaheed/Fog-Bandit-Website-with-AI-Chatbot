import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonialCardBg from "@/assets/testimonial-card-bg.jpg";
import sarahCardBg from "@/assets/testimonial-sarah-bg.jpg";
import avatarPatrick from "@/assets/avatar-patrick.png";
import avatarPia from "@/assets/avatar-pia.png";
import avatarRob from "@/assets/avatar-rob.png";
import avatarSarah from "@/assets/avatar-sarah.png";

const imageTestimonials = [
  {
    img: testimonial1,
    avatar: avatarPatrick,
    name: "Frank",
    role: "Elk Fish Robotics WA",
    quote: "The glass got broken outside and the fog bandit stopped the intruders and instantly foiled the robbery. Thank you!",
    aspect: "aspect-[685/363]",
  },
  {
    img: testimonial2,
    avatar: avatarPia,
    name: "Jack",
    role: "",
    quote: "I sleep well knowing that Fog Bandit is on Guard. I highly recommend Fog Bandit for your business, property or asset!",
    aspect: "aspect-[535/363]",
  },
];

const CaseStudiesTestimonials = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8">
          <h2 className="font-inter text-[20px] md:text-[28px] font-semibold text-foreground mb-2 leading-snug">
            <span className="text-primary">Trusted by businesses</span> that can't afford downtime
          </h2>
          <p className="font-dm-sans text-muted-foreground text-[14px] md:text-[18px] font-medium leading-relaxed">
            Hear directly from security leaders and operators using Fog Bandit every day.
          </p>
        </div>

        {/* Image testimonials - 2 cols on desktop; mobile shows only the first */}
        <div className="grid grid-cols-1 md:grid-cols-[685fr_535fr] gap-5 mb-5">
          {imageTestimonials.map((t, i) => (
            <div key={i} className={`${i === 1 ? "hidden md:block" : ""} rounded-xl overflow-hidden border border-border bg-card`}>
              <img
                src={t.img}
                alt={t.name}
                className={`w-full ${t.aspect} object-cover`}
                loading="lazy"
              />
              <div className="p-4 md:p-5">
                <div className="flex items-center gap-3 mb-3">
                  <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full object-cover" loading="lazy" />
                  <div>
                    <p className="font-semibold text-foreground text-[13px]">{t.name}</p>
                    {t.role && <p className="text-muted-foreground text-[11px]">{t.role}</p>}
                  </div>
                </div>
                <p className="text-muted-foreground text-[12px] md:text-[13px] leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row: Kamlesh text | Sukoon image card | Frank text */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Left text testimonial */}
          <div className="border border-border rounded-xl p-5 flex flex-col bg-card">
            <div className="flex items-center gap-3 mb-3">
              <img src={avatarRob} alt="Kamlesh" className="w-9 h-9 rounded-full object-cover" loading="lazy" />
              <div>
                <p className="font-semibold text-foreground text-[13px]">Kamlesh</p>
                <p className="text-muted-foreground text-[11px]">Sindhiz Group of Companies ACT</p>
              </div>
            </div>
            <div className="text-accent text-[20px] leading-none mb-2">❝</div>
            <p className="text-muted-foreground text-[12px] md:text-[13px] leading-relaxed italic flex-1">
              "The Fog Bandit was installed at all our Tobacco Stores in ACT & NSW, to protect against burglaries which were steadily increasing. The Fog Bandit has proved to be an extremely reliable and immensely efficient system in dramatically reducing our problem and foiling robberies without any failure."
            </p>
            <div className="text-accent text-[20px] leading-none mt-2 text-right">❞</div>
          </div>

          {/* Middle - Sukoon image background card with frosted overlay - desktop only */}
          <div className="hidden md:flex rounded-xl overflow-hidden relative min-h-[303px] items-end p-6">
            <img
              src={sarahCardBg}
              alt="Fog deployment"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="relative w-full rounded-xl bg-white/30 backdrop-blur-md p-4 text-white">
              <div className="flex items-center gap-3 mb-2">
                <img src={avatarSarah} alt="Sukoon Bedi" className="w-9 h-9 rounded-md object-cover" loading="lazy" />
                <div>
                  <p className="font-semibold text-[13px]">Sukoon Bedi</p>
                  <p className="text-white/80 text-[11px]">IGA Winchelsea VIC</p>
                </div>
              </div>
              <p className="text-[12px] md:text-[13px] leading-relaxed italic">
                "The Fog Bandit worked perfectly, and we did not suffer any loss. We feel assured by having the Fog Bandit installed."
              </p>
            </div>
          </div>

          {/* Right text testimonial - desktop only */}
          <div className="hidden md:flex border border-border rounded-xl p-5 flex-col bg-card">
            <div className="flex items-center gap-3 mb-3">
              <img src={avatarRob} alt="Frank" className="w-9 h-9 rounded-full object-cover" loading="lazy" />
              <div>
                <p className="font-semibold text-foreground text-[13px]">Frank</p>
                <p className="text-muted-foreground text-[11px]">Elk Fish Robotics WA</p>
              </div>
            </div>
            <div className="text-accent text-[20px] leading-none mb-2">❝</div>
            <p className="text-muted-foreground text-[12px] md:text-[13px] leading-relaxed italic flex-1">
              "The glass got broken outside and the fog bandit stopped the intruders and instantly foiled the robbery. Thank you!"
            </p>
            <div className="text-accent text-[20px] leading-none mt-2 text-right">❞</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesTestimonials;
