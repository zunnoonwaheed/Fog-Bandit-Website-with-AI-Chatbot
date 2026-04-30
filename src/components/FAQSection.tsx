import { useState } from "react";
import { Plus, Minus, ThumbsUp, ThumbsDown } from "lucide-react";

const faqs = [
  {
    question: "What is Fog Bandit?",
    answer: "Fog Bandit is an active security system that deploys dense fog instantly upon intrusion, preventing criminals from seeing, navigating, or accessing valuables.",
  },
  {
    question: "Is the fog safe?",
    answer: "Yes, the fog is completely harmless to humans, pets, and electronics. It's made from a glycol-based solution that dissipates naturally.",
  },
  {
    question: "How fast does it activate?",
    answer: "Fog Bandit activates within 0.1 seconds of trigger, filling a room with dense fog in under 3 seconds.",
  },
  {
    question: "Does the fog leave any residue?",
    answer: "The fog leaves minimal to no residue. In 95% of cases, no cleanup is required after deployment.",
  },
  {
    question: "How much capital can I protect?",
    answer: "Fog Bandit systems protect assets ranging from small retail stores to large warehouses and commercial facilities.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="pb-14 lg:pb-[120px]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-heading">Everything You Need To Know</h2>
          <p className="section-subtext mt-4">
            Clear answers to the most common questions about Fog Bandit — from how it
            works to how it protects your space in real-world situations.
          </p>
        </div>

        <div className="mt-10 bg-background rounded-2xl overflow-hidden px-6 py-2">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="font-heading font-bold text-secondary text-[15px] pr-4">{faq.question}</span>
                <div className="w-7 h-7 rounded-full bg-[hsl(var(--brand-blue))] flex items-center justify-center shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-3.5 h-3.5 text-secondary-foreground" />
                  ) : (
                    <Plus className="w-3.5 h-3.5 text-secondary-foreground" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="pb-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                  <div className="mt-3 inline-flex items-center gap-2 bg-muted rounded-full px-3 py-1.5">
                    <span className="text-xs text-muted-foreground">Was this content helpful?</span>
                    <button className="text-muted-foreground hover:text-secondary"><ThumbsUp className="w-3.5 h-3.5" /></button>
                    <button className="text-muted-foreground hover:text-secondary"><ThumbsDown className="w-3.5 h-3.5" /></button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
