import { useState } from "react";
function SmartLinkageSection() {
  const [showLearnMore, setShowLearnMore] = useState(false);
  return (
    <section id="Smart-linkage" className="mx-3 my-8 bg-[#F9FAFB] p-4 min-[640px]:mx-6 min-[640px]:p-6 min-[1025px]:mx-10 min-[1025px]:my-20 min-[1025px]:p-10 scroll-mt-54">
      <div className="flex flex-col rounded-3xl bg-[#063F32] p-3 min-[640px]:p-6 min-[1025px]:flex-row min-[1025px]:p-10">
        <div className="w-full min-[1025px]:w-1/2">
          <div className="mb-2 min-[1025px]:mb-4 inline-flex rounded-xl border border-[#19B98A]/40 bg-[#0A6650] px-3 py-2 text-[#42D6A5]">
            AI
          </div>
          <h2 className="text-2xl min-[640px]:text-3xl min-[1025px]:text-4xl font-[700] text-white">
            Smart Market Linkage
          </h2>
          <p className="mt-3 text-md font-medium text-[#42D6A5]">
            Smart recommendations for better decisions.
          </p>
          <p className="mt-4 w-full min-[640px]:max-w-md text-[12px] min-[640px]:text-base leading-relaxed text-gray-300">
            Our system analyzes price, quantity, quality, distance, and buyer
            reliability to suggest the best matches for you — whether you're
            selling or buying.
          </p>
          <button
          onClick={() => setShowLearnMore(true)}
           className="mt-5 min-[1025px]:mt-6 rounded-full border border-[#42D6A5] px-3 py-1 min-[640px]:px-5 min-[640px]:py-2 text-[10px] min-[640px]:text-sm font-medium text-[#42D6A5] transition-all duration-200 transition hover:bg-[#42D6A5] hover:text-[#063F32] cursor-pointer hover:-translate-y-0.5 hover:shadow-sm ">
            Learn More →
          </button>
        </div>
        <div className="w-full mt-8 min-[1025px]:mt-0 min-[1025px]:w-1/2 max-[321px]:hidden">
          <div className="rounded-2xl bg-white p-3 min-[640px]:p-5 min-[1025px]:p-6">
            <div className="flex flex-col gap-1 min-[640px]:gap-2 min-[640px]:flex-row min-[640px]:items-center min-[640px]:justify-between">
              <h3 className="text-base min-[640px]:text-lg font-[700] text-[#111827]">
                Top Buyer Matches
                <span className="ml-2 text-sm font-normal text-[#6B7280]">
                  (For Farmer)
                </span>
              </h3>
              <span className="rounded-md bg-[#ECFDF5] px-3 py-1 text-xs font-[600] text-[#0A6650] font-fit-content w-fit">
                Live AI Results
              </span>
            </div>
            <div className="mt-4 border-t border-[#E5E7EB]">
              <div className="grid grid-cols-[2fr_1fr_1fr_1fr] px-4 py-2 min-[640px]:py-3 text-sm text-[#9CA3AF]">
                <span>Buyer</span>
                <span>Price</span>
                <span>Distance</span>
                <span className="max-[446px]:ml-2">Match</span>
              </div>
              <div className="grid grid-cols-[2fr_1fr_1fr_1fr] items-center border-t border-[#E5E7EB] px-3 py-2 min-[640px]:px-4 min-[640px]:py-3">
                <div className="min-w-0 flex items-center gap-1 min-[640px]:gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FCFFAC] text-sm font-semibold text-[#744200] max-[446px]:mr-2">
                    AF
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#111827]">
                      ABC Foods
                    </p>
                    <p className="text-xs text-[#059669]">✓ Verified</p>
                  </div>
                </div>
                <p className="whitespace-nowrap font-semibold text-[#111827] max-[446px]:text-sm max-[446px]:p-3">₹32/kg</p>
                <p className="whitespace-nowrap text-[#6B7280]">12 km</p>
                <span className="whitespace-nowrap w-fit rounded-full bg-[#D1FAE5] px-3 py-1 text-xs font-semibold text-[#059669]">
                  96%
                </span>
              </div>
              <div className="grid grid-cols-[2fr_1fr_1fr_1fr] items-center border-t border-[#E5E7EB] px-3 py-2 min-[640px]:px-4 min-[640px]:py-3">
                 <div className="min-w-0 flex items-center gap-1 min-[640px]:gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#CCFBF1] text-sm font-semibold text-[#115E59] max-[446px]:mr-2">
                    FM
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#111827]">
                      Fresh Mart
                    </p>
                    <p className="text-xs text-[#059669]">✓ Verified</p>
                  </div>
                </div>
                <p className="whitespace-nowrap font-semibold text-[#111827] max-[446px]:text-sm max-[446px]:p-3 ">₹29/kg</p>
                <p className="whitespace-nowrap text-[#6B7280]">18 km</p>
                <span className="whitespace-nowrap w-fit rounded-full bg-[#D1FAE5] px-3 py-1 text-xs font-semibold text-[#059669]">
                  87%
                </span>
              </div>
              <div className="grid grid-cols-[2fr_1fr_1fr_1fr] items-center border-t border-[#E5E7EB] px-3 py-2 min-[640px]:px-4 min-[640px]:py-3">
                 <div className="min-w-0 flex items-center gap-1 min-[640px]:gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F3DCFC] text-sm font-semibold text-[#551665] max-[446px]:mr-2">
                    GF
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#111827]">
                      Green Foods
                    </p>
                    <p className="text-xs text-[#059669]">✓ Verified</p>
                  </div>
                </div>
                <p className="whitespace-nowrap font-semibold text-[#111827] max-[446px]:text-sm max-[446px]:p-3">₹31/kg</p>
                <p className="whitespace-nowrap text-[#6B7280]">25 km</p>
                <span className="whitespace-nowrap w-fit rounded-full bg-[#D1FAE5] px-3 py-1 text-xs font-semibold text-[#059669]">
                  82%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showLearnMore && (
  <div
  className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
  onClick={() => setShowLearnMore(false)}
>
    <div className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-4 min-[640px]:p-6 " onClick={(e) => e.stopPropagation()}>
      
      <div className="flex items-start justify-between gap-4">
  <div>
    <p className="text-sm font-semibold text-[#059669]">
      Smart Market Linkage
    </p>

    <h2 className="mt-1 text-2xl font-bold text-[#063F32]">
      How It Works
    </h2>
  </div>

  <button
    onClick={() => setShowLearnMore(false)}
    className="shrink-0 text-2xl leading-none text-[#6B7280] transition hover:text-[#111827]"
    aria-label="Close"
  >
    ×
  </button>
</div>

<p className="mt-4 text-sm leading-relaxed text-[#4B5563] min-[640px]:text-base">
  KisanSaathi uses smart recommendations to help farmers and buyers find
  relevant market connections based on important factors such as price,
  quantity, quality, distance, and buyer reliability.
</p>

<div className="mt-6 space-y-3">
  <div className="flex gap-3 rounded-xl bg-[#F0FDF4] p-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm">
    <div className="mt-0.5 shrink-0 text-[#059669]">✓</div>

    <div>
      <h3 className="font-semibold text-[#111827]">
        Find Relevant Buyers
      </h3>
      <p className="mt-1 text-sm leading-relaxed text-[#6B7280]">
        Discover buyers whose requirements match your produce and available
        quantity.
      </p>
    </div>
  </div>

  <div className="flex gap-3 rounded-xl bg-[#F0FDF4] p-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm">
    <div className="mt-0.5 shrink-0 text-[#059669]">✓</div>

    <div >
      <h3 className="font-semibold text-[#111827]">
        Compare Offers
      </h3>
      <p className="mt-1 text-sm leading-relaxed text-[#6B7280] ">
        Compare relevant factors such as offered price, distance, and other
        available information.
      </p>
    </div>
  </div>

  <div className="flex gap-3 rounded-xl bg-[#F0FDF4] p-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm">
    <div className="mt-0.5 shrink-0 text-[#059669]">✓</div>

    <div>
      <h3 className="font-semibold text-[#111827]">
        Make Better Decisions
      </h3>
      <p className="mt-1 text-sm leading-relaxed text-[#6B7280]">
        Get recommendations that help you evaluate your available market
        options more easily.
      </p>
    </div>
  </div>

  <div className="flex gap-3 rounded-xl bg-[#F0FDF4] p-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm">
    <div className="mt-0.5 shrink-0 text-[#059669]">✓</div>

    <div>
      <h3 className="font-semibold text-[#111827]">
        Connect Directly
      </h3>
      <p className="mt-1 text-sm leading-relaxed text-[#6B7280]">
        Connect with relevant market participants and continue the
        conversation directly.
      </p>
    </div>
  </div>
</div>

<div className="mt-6 rounded-xl border border-[#D1FAE5] bg-[#ECFDF5] p-4 ">
  <p className="text-sm leading-relaxed text-[#065F46] ">
    <span className="font-semibold">Note:</span> Recommendations are based
    on the information available to the system and are intended to support
    your decision-making.
  </p>
</div>

    </div>
  </div>
)}
    </section>
  );
}
export default SmartLinkageSection;
