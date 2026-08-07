import { ChevronDown, Quote } from "lucide-react";

type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    id: "rd-testimonial-1",
    quote: "As Pawnbrokers we have a special responsibility to look after valuables belonging to our customers. Often these items are of great sentimental value. The Bandit is a powerful and effective product, which helps to prevent criminality in our stores.",
    name: "Sue Dixon",
    role: "Harvey and Thompson Pawnbrokers",
  },
  {
    id: "rd-testimonial-2",
    quote: "Scotmid Co-operative operates 350 retail outlets across Scotland, Northern Ireland and the North of England. Like most convenience retailers we have our fair share of break-ins. The Profit Protection Team searched the market for a deterrent solution that was both cost effective and would act as a substantial deterrent to would be thief's. We have installed Fog Bandit in most of our high risk stores and found it both reliable and very effective on deployment and as a viable deterrent.",
    name: "Jim McFedries",
    role: "Scotmid Co-operative Group",
  },
  {
    id: "rd-testimonial-3",
    quote: "The Fog Bandit worked perfectly! Nobody was hurt, we did not suffer any loss and the shop is back open this morning for Christmas trading. Without the Fog Bandit the outcome could have been very different. We feel assured by having the Fog Bandit installed and strongly suggest that other retail Jewellers do the same.",
    name: "Jamie Kirkland",
    role: "Cutting Jewellers",
  },
  {
    id: "rd-testimonial-4",
    quote: "I first saw Fog Bandit whilst looking at security products on the internet. I was drawn to security fog as a solution, because of the speed it fills the room, and the fact that you can stop your goods from being stolen. The Fog Bandit staff from sales to installation have been very good, and I am very happy with the installation across all three of our sites. Having the Fog Bandit installed, helps by knowing that if someone breaks in, there is a deterrent there instantly.",
    name: "Mr Chris Chambers",
    role: "General Manager, Torne Valley Ltd",
  },
  {
    id: "rd-testimonial-5",
    quote: "Bank Machine, the largest by volume of cash dispensed, independent operator of ATMs in the UK is proud of its association with Bandit UK. We have installed over 400 of the Bandit Fogging units concentrating on sites at high risk of attack. Our ethos is to protect the sites from attack and therefore also protect our ATM machines and the cash they contain, which I am pleased to say the Bandit has done on a regular basis since we started installing Bandits some 5 years ago.",
    name: "Michael Thwaites",
    role: "Bank Machine Ltd",
  },
  {
    id: "rd-testimonial-6",
    quote: "The Fog Bandit is the single most cost effective security product investment made by G4S to date.",
    name: "Hugh Gilmour",
    role: "G4S Cash Solutions",
  },
  {
    id: "rd-testimonial-7",
    quote: "The Bandit was installed at all of our non 24 hour operated Petrol Filling Stations, to protect against burglaries which were steadily increasing. The Bandit has proved to be an extremely reliable and immensely efficient system in dramatically reducing our problem.",
    name: "Michael Hunt",
    role: "Shell UK",
  },
  {
    id: "rd-testimonial-8",
    quote: "We suffered an attempted break in at our Professional Shop last night. The Fog Bandit worked perfectly with the alarm and the intruders retreated before gaining entry! The system has been reset and as the canister has only activated twice, there should not be any problem.",
    name: "David Hughes",
    role: "Haydock Park Golf Club",
  },
  {
    id: "rd-testimonial-9",
    quote: "I am writing to thank you for your recent installation of Fog Bandit in my shop. I am absolutely delighted with the service I have received from you and your colleagues from the initial contact and enquiry through to the installation last week. I was pleased that when I contacted you, that you were able to visit with a 'demonstration unit'. Once seen in action, I was more than happy to place the order and have the system installed.",
    name: "S J Robertson PJDip",
    role: "Robertson's Jewellers Ltd",
  },
  {
    id: "rd-testimonial-10",
    quote: "Well your Fog Bandit worked brilliantly! We had four armed robbers who attacked the window from inside with axes and sledgehammers and two of the girls hit the buttons and they were off. The inside glass is also armoured so they didn't get away with anything. Pleased to say the Police caught all five of them in Pulborough within an hour and a half.",
    name: "Mandy Sargeant",
    role: "R L Austen Jewellers",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 rounded-2xl bg-[#F5F5F5] p-6 md:p-7 flex items-center">
        <p className="font-dm-sans text-[13px] md:text-[14px] text-[#3A3A3A] leading-relaxed">
          {testimonial.quote}
        </p>
      </div>

      {/* Quote mark and author */}
      <div className="mt-4 md:mt-5 flex items-start gap-3">
        <Quote className="w-6 h-6 text-primary flex-shrink-0 fill-primary/10" aria-hidden="true" />
        <div>
          <p className="font-dm-sans text-[13px] md:text-[14px] font-semibold text-[#1A1A1A]">
            {testimonial.name}
          </p>
          <p className="font-dm-sans text-[11px] md:text-[12px] text-[#666666]">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
};

const RealDeploymentsTestimonials = () => {
  return (
    <section className="pt-[100px] lg:pt-[120px] pb-0">
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
