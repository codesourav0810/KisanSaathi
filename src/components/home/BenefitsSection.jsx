import { Check, Sprout, Tractor } from "lucide-react";

function BenefitsSection() {
  const farmerBenefits = [
    "Get fair prices for your produce",
    "Direct connection with verified buyers",
    "Reduce middlemen and extra costs",
    "Real-time market price updates",
    "Easy to use, even without tech knowledge",
  ];

  const buyerBenefits = [
    "Access to fresh, quality produce",
    "Directly from verified farmers",
    "Better prices and bulk options",
    "Transparent and reliable transactions",
    "Support local farmers and rural economy",
  ];

  return (
    <section className="bg-[#F8FAFC] px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">

        {/* Farmers Card */}
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-6 shadow-sm sm:p-7 lg:p-8">

          {/* Heading */}
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#D1FAE5]">
              <Check className="h-4 w-4 text-[#047857]" strokeWidth={3} />
            </div>

            <h2 className="text-lg font-bold text-[#1F2937] sm:text-xl">
              Why It's Good for Farmers
            </h2>
          </div>

          {/* Benefits */}
          <div className="mt-5 space-y-3">
            {farmerBenefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-2"
              >
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#059669]"
                  strokeWidth={2.5}
                />

                <p className="text-sm leading-relaxed text-[#4B5563]">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="mt-6 flex items-center justify-between rounded-xl border border-[#BBF7D0] bg-gradient-to-r from-[#ECFDF5] to-[#F0FDFA] px-4 py-3">

            <div>
              <p className="text-sm font-bold text-[#065F46]">
                Empowering Farmers
              </p>

              <p className="text-xs text-[#059669]">
                Building a Better Future
              </p>
            </div>

            <Sprout
              className="h-8 w-8 text-[#65A30D]"
              strokeWidth={1.8}
            />
          </div>
        </div>


        {/* Buyers Card */}
        <div className="rounded-2xl border border-[#BFDBFE] bg-white p-6 shadow-sm sm:p-7 lg:p-8">

          {/* Heading */}
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#DBEAFE]">
              <Check className="h-4 w-4 text-[#2563EB]" strokeWidth={3} />
            </div>

            <h2 className="text-lg font-bold text-[#1F2937] sm:text-xl">
              Why It's Good for Buyers
            </h2>
          </div>

          {/* Benefits */}
          <div className="mt-5 space-y-3">
            {buyerBenefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-2"
              >
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]"
                  strokeWidth={2.5}
                />

                <p className="text-sm leading-relaxed text-[#4B5563]">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="mt-6 flex items-center justify-between rounded-xl border border-[#FDE68A] bg-gradient-to-r from-[#FFFBEB] to-[#FEF3C7] px-4 py-3">

            <div>
              <p className="text-sm font-bold text-[#92400E]">
                Trusted Supply Chain
              </p>

              <p className="text-xs text-[#B45309]">
                Consistent bulk sourcing
              </p>
            </div>

            <Tractor
              className="h-8 w-8 text-[#F59E0B]"
              strokeWidth={1.8}
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default BenefitsSection;