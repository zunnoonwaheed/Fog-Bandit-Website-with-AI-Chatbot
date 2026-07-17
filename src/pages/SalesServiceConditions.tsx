import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type SalesSection = {
  title: string;
  clauses: string[];
};

const salesSections: SalesSection[] = [
  {
    title: "1. General",
    clauses: [
      "1.1 These Sales & Service Conditions apply to all quotations, sales, supply, installations, repairs, recharges, maintenance services and other dealings relating to Fog Bandit products and associated services supplied by Fog Bandit ANZ / Penta Services Australia Pty Ltd (“the Company”), unless otherwise agreed in writing.",
      "1.2 By placing an order with the Company, the customer is deemed to have accepted these Sales & Service Conditions.",
      "1.3 Any terms or conditions contained in the customer’s purchase order, correspondence or other documents that are inconsistent with these conditions will not apply unless expressly agreed to in writing by the Company.",
      "1.4 These conditions remain applicable to all future transactions between the Company and the customer unless otherwise agreed in writing.",
    ],
  },
  {
    title: "2. Quotations and Orders",
    clauses: [
      "2.1 All quotations issued by the Company are subject to availability and are valid for the period stated on the quotation, unless withdrawn or amended earlier by the Company.",
      "2.2 An order is only accepted once confirmed by the Company in writing, by invoice, by dispatch of goods, or by commencement of services.",
      "2.3 The Company reserves the right to refuse any order at its discretion.",
      "2.4 Any variation to an accepted order, including changes to quantities, delivery requirements, installation scope or specifications, may result in revised pricing and delivery timeframes.",
    ],
  },
  {
    title: "3. Product Information and Specifications",
    clauses: [
      "3.1 Product descriptions, brochures, manuals, dimensions, capacities, images, technical data, performance guidance and installation guidelines are provided as a general guide only unless expressly stated otherwise in writing.",
      "3.2 Minor variations in dimensions, appearance, packaging, components, weights, technical specifications or performance characteristics do not entitle the customer to reject the goods, cancel an order or claim compensation.",
      "3.3 Unless expressly agreed in writing, the Company does not accept responsibility for the suitability of products for any particular application, project or operating environment determined by the customer, installer, consultant or third party.",
      "3.4 It is the customer’s responsibility to ensure that the selected products are suitable for the intended premises, layout, security risk profile, and integration requirements.",
    ],
  },
  {
    title: "4. Pricing",
    clauses: [
      "4.1 Unless otherwise stated, all prices are in Australian Dollars (AUD).",
      "4.2 Prices quoted by the Company are exclusive of GST unless otherwise stated.",
      "4.3 Freight, insurance, customs charges, special packaging, permits, access equipment, after-hours labour, electrical works, builder’s works, alarm integration, third-party programming, and any other additional works outside the quoted scope may be charged separately unless expressly included in the quotation.",
      "4.4 The Company reserves the right to correct any clerical, pricing or typographical errors.",
    ],
  },
  {
    title: "5. Payment Terms",
    clauses: [
      "5.1 Payment terms are as stated on the Company’s quotation or invoice, unless otherwise agreed in writing.",
      "5.2 Unless otherwise agreed in writing, all invoices must be paid within the payment period stated on the invoice.",
      "5.3 The Company may require a deposit, progress payment, or full payment prior to dispatch, installation or commissioning.",
      "5.4 If the customer fails to make payment by the due date, the Company may suspend supply, installation, maintenance, warranty processing or any further services; all outstanding monies become immediately due and payable; the Company may charge interest on overdue amounts at a reasonable commercial rate; and the customer is liable for any reasonable debt recovery, legal or collection costs incurred by the Company.",
      "5.5 The customer may not withhold payment due to any dispute, set-off, counterclaim or delay in another matter unless agreed in writing by the Company.",
    ],
  },
  {
    title: "6. Retention of Title",
    clauses: [
      "6.1 Ownership of all goods supplied by the Company remains with the Company until the Company has received payment in full for those goods and any other amounts owing by the customer.",
      "6.2 Until full payment has been received, the customer must store the goods separately and clearly identify them as the Company’s goods, keep the goods in good condition, and not sell, dispose of, alter, charge or encumber the goods without the Company’s written consent.",
      "6.3 If payment is overdue, the Company may enter the customer’s premises or any premises where the goods are stored, to recover the goods, to the extent permitted by law.",
    ],
  },
  {
    title: "7. Delivery, Dispatch and Risk",
    clauses: [
      "7.1 Delivery dates and dispatch timeframes provided by the Company are estimates only and are not guaranteed unless expressly confirmed in writing.",
      "7.2 The Company will not be liable for any delay in delivery, dispatch, installation or completion caused by events outside its reasonable control, including but not limited to supplier delays, shipping delays, customs clearance, labour shortages, site access issues, weather, industrial action or force majeure events.",
      "7.3 Unless otherwise agreed in writing, goods are supplied ex-works / ex-warehouse from the Company’s nominated premises or dispatch location.",
      "7.4 Risk in the goods passes to the customer upon dispatch, collection, or delivery to the carrier, whichever occurs first.",
      "7.5 Freight and transit insurance are the responsibility of the customer unless otherwise stated in writing.",
      "7.6 The customer must inspect all goods upon receipt and notify the Company in writing of any transit damage, shortage or incorrect supply within 48 hours of delivery.",
    ],
  },
  {
    title: "8. Installation and Site Requirements",
    clauses: [
      "8.1 Where installation services are included, the Company’s scope is limited to the works expressly stated in the quotation or proposal.",
      "8.2 Unless expressly included in writing, the following are excluded from the Company’s scope: electrical works and power outlets; patching, painting, making good, builder’s works or reinstatement; data/network works unless specifically quoted; third-party alarm programming and integration; civil works, trenching or special access equipment; and permits, inductions, traffic management or access costs imposed by the site.",
      "8.3 The customer must provide safe and timely access to site, including all approvals, inductions, permits, keys, alarm codes and any required access arrangements.",
      "8.4 The customer is responsible for ensuring that any third-party alarm, access control, CCTV or building management system provider is available where integration is required, unless the Company has expressly quoted to undertake such integration.",
      "8.5 Where the Company provides outputs, relay connections or installation readiness for third-party integration, the final programming or integration of the third-party system remains the responsibility of the relevant third-party provider unless otherwise agreed in writing.",
      "8.6 If the Company attends site and is delayed due to customer-side issues, missing access, unavailable third-party trades, incomplete site readiness or changes in scope, the Company reserves the right to charge additional labour, travel and rescheduling costs.",
    ],
  },
  {
    title: "9. Customer Responsibilities",
    clauses: [
      "9.1 The customer is responsible for providing accurate site information, dimensions and system requirements; ensuring the proposed system is approved by any relevant landlord, builder, insurer, consultant or site manager where required; ensuring all existing alarm, electrical and integration infrastructure is suitable and compliant; ensuring authorised representatives are available to approve works and answer site queries; and using the products in accordance with the Company’s manuals, training, guidance and safety instructions.",
      "9.2 The customer must not use, alter or install Fog Bandit products in a manner contrary to the manufacturer’s instructions or applicable standards.",
    ],
  },
  {
    title: "10. Warranty",
    clauses: [
      "10.1 Subject to the terms of this clause, Fog Bandit products supplied by the Company carry a five (5) year warranty from the date of manufacture against hidden manufacturing faults, unless otherwise stated in writing.",
      "10.2 Warranty is conditional upon professional installation in accordance with the Company’s and manufacturer’s guidelines, correct and intended use of the product, compliance with maintenance and servicing requirements, use by a trained and informed end user, and no misuse, neglect, unauthorised modification, tampering or accidental damage.",
      "10.3 Unless otherwise stated in writing, batteries, consumables, cartridges, cosmetic wear, freight, labour for removal/reinstallation, and third-party costs are excluded from warranty.",
      "10.4 Warranty is void where the serial number, identification label or barcode is removed, damaged or made unreadable; the product has been altered, repaired or serviced by an unauthorised person; non-approved parts, batteries, cartridges or accessories have been used; the product has been installed or used outside the Company’s or manufacturer’s instructions; or the device has not been properly maintained or safely operated.",
      "10.5 The repair, replacement, recharge or servicing of a product does not extend the original warranty period.",
      "10.6 To maintain warranty coverage, all replacement parts, HY3 cartridges, batteries and approved accessories should be sourced through Fog Bandit ANZ or an authorised source approved by the Company.",
    ],
  },
  {
    title: "11. Annual Servicing and Maintenance",
    clauses: [
      "11.1 Security fogging devices should be tested, serviced and maintained at appropriate intervals in accordance with manufacturer recommendations, site requirements and applicable standards.",
      "11.2 Where the Company provides an annual maintenance contract, service agreement or scheduled testing arrangement, the scope of those services will be governed by the relevant quotation, proposal or maintenance agreement.",
      "11.3 Failure to service and maintain the system in accordance with the Company’s recommendations may affect performance and may void warranty coverage.",
    ],
  },
  {
    title: "12. Returns, Repairs and Recharges",
    clauses: [
      "12.1 Any product returned to the Company for inspection, repair, recharge, service or warranty assessment must be accompanied by customer details, site or end-user details if relevant, model number and serial number, description of the issue, return address, and any other information reasonably requested by the Company.",
      "12.2 Unless otherwise agreed in writing, all goods returned to the Company must be sent at the customer’s cost and risk.",
      "12.3 Returned products must be packaged appropriately and safely for transport. The Company is not responsible for damage caused by inadequate packaging by the customer or freight provider.",
      "12.4 The Company may inspect returned products and provide a warranty determination, a repair or recharge quotation, or a recommendation for replacement if the item is beyond economical repair or unsafe.",
      "12.5 The Company is not obliged to provide a loan unit, temporary replacement or compensation during the repair, recharge or assessment period unless agreed in writing.",
      "12.6 Repaired or recharged products will be returned to the customer at the customer’s cost unless otherwise agreed.",
      "12.7 Additional charges may apply where returned cartridges, devices or parts are damaged, unsafe, modified, dented, scratched, or otherwise require rectification beyond standard servicing or recharging.",
    ],
  },
  {
    title: "13. Product Use and Limitation of Performance",
    clauses: [
      "13.1 Fog Bandit systems are security deterrent devices intended to reduce visibility and assist in asset protection when correctly designed, installed and operated.",
      "13.2 The Company does not warrant or guarantee that the use of a Fog Bandit device will prevent theft, intrusion, loss, damage, injury or criminal activity in every circumstance.",
      "13.3 Security outcomes depend on a range of factors including system design, response procedures, site layout, intruder behaviour, third-party integration, maintenance, user operation and environmental conditions.",
    ],
  },
  {
    title: "14. Liability",
    clauses: [
      "14.1 To the maximum extent permitted by law, the Company’s liability in relation to goods and services supplied is limited to one or more of the following, at the Company’s option: repair of the goods; replacement of the goods; re-supply of the services; or payment of the cost of repair, replacement or re-supply.",
      "14.2 The Company is not liable for any indirect, consequential, special or economic loss, including loss of profit, loss of revenue, business interruption, loss of opportunity, loss of use, loss of contracts or loss of goodwill.",
      "14.3 The Company is not liable for theft, attempted theft, property loss, site losses, or failure of any goods to prevent or minimise a criminal event, except to the extent liability cannot lawfully be excluded.",
      "14.4 The Company is not liable for any damage, malfunction or loss arising from incorrect installation by third parties, improper integration by third-party alarm or security providers, misuse, neglect or failure to maintain the product, use of non-approved parts, batteries or cartridges, operation contrary to manuals or instructions, or delays in emergency response or third-party monitoring response.",
      "14.5 Nothing in these conditions excludes, restricts or modifies any rights or remedies that cannot lawfully be excluded under the Australian Consumer Law or other applicable legislation.",
    ],
  },
  {
    title: "15. Australian Consumer Law",
    clauses: [
      "15.1 Where the customer is entitled to rights under the Competition and Consumer Act 2010 (Cth) or other non-excludable laws, those rights continue to apply.",
      "15.2 Where goods or services are not of a kind ordinarily acquired for personal, domestic or household use, the Company’s liability for any breach of a non-excludable guarantee is limited, to the extent permitted by law, to repair, replacement, re-supply or payment of the cost of doing so.",
    ],
  },
  {
    title: "16. Force Majeure",
    clauses: [
      "16.1 The Company is not liable for any failure or delay in performing its obligations where such failure or delay arises from causes beyond its reasonable control, including but not limited to acts of God, flood, fire, war, civil disturbance, labour disputes, shipping delays, import/export restrictions, pandemics, government action, supplier delays or transport disruptions.",
    ],
  },
  {
    title: "17. Cancellations",
    clauses: [
      "17.1 Once an order has been accepted by the Company, it may not be cancelled without the Company’s written consent.",
      "17.2 If an order is cancelled after acceptance, the customer may be liable for all costs incurred by the Company up to the date of cancellation, including administration, procurement, freight, labour, design, restocking and any non-cancellable supplier charges.",
    ],
  },
  {
    title: "18. Intellectual Property and Documentation",
    clauses: [
      "18.1 All brochures, manuals, quotations, technical drawings, installation concepts, proposals, documents and related materials supplied by the Company remain the intellectual property of the Company or its licensors unless otherwise agreed in writing.",
      "18.2 Such documents must not be copied, distributed, reproduced or used for another project, supplier or purpose without prior written consent.",
    ],
  },
  {
    title: "19. Governing Law and Disputes",
    clauses: [
      "19.1 These Sales & Service Conditions are governed by the laws of Western Australia and the laws of Australia, unless another jurisdiction is required by law or specifically agreed in writing.",
      "19.2 The parties submit to the non-exclusive jurisdiction of the courts of Western Australia in relation to any dispute arising out of or in connection with these conditions, the supply of goods, or the provision of services.",
    ],
  },
  {
    title: "20. Contact Details",
    clauses: [
      "Fog Bandit ANZ",
      "Penta Services Australia Pty Ltd",
      "Website: banditanz.com.au",
      "For all sales, service, warranty, recharge and repair enquiries, please contact Fog Bandit ANZ directly using the details shown on your quotation, invoice or our website.",
    ],
  },
  {
    title: "21. Acceptance",
    clauses: [
      "By accepting a quotation, issuing a purchase order, making payment, requesting dispatch, requesting installation, or otherwise proceeding with the supply of goods or services, the customer acknowledges that they have read and accepted these Sales & Service Conditions.",
    ],
  },
];

const SalesServiceConditions = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] relative">
      <Navbar mobileMode="cta" />

      <main>
        <section className="page-hero pt-28 pb-10 md:pt-[140px] lg:pt-[190px] md:pb-14">
          <div className="container mx-auto px-4">
            <header className="max-w-4xl mx-auto text-center">
              <p className="font-dm-sans text-[11px] md:text-[12px] font-semibold text-primary/70 tracking-[0.15em] uppercase mb-3 md:mb-4">
                Sales, Service &amp; Warranty
              </p>
              <h1 className="font-inter text-[28px] md:text-[40px] lg:text-[44px] font-semibold tracking-[-0.035em] text-foreground leading-[1.12] mb-4 md:mb-5">
                Sales &amp; Service Conditions
              </h1>
              <div className="font-dm-sans text-[14px] md:text-[16px] text-muted-foreground leading-relaxed">
                <p className="font-semibold text-foreground">Fog Bandit ANZ</p>
                <p>Penta Services Australia Pty Ltd</p>
              </div>
            </header>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-4">
            <article className="premium-card max-w-4xl mx-auto rounded-2xl px-5 py-7 sm:px-8 md:px-12 md:py-12">
              <div className="space-y-9 md:space-y-11">
                {salesSections.map((section) => (
                  <section key={section.title}>
                    <h2 className="font-inter text-[19px] md:text-[23px] font-semibold text-foreground mb-4">
                      {section.title}
                    </h2>
                    <div className="space-y-3.5">
                      {section.clauses.map((clause) => {
                        const match = clause.match(/^(\d+\.\d+)\s(.+)$/);

                        return match ? (
                          <p
                            key={clause}
                            className="grid grid-cols-[auto_1fr] gap-3 font-dm-sans text-[14px] md:text-[16px] text-muted-foreground leading-7"
                          >
                            <span className="font-semibold tabular-nums text-foreground">{match[1]}</span>
                            <span>{match[2]}</span>
                          </p>
                        ) : (
                          <p
                            key={clause}
                            className="font-dm-sans text-[14px] md:text-[16px] text-muted-foreground leading-7"
                          >
                            {clause}
                          </p>
                        );
                      })}
                    </div>
                  </section>
                ))}
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SalesServiceConditions;
