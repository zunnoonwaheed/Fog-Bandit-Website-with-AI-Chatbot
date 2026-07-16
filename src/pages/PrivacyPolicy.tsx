import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const policySections = [
  {
    title: "2. Information We Collect",
    content:
      "We may collect names, business details, email addresses, phone numbers, postal addresses, product and warranty information, purchase history, technical support information, website usage information and other information required to provide our products and services.",
  },
  {
    title: "3. How We Use Personal Information",
    content:
      "We use personal information to provide products and services, process orders, manage warranties, provide customer support, communicate with customers, comply with legal obligations and improve our services.",
  },
  {
    title: "4. Marketing Communications",
    content:
      "We may send marketing communications by email, telephone or post. Individuals may opt out of marketing communications at any time.",
  },
  {
    title: "5. Cookies and Analytics",
    content:
      "Our website may use essential, analytics and marketing cookies. These technologies help us understand website usage, improve functionality and measure the effectiveness of our communications. Users can manage cookie preferences through their browser settings.",
  },
  {
    title: "6. Disclosure of Information",
    content:
      "We do not sell personal information. Information may be disclosed to trusted service providers, professional advisers, regulators or authorities where required by law or where necessary to provide our services.",
  },
  {
    title: "7. Overseas Disclosure",
    content:
      "Some service providers may store or process information outside Australia. Where this occurs, reasonable steps will be taken to ensure information is protected in accordance with applicable privacy laws.",
  },
  {
    title: "8. Data Retention",
    content:
      "Personal information is retained only for as long as necessary to fulfil the purposes for which it was collected, satisfy legal requirements, resolve disputes and enforce agreements.",
  },
  {
    title: "9. Security",
    content:
      "We implement appropriate technical, administrative and organisational safeguards to protect personal information against unauthorised access, disclosure, alteration or destruction.",
  },
  {
    title: "10. Access and Correction",
    content:
      "You may request access to or correction of personal information held by Fog Bandit ANZ by contacting us.",
  },
  {
    title: "11. Privacy Complaints",
    content:
      "If you believe your privacy has been breached, please contact Fog Bandit ANZ in writing. We will investigate your complaint and respond within a reasonable timeframe. If you are not satisfied with our response, you may contact the Office of the Australian Information Commissioner (OAIC).",
  },
  {
    title: "12. Changes to this Policy",
    content:
      "This Privacy Policy may be updated from time to time. The latest version will be published on our website.",
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] relative">
      <Navbar mobileMode="cta" />

      <main>
        <section className="page-hero pt-28 pb-10 md:pt-[140px] lg:pt-[190px] md:pb-14">
          <div className="container mx-auto px-4">
            <header className="max-w-4xl mx-auto text-center">
              <p className="font-dm-sans text-[11px] md:text-[12px] font-semibold text-primary/70 tracking-[0.15em] uppercase mb-3 md:mb-4">
                Privacy &amp; Data Protection
              </p>
              <h1 className="font-inter text-[28px] md:text-[40px] lg:text-[44px] font-semibold tracking-[-0.035em] text-foreground leading-[1.12] mb-3 md:mb-4">
                FOG BANDIT ANZ Privacy Policy
              </h1>
              <p className="font-dm-sans text-[14px] md:text-[16px] font-semibold text-foreground mb-5">
                Last Updated: June 2026
              </p>
              <p className="font-dm-sans text-[14px] md:text-[17px] font-medium text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Fog Bandit ANZ is committed to protecting your privacy and handling personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs). This Privacy Policy explains how we collect, use, disclose and protect personal information.
              </p>
            </header>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-4">
            <article className="premium-card max-w-4xl mx-auto rounded-2xl px-5 py-7 sm:px-8 md:px-12 md:py-12">
              <div className="space-y-8 md:space-y-10">
                {policySections.map((section) => (
                  <section key={section.title}>
                    <h2 className="font-inter text-[19px] md:text-[23px] font-semibold text-foreground mb-3">
                      {section.title}
                    </h2>
                    <p className="font-dm-sans text-[14px] md:text-[16px] text-muted-foreground leading-7">
                      {section.content}
                    </p>
                  </section>
                ))}

                <div className="border-t border-border pt-6 md:pt-8">
                  <p className="font-dm-sans text-[12px] md:text-[13px] text-muted-foreground text-center">
                    © Penta Services Australia Pty Ltd trading as Fog Bandit ANZ
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
