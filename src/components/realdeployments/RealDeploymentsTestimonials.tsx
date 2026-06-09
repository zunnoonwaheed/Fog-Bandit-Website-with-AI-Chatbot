import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Testimonial = {
  id: string;
  image: string;
  quote: string;
  name: string;
  role: string;
  videoUrl?: string;
};

const testimonials: Testimonial[] = [
  {
    id: "rd-testimonial-1",
    image: "/assets/rd-testimonial-1.png",
    quote: "We haven't had a single loss since the install.",
    name: "David H.",
    role: "National Retail Chain",
    videoUrl: "/assets/videos/left-first-video.mov",
  },
  {
    id: "rd-testimonial-2",
    image: "/assets/rd-testimonial-2.png",
    quote: "The speed is what saved our stock during a raid.",
    name: "Elena R.",
    role: "Boutique Jewellery Owner",
    videoUrl: "/assets/videos/central-video.mp4",
  },
  {
    id: "rd-testimonial-3",
    image: "/assets/rd-testimonial-3.png",
    quote: "It's the most reliable active layer in our stack.",
    name: "Mark S.",
    role: "Operations Director",
    videoUrl: "/assets/videos/right-first-video.mp4",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="flex flex-col">
      <div className="relative rounded-2xl overflow-hidden cursor-pointer" style={{ height: "362.66px" }}>
        {isPlaying && testimonial.videoUrl ? (
          <video
            src={testimonial.videoUrl}
            controls
            autoPlay
            className="w-full h-full object-cover"
            playsInline
            onEnded={() => setIsPlaying(false)}
            onPause={handleVideoPause}
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <button
            onClick={() => setIsPlaying(true)}
            className="w-full h-full"
            aria-label={`Play testimonial from ${testimonial.name}`}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </button>
        )}
      </div>

      {/* Quote and author */}
      <div className="mt-4 md:mt-6">
        <p className="font-dm-sans text-[13px] md:text-[15px] text-[#1A1A1A] leading-relaxed">
          "{testimonial.quote}"
        </p>
        <p className="font-dm-sans text-[11px] md:text-[12px] text-[#1A1A1A] mt-3">
          <span className="font-semibold">{testimonial.name}</span>
          <span className="text-[#666666]">, {testimonial.role}</span>
        </p>
      </div>
    </div>
  );
};

const RealDeploymentsTestimonials = () => {
  return (
    <section className="pb-[100px] lg:pb-[120px]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="section-heading">Hear From Businesses We Protect</h2>
          <p className="section-subtext mt-4">
            Hear directly from security leaders and operators using Fog Bandit every day.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 md:mt-10">
          <a
            href="/case-studies"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-[15px] transition-all hover:opacity-90"
          >
            View Case Studies
            <ChevronDown className="w-4 h-4" />
          </a>
          <a
            href="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-[15px] transition-all hover:opacity-90 text-white"
            style={{ backgroundColor: "hsl(var(--brand-blue))" }}
          >
            Explore Products
            <ChevronDown className="w-4 h-4" />
          </a>
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Mobile: Horizontal scroll carousel */}
        <div className="md:hidden mt-10 overflow-x-auto scrollbar-hide -mx-4 px-4">
          <div className="flex gap-4 snap-x snap-mandatory">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`min-w-[85vw] snap-center ${index === testimonials.length - 1 ? 'mr-8' : ''}`}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealDeploymentsTestimonials;
