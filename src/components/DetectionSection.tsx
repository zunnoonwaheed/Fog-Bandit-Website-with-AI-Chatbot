import { Timer } from "lucide-react";
import securityFogRoom from "@/assets/security-fog-room.png";
import iconSensor from "@/assets/icon-sensor.svg";
import iconBolt from "@/assets/icon-bolt.png";

const DetectionSection = () => {
  return (
    <section className="pb-14 md:pb-[120px]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Image - shows first on mobile */}
          <div className="relative order-first md:order-last md:justify-self-end w-full md:w-[609px] max-w-[336px] md:max-w-none mx-auto">
            <img
              src={securityFogRoom}
              alt="Fog deployment in luxury store"
              className="rounded-2xl object-cover w-full md:w-[609px] md:h-[448px] h-[281px]"
            />
            <div className="absolute bottom-3 left-3 md:bottom-5 md:left-5 bg-background/95 backdrop-blur-sm rounded-xl px-3 py-2 md:px-4 md:py-3 flex items-center gap-2.5 md:gap-3 shadow-lg">
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: "#021373" }}>
                <Timer className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-[10px] md:text-xs text-muted-foreground leading-none mb-0.5">Reaction Time</p>
                <p className="text-lg md:text-xl font-bold text-foreground leading-none">0.1 Sec</p>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="order-last md:order-first">
            <h2 className="font-inter text-[20px] md:text-[28px] font-semibold text-foreground mb-3 md:mb-4 leading-snug">
              Detection that triggers immediate action
            </h2>
            <p className="font-dm-sans text-[14px] md:text-[20px] font-medium text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              When an intrusion is detected, Fog Bandit responds instantly. Integrated with your alarm system, it receives the signal and deploys without delay.
            </p>

            <div className="space-y-5 md:space-y-6">
              <div className="flex gap-3 md:gap-4">
                <img src={iconSensor} alt="" className="flex-shrink-0 w-10 h-10 md:w-11 md:h-11" />
                <div>
                  <h3 className="font-poppins font-semibold text-foreground mb-1 text-[16px] md:text-[24px]">Sensor Trigger</h3>
                  <p className="font-dm-sans text-[14px] md:text-[18px] text-muted-foreground leading-relaxed">
                    Seamlessly connects with PIR, door, window, and alarm systems to detect unauthorized access the moment it happens.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4">
                <img src={iconBolt} alt="" className="flex-shrink-0 w-10 h-10 md:w-11 md:h-11" />
                <div>
                  <h3 className="font-poppins font-semibold text-foreground mb-1 text-[16px] md:text-[24px]">0.1s Reaction Time</h3>
                  <p className="font-dm-sans text-[14px] md:text-[18px] text-muted-foreground leading-relaxed">
                    Fog deployment begins almost instantly after detection, ensuring intruders have no time to act.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetectionSection;
