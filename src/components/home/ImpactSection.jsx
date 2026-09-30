import { Leaf, Shield, TrendingUp, Wheat } from "lucide-react";

import homeGraphImg from "../../assets/homeGraphImg.svg";

function ImpactSection() {
  const items = [
    {
      percentage: "68%",
      text: "Market access challenges",
      icon: "leaf",
    },
    {
      percentage: "37%",
      text: "Better prices with direct selling",
      icon: "shield",
    },
    {
      percentage: "23%",
      text: "Increase in farmer income",
      icon: "trendingUp",
    },
    {
      percentage: "6–18%",
      text: "Post-harvest losses",
      icon: "wheat",
    },
  ];

  const icons = {
    leaf: Leaf,
    shield: Shield,
    trendingUp: TrendingUp,
    wheat: Wheat,
  };

  return (
    <section
      className="
        border-2 border-[#E5E7EB]
        bg-[#F9FAFB]
        rounded-2xl

        mx-3 my-8 p-4
        min-[426px]:mx-5 min-[426px]:p-5
        min-[640px]:mx-8 min-[640px]:p-7
        min-[1024px]:mx-10 min-[1024px]:my-15 min-[1024px]:p-10
      "
    >
      {/* Heading */}
      <h1
        className="
          font-[700] text-[#111827]
          text-2xl
          min-[426px]:text-3xl
          min-[640px]:text-4xl
        "
      >
        Real Impact, Real Numbers
      </h1>

      {/* Cards + Graph */}
      <div
        className="
          flex flex-col
          min-[843px]:flex-row
          items-center
          justify-center
          gap-8
          min-[1024px]:gap-12
        "
      >
        {/* Cards */}
        <div
          className="
            grid
            grid-cols-1
            min-[426px]:grid-cols-2
            min-[1280px]:grid-cols-4

            gap-4
            min-[640px]:gap-6
            min-[1024px]:gap-8

            pt-6
            min-[640px]:pt-8
            min-[1024px]:pt-10

            w-full
            min-[843px]:w-auto
          "
        >
          {items.map((item) => {
            const Icon = icons[item.icon];

            return (
              <div
                key={item.percentage}
                className="
                  w-full
                  min-[426px]:w-auto
                  min-[1024px]:w-50

                  min-h-[150px]
                  min-[426px]:min-h-[170px]
                  min-[640px]:min-h-[185px]
                  min-[1024px]:h-50

                  p-4
                  min-[640px]:p-5

                  rounded-2xl
                  shadow-md
                  space-y-3
                  min-[640px]:space-y-4

                  bg-white
                "
              >
                <Icon
                  className="
                    text-[#15803D]
                    border-2 border-[#DCFCE7]
                    bg-[#DCFCE7]
                    w-10 h-10
                    min-[640px]:w-12 min-[640px]:h-12
                    rounded-xl
                    min-[640px]:rounded-2xl
                    p-2
                  "
                />

                <h2
                  className="
                    text-3xl
                    min-[426px]:text-3xl
                    min-[640px]:text-4xl
                    font-[700]
                    text-[#111827]
                  "
                >
                  {item.percentage}
                </h2>

                <h3
                  className="
                    text-sm
                    min-[426px]:text-[15px]
                    min-[640px]:text-base
                    leading-snug
                    text-[#6B7280]
                  "
                >
                  {item.text}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Graph */}
        <div
          className="
            hidden
            min-[843px]:block

            w-full
            min-[843px]:w-[280px]
            min-[1024px]:w-[340px]

            shrink-0
          "
        >
          <img
            src={homeGraphImg}
            alt=""
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default ImpactSection;
