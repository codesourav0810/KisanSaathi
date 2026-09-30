import {
  UserCheck,
  CreditCard,
  ShieldCheck,
  FileCheck,
} from "lucide-react";

function TrustSection() {
  const trustItems = [
    {
      title: "Verified Users",
      icon: UserCheck,
    },
    {
      title: "Secure Payments",
      icon: CreditCard,
    },
    {
      title: "Quality Assured",
      icon: ShieldCheck,
    },
    {
      title: "Transparent Process",
      icon: FileCheck,
    },
  ];

  return (
    <section className="border-b border-[#F1F5F9] bg-white px-4 py-10 sm:px-6 lg:px-10 lg:py-12">
      <div className="mx-auto max-w-3xl rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-4 shadow-sm sm:p-5">

        {/* Heading */}
        <div>
          <h2 className="text-sm font-bold text-[#1F2937] sm:text-base">
            Trusted & Verified
          </h2>

          <p className="mt-1 text-xs text-[#6B7280] sm:text-sm">
            All farmers and buyers are verified for safe and reliable
            transactions.
          </p>
        </div>

        {/* Trust Items */}
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex min-h-[54px] items-center justify-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-2 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
              >
                <Icon
                  className="h-4 w-4 shrink-0 text-[#3764ff]"
                  strokeWidth={1.8}
                />

                <span className="text-center text-xs font-medium text-[#374151]">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default TrustSection;