import fogRoomMobile from "@/assets/fog-room-mobile.png";
import fogRoomDesktop from "@/assets/fog-room-desktop.png";
import iconTrigger from "@/assets/icon-howitworks-trigger.svg";
import iconDeploy from "@/assets/icon-howitworks-deploy.svg";
import iconEyeOff from "@/assets/icon-howitworks-eyeoff.svg";
import iconBell from "@/assets/icon-howitworks-bell.svg";
import tradingHoursBg1 from "@/assets/trading-hours-bg-1.svg";
import tradingHoursBg2 from "@/assets/trading-hours-bg-2.svg";
import tradingHoursBg3 from "@/assets/trading-hours-bg-3.svg";

const features = [
  { icon: iconTrigger, title: "Immediate trigger", desc: "Activates the moment your alarm detects intrusion — no delay, no gap." },
  { icon: iconDeploy, title: "Instant fog deployment", desc: "Fills the space within seconds, removing visibility and control." },
  { icon: iconEyeOff, title: "Disorientation effect", desc: "Intruders lose their sense of direction, awareness, and ability to act, leaving them with no option but to flee the area." },
  { icon: iconBell, title: "Theft prevention", desc: "Stops incidents before assets are touched — not after loss is recorded." },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="pb-14 lg:pb-[120px]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-heading">Stop Crime At The Point Of Entry</h2>
          <p className="section-subtext mt-4">
            Traditional systems alert you after intrusion. Fog Bandit intervenes immediately, shutting down
            movement, visibility, and intent before damage occurs.
          </p>
        </div>


        {/* Image - responsive fog room images */}
        <div className="mt-10 lg:mt-12 rounded-2xl overflow-hidden relative w-full aspect-[366/511] lg:aspect-[1240/541]">
          {/* Mobile fog room image */}
          <img
            src={fogRoomMobile}
            alt="Fog Bandit security fog in action"
            data-no-animate
            className="absolute inset-0 w-full h-full object-cover lg:hidden"
          />
          {/* Desktop fog room image */}
          <img
            src={fogRoomDesktop}
            alt="Fog Bandit security fog in action"
            data-no-animate
            className="absolute inset-0 w-full h-full object-cover hidden lg:block"
          />
        </div>

        <div className="mt-6 lg:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => (
            <div key={f.title} className="bg-background border border-border rounded-xl p-5">
              <img src={f.icon} alt="" className="w-10 h-10" />
              <h3 className="font-heading font-bold text-secondary mt-4 text-[15px]">{f.title}</h3>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Trading Hours Protection Section */}
        <div className="mt-16 lg:mt-20">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="section-heading">Trading Hours Protection</h2>
            <p className="section-subtext mt-4">
              Round-the-clock security that adapts to your business schedule
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div
              className="relative rounded-2xl overflow-hidden h-[320px] lg:h-[400px] group"
              style={{
                backgroundImage: `url(${tradingHoursBg1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="relative h-full flex flex-col justify-end p-6 lg:p-8">
                <h3 className="font-heading font-bold text-white text-xl lg:text-2xl mb-3">
                  24/7 Monitoring
                </h3>
                <p className="text-white/90 text-sm lg:text-base">
                  Continuous protection whether you're open for business or closed for the night
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="relative rounded-2xl overflow-hidden h-[320px] lg:h-[400px] group"
              style={{
                backgroundImage: `url(${tradingHoursBg2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="relative h-full flex flex-col justify-end p-6 lg:p-8">
                <h3 className="font-heading font-bold text-white text-xl lg:text-2xl mb-3">
                  After-Hours Defense
                </h3>
                <p className="text-white/90 text-sm lg:text-base">
                  Enhanced security during high-risk periods when your premises are unattended
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="relative rounded-2xl overflow-hidden h-[320px] lg:h-[400px] group"
              style={{
                backgroundImage: `url(${tradingHoursBg3})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="relative h-full flex flex-col justify-end p-6 lg:p-8">
                <h3 className="font-heading font-bold text-white text-xl lg:text-2xl mb-3">
                  Smart Scheduling
                </h3>
                <p className="text-white/90 text-sm lg:text-base">
                  Automated activation tailored to your operating hours and security needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
