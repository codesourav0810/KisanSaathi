import {
  User,
  Package,
  Sparkles,
  Handshake,
  ArrowRight,
  ArrowDown,
} from "lucide-react";
function HowItWorksSection() {
  const steps = [
    {
      title: "1. Register",
      text: "Create your account as a farmer or buyer.",
      icon: "user",
    },
    {
      title: "2. Add Details",
      text: "List your produce or requirements.",
      icon: "package",
    },
    {
      title: "3. Get Recommendations",
      text: "Our smart system matches you with the best options.",
      icon: "sparkle",
    },
    {
      title: "4. Connect & Trade",
      text: "Contact directly and seal the deal.",
      icon: "handshake",
    },
  ];
  const icons = {
    user: User,
    package: Package,
    sparkle: Sparkles,
    handshake: Handshake,
  };
  return (
    <section id="how-it-works" className="text-center mt-25 mb-5 scroll-mt-54">
      <h1 className="text-3xl min-[640px]:text-4xl font-[700] max-[321px]:text-2xl ">How KisanSaathi Works</h1>
      <p className="text-lg text-[#6B7280] min-[640px]:text-xl max-[321px]:text-sm py-3">
        Simple steps. Stronger market linkages.
      </p>
      <div className="grid grid-cols-1 min-[640px]:grid-cols-2 min-[1280px]:grid-cols-4 gap-6 min-[1024px]:gap-8">
        {steps.map((step, index) => {
          const Icon = icons[step.icon];
          return (
            <div className="flex flex-col items-center min-[640px]:flex-row min-[640px]:items-center" key={step.title}>
              <div className="flex flex-col justify-center items-center my-5 mx-10">
                <Icon className="w-12 h-12 p-3 rounded-full bg-[#EDECFD] text-[#053F96] border-1 border-[#A7CCF3]/50 mb-5 max-[426px]:mb-2" />
                <h2 className="text-lg min-[640px]:text-xl font-[600] ">{step.title}</h2>
                <p className="text-sm min-[640px]:text-md text-[grey] pt-1">{step.text}</p>
              </div>
              {index < steps.length - 1 && (
                <>
                  <ArrowDown className="min-[640px]:hidden w-6 h-6 text-[#053F96]" />

                  <ArrowRight className="hidden min-[640px]:block w-10 h-10 text-[#053F96]" />
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default HowItWorksSection;
