import {
  MapPin,
  Leaf,
  UserRound,
  CheckCircle2,
  Store,
  Navigation,
  Search,
  ChevronRight,
} from "lucide-react";

function LiveMarketMapSection() {
  const nearbyMandis = [
    {
      name: "Nashik APMC Mandi",
      distance: "2.4 km",
      category: "Vegetables, Fruits",
    },
    {
      name: "Sinnar Mandi",
      distance: "6.8 km",
      category: "Grains, Pulses",
    },
    {
      name: "Igatpuri Mandi",
      distance: "12.5 km",
      category: "Onion, Potato",
    },
    {
      name: "Trimbak Mandi",
      distance: "15.2 km",
      category: "All Crops",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FCF9] to-[#F0FDF4] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">

      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#DCFCE7]/60 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#DBEAFE]/40 blur-3xl" />

      {/* --------------------------------------------- */}
      {/* Heading */}
      {/* --------------------------------------------- */}

      <div className="relative z-10 mx-auto max-w-4xl text-center">

        <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-[#E8F7ED] px-4 py-2 text-sm font-semibold text-[#087443]">
          <MapPin className="h-4 w-4" />
          Live Market Map
        </div>

        <h2 className="text-3xl font-bold leading-tight text-[#102F29] sm:text-4xl lg:text-5xl">
          Real Connections
          <br />
          Near You —
          <span className="text-[#087443]"> Live!</span>
          <span className="ml-2">🌱</span>
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-[#64748B] sm:text-base lg:text-lg">
          Explore nearby mandis if you're a farmer, or find verified farmers
          if you're a buyer. Our live map helps you discover, connect, and
          trade — closer, faster, and smarter.
        </p>
      </div>

      {/* --------------------------------------------- */}
      {/* Main Content */}
      {/* --------------------------------------------- */}

      <div className="relative z-10 mx-auto mt-12 grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[260px_minmax(0,1fr)_260px] lg:gap-8">

        {/* ------------------------------------------- */}
        {/* FARMER SIDE */}
        {/* ------------------------------------------- */}

        <div className="order-2 lg:order-1">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#E7F7EC] px-4 py-2 text-sm font-semibold text-[#087443]">
            <Leaf className="h-4 w-4" />
            For Farmers
          </div>

          <h3 className="text-2xl font-bold leading-tight text-[#102F29] sm:text-3xl">
            Find Nearby
            <br />
            Mandis
          </h3>

          <p className="mt-4 text-sm leading-relaxed text-[#64748B] sm:text-base">
            See live locations of nearby mandis, compare prices, and get
            better market access for your produce.
          </p>

          <div className="mt-6 space-y-3">

            <FeatureItem>
              Live mandi locations
            </FeatureItem>

            <FeatureItem>
              Price comparison
            </FeatureItem>

            <FeatureItem>
              Better market access
            </FeatureItem>

          </div>

          {/* Farmer mini card */}

          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-[#D9F1E1] bg-white p-3 shadow-sm">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E8F7ED]">
              <Store className="h-5 w-5 text-[#087443]" />
            </div>

            <div className="min-w-0">
              <p className="text-sm font-semibold text-[#102F29]">
                Nearby Mandis
              </p>

              <p className="text-xs text-[#64748B]">
                2.4 km away
              </p>
            </div>

            <ChevronRight className="ml-auto h-4 w-4 text-[#087443]" />

          </div>
        </div>

        {/* ------------------------------------------- */}
        {/* CENTRAL MAP UI */}
        {/* ------------------------------------------- */}

        <div className="order-1 min-w-0 lg:order-2">

          <div className="overflow-hidden rounded-[28px] border border-[#E2EEE6] bg-white p-3 shadow-[0_20px_60px_rgba(6,95,70,0.10)] sm:p-4">

            {/* Map Header */}

            <div className="flex flex-wrap items-center justify-between gap-3 px-1 pb-4">

              <div className="flex items-center gap-2">

                <button className="flex items-center gap-2 rounded-xl bg-[#087443] px-4 py-2 text-sm font-semibold text-white">
                  <Store className="h-4 w-4" />
                  Mandis
                </button>

                <button className="flex items-center gap-2 rounded-xl bg-[#F1F5F9] px-4 py-2 text-sm font-medium text-[#64748B]">
                  <UserRound className="h-4 w-4" />
                  Farmers
                </button>

              </div>

              <div className="flex items-center gap-2 rounded-xl bg-[#F1F8F3] px-3 py-2 text-xs font-medium text-[#315B4A]">
                <MapPin className="h-4 w-4 text-[#087443]" />
                Nashik, Maharashtra
              </div>

            </div>

            {/* Fake Map */}

            <div className="relative min-h-[360px] overflow-hidden rounded-2xl bg-[#DDEFE8] sm:min-h-[420px]">

              {/* Fake roads */}

              <div className="absolute left-[10%] top-[25%] h-[2px] w-[80%] rotate-[15deg] bg-white/80" />

              <div className="absolute left-[15%] top-[55%] h-[2px] w-[75%] rotate-[-12deg] bg-white/80" />

              <div className="absolute left-[45%] top-[-10%] h-[120%] w-[2px] rotate-[18deg] bg-white/80" />

              <div className="absolute left-[65%] top-[-10%] h-[120%] w-[2px] rotate-[-20deg] bg-white/80" />

              {/* Green land areas */}

              <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#C8E5C9]/70" />

              <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#B9DEBD]/70" />

              <div className="absolute left-[35%] top-[30%] h-48 w-64 rounded-full bg-[#CFE8C8]/70" />

              {/* Map label */}

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-[#3C6253]/50 sm:text-4xl">
                Nashik
              </div>

              {/* Location pins */}

              <MapMarker className="left-[18%] top-[25%]" color="green" />
              <MapMarker className="left-[38%] top-[18%]" color="orange" />
              <MapMarker className="left-[70%] top-[28%]" color="green" />
              <MapMarker className="left-[82%] top-[48%]" color="orange" />
              <MapMarker className="left-[25%] top-[62%]" color="orange" />
              <MapMarker className="left-[58%] top-[70%]" color="green" />
              <MapMarker className="left-[78%] top-[75%]" color="green" />
              <MapMarker className="left-[43%] top-[45%]" color="orange" />

              {/* Current location */}

              <div className="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2">

                <div className="absolute inset-[-10px] animate-ping rounded-full bg-blue-300/30" />

                <div className="relative flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-blue-500 shadow-lg">
                  <Navigation className="h-4 w-4 fill-white text-white" />
                </div>

              </div>

              {/* Zoom controls */}

              <div className="absolute left-4 top-4 overflow-hidden rounded-xl bg-white shadow-md">

                <button className="block h-10 w-10 border-b border-gray-200 text-lg font-semibold text-gray-700">
                  +
                </button>

                <button className="block h-10 w-10 text-lg font-semibold text-gray-700">
                  −
                </button>

              </div>

              {/* Nearby list */}

              <div className="absolute bottom-3 right-3 hidden w-[220px] overflow-hidden rounded-2xl border border-white/80 bg-white/95 shadow-xl backdrop-blur-sm sm:block">

                <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">

                  <p className="text-sm font-bold text-[#102F29]">
                    Nearby Mandis
                  </p>

                  <span className="text-xs font-medium text-[#087443]">
                    View All →
                  </span>

                </div>

                <div>
                  {nearbyMandis.map((mandi) => (
                    <div
                      key={mandi.name}
                      className="flex items-center gap-3 border-b border-gray-100 px-4 py-3 last:border-0"
                    >

                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E8F7ED]">
                        <Store className="h-4 w-4 text-[#087443]" />
                      </div>

                      <div className="min-w-0 flex-1">

                        <p className="truncate text-xs font-semibold text-[#102F29]">
                          {mandi.name}
                        </p>

                        <p className="mt-0.5 text-[10px] text-[#94A3B8]">
                          {mandi.distance} · {mandi.category}
                        </p>

                      </div>

                      <ChevronRight className="h-4 w-4 shrink-0 text-[#087443]" />

                    </div>
                  ))}
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* ------------------------------------------- */}
        {/* BUYER SIDE */}
        {/* ------------------------------------------- */}

        <div className="order-3">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#EAF2FF] px-4 py-2 text-sm font-semibold text-[#1769D2]">
            <UserRound className="h-4 w-4" />
            For Buyers
          </div>

          <h3 className="text-2xl font-bold leading-tight text-[#102F29] sm:text-3xl">
            Connect with
            <br />
            Nearby Farmers
          </h3>

          <p className="mt-4 text-sm leading-relaxed text-[#64748B] sm:text-base">
            Find farmers near you and source fresh, quality produce directly
            through the platform.
          </p>

          <div className="mt-6 space-y-3">

            <FeatureItem blue>
              Verified farmer profiles
            </FeatureItem>

            <FeatureItem blue>
              Real-time availability
            </FeatureItem>

            <FeatureItem blue>
              Direct communication
            </FeatureItem>

          </div>

          {/* Buyer mini card */}

          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-[#DBEAFE] bg-white p-3 shadow-sm">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EAF2FF]">
              <UserRound className="h-5 w-5 text-[#1769D2]" />
            </div>

            <div className="min-w-0">

              <p className="text-sm font-semibold text-[#102F29]">
                Nearby Farmers
              </p>

              <p className="text-xs text-[#64748B]">
                3.1 km away
              </p>

            </div>

            <ChevronRight className="ml-auto h-4 w-4 text-[#1769D2]" />

          </div>
        </div>

      </div>
    </section>
  );
}


/* ================================================= */
/* Reusable Feature Item */
/* ================================================= */

function FeatureItem({ children, blue = false }) {
  return (
    <div className="flex items-center gap-3">

      <CheckCircle2
        className={`h-5 w-5 shrink-0 ${
          blue ? "text-[#1769D2]" : "text-[#087443]"
        }`}
      />

      <span className="text-sm text-[#526B61] sm:text-base">
        {children}
      </span>

    </div>
  );
}


/* ================================================= */
/* Reusable Map Marker */
/* ================================================= */

function MapMarker({ className, color = "green" }) {
  const isGreen = color === "green";

  return (
    <div
      className={`absolute ${className} flex h-9 w-9 items-center justify-center rounded-full border-2 border-white shadow-lg ${
        isGreen ? "bg-[#087443]" : "bg-[#F59E0B]"
      }`}
    >
      <MapPin className="h-5 w-5 fill-white text-white" />
    </div>
  );
}

export default LiveMarketMapSection;