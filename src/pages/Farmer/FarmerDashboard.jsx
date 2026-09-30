import FarmerLayout from "../../components/farmer/FarmerLayout";
import { useNavigate } from "react-router-dom";
import {
  IndianRupee ,
  ClipboardList,
  Package,
  Star,
  CloudSun,
  Sun,
  Cloud,
  CloudRain,
  Wheat,
} from "lucide-react";

function FarmerDashboard() {
  const navigate = useNavigate();
  return (
    <FarmerLayout>
      <div className="min-h-[calc(100vh-5rem)] bg-[#EEF5F0] p-4 sm:p-6 lg:p-8">

        {/* Dashboard Content */}
        <div className="max-w-7xl mx-auto">

          {/* Top Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">

            {/* Total Earnings */}
            <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-[inset_0_3px_10px_rgba(0,0,0,0.18)]">
              <div className="flex items-start justify-between">

                <div>
                  <p className="text-xl sm:text-2xl font-semibold text-gray-900">
                    Total Earnings
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    Earnings (September)
                  </p>

                  <p className="text-2xl font-bold text-gray-800 mt-3">
                    ₹48,200
                  </p>

                  <span className="inline-block mt-3 px-3 py-1 rounded-md bg-[#D8F4EA] text-[#16835B] text-[10px] font-semibold">
                    ▲ 12% more than Aug
                  </span>
                </div>

                <div className="w-11 h-11 rounded-lg bg-[#E5F5EC] flex items-center justify-center">
                  <IndianRupee 
                    size={22}
                    className="text-[#16835B]"
                  />
                </div>

              </div>
            </div>

            {/* Active Listings */}
            <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-[inset_0_3px_10px_rgba(0,0,0,0.18)]">
              <div className="flex items-start justify-between">

                <div>
                  <p className="text-xl sm:text-2xl font-semibold text-gray-900">
                    Active Listings
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    Listing (September)
                  </p>

                  <p className="text-2xl font-bold text-gray-800 mt-3">
                    4
                  </p>

                  <span className="inline-block mt-3 px-3 py-1 rounded-md bg-[#D8F4EA] text-[#16835B] text-[10px] font-semibold">
                    ▲ 10 more than August
                  </span>
                </div>

                <div className="w-11 h-11 rounded-lg bg-[#E6F1FB] flex items-center justify-center">
                  <ClipboardList
                    size={22}
                    className="text-[#4386C5]"
                  />
                </div>

              </div>
            </div>

            {/* Pending Orders */}
            <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-[inset_0_3px_10px_rgba(0,0,0,0.18)]">
              <div className="flex items-start justify-between">

                <div>
                  <p className="text-xl sm:text-2xl font-semibold text-gray-900">
                    Pending Orders
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    Listing (September)
                  </p>

                  <p className="text-2xl font-bold text-gray-800 mt-3">
                    4
                  </p>

                  <span className="inline-block mt-3 px-3 py-1 rounded-md bg-[#FFE5B3] text-[#9A6500] text-[10px] font-semibold">
                    ● 1 awaiting pickup
                  </span>
                </div>

                <div className="w-11 h-11 rounded-lg bg-[#FFF0D8] flex items-center justify-center">
                  <Package
                    size={22}
                    className="text-[#C1842E]"
                  />
                </div>

              </div>
            </div>

          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-8">

            {/* Buyers Ratings */}
            <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-[inset_0_3px_10px_rgba(0,0,0,0.18)]">
              <div className="flex items-start justify-between">

                <div>
                  <p className="text-xl sm:text-2xl font-semibold text-gray-900">
                    Buyers Ratings
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    Listing (September)
                  </p>

                  <p className="text-2xl font-bold text-gray-800 mt-3">
                    4.8 / 5
                  </p>

                  <span className="inline-block mt-3 px-5 py-1 rounded-md bg-[#D8F4EA] text-[#16835B] text-[10px] font-semibold">
                    ★ 36 reviews
                  </span>
                </div>

                <div className="w-11 h-11 rounded-lg bg-[#FFF0D8] flex items-center justify-center">
                  <Star
                    size={22}
                    className="text-[#E0A52C]"
                    fill="currentColor"
                  />
                </div>

              </div>
            </div>

            {/* Weather */}
            <div className="xl:col-span-2 bg-[#146B38] rounded-xl p-5 text-white shadow-[inset_0_3px_10px_rgba(0,0,0,0.18)]">

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

                {/* Current Weather */}
                <div className="flex items-center gap-3">

                  <CloudSun
                    size={38}
                    className="text-white shrink-0"
                  />

                  <div>
                    <p className="text-2xl sm:text-3xl font-bold">
                      29°C
                    </p>

                    <p className="text-xs text-green-100">
                      Partly cloudy · Nashik
                    </p>
                  </div>

                </div>

                {/* Forecast */}
                <div className="flex items-center justify-between sm:justify-end gap-5 sm:gap-7">

                  <div className="text-center">
                    <Sun
                      size={24}
                      className="mx-auto mb-1"
                    />
                    <p className="text-xs">
                      Thu
                    </p>
                    <p className="text-xs">
                      31°
                    </p>
                  </div>

                  <div className="text-center">
                    <Cloud
                      size={24}
                      className="mx-auto mb-1"
                    />
                    <p className="text-xs">
                      Fri
                    </p>
                    <p className="text-xs">
                      27°
                    </p>
                  </div>

                  <div className="text-center">
                    <CloudRain
                      size={24}
                      className="mx-auto mb-1"
                    />
                    <p className="text-xs">
                      Sat
                    </p>
                    <p className="text-xs">
                      24°
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* My Crops */}
<div className="bg-white rounded-xl border border-gray-100 p-5 sm:p-6">

  {/* Section Header */}
  <div className="flex items-center justify-between mb-5">

    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 flex items-center gap-2">
      <Wheat
        size={24}
        className="text-[#16835B]"
      />
      My Crops
    </h2>

    <button 
    onClick={() => navigate("/farmer/my-crops")}
    className="text-xs sm:text-sm text-gray-600 hover:text-[#16835B] pointer-cursor">
      View all →
    </button>

  </div>

  {/* Crops */}
  <div className="space-y-3">

    {/* Tomato */}
    <div className="p-3 sm:p-4">

      <div className="flex items-center gap-3">

        {/* Crop Icon */}
        <div className="text-3xl sm:text-4xl shrink-0">
          🍅
        </div>

        {/* Crop Information */}
        <div className="flex-1 min-w-0">

          <h3 className="text-base sm:text-lg font-semibold text-gray-800">
            Tomato
          </h3>

          <p className="text-[9px] sm:text-[10px] text-gray-400 truncate">
            500 kg ready · Hybrid · Grade-A · Sown Jun 2026
          </p>

          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Market{" "}
            <span className="font-semibold text-gray-800">
              ₹31–34/kg
            </span>
          </p>

        </div>

        {/* Sell Button */}
        <button className="shrink-0 bg-[#146B38] hover:bg-[#0F592E] text-white text-xs sm:text-sm font-medium px-3 sm:px-5 py-1.5 rounded-lg">
          Sell now
        </button>

      </div>

    </div>


    {/* Onion */}
    <div className="p-3 sm:p-4">

      <div className="flex items-center gap-3">

        {/* Crop Icon */}
        <div className="text-3xl sm:text-4xl shrink-0">
          🧅
        </div>

        {/* Crop Information */}
        <div className="flex-1 min-w-0">

          <h3 className="text-base sm:text-lg font-semibold text-gray-800">
            Onion
          </h3>

          <p className="text-[9px] sm:text-[10px] text-gray-400 truncate">
            500 kg ready · Hybrid · Grade-A · Sown Jun 2026
          </p>

          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Market{" "}
            <span className="font-semibold text-gray-800">
              ₹31–34/kg
            </span>
          </p>

        </div>

        {/* Sell Button */}
        <button className="shrink-0 bg-[#146B38] hover:bg-[#0F592E] text-white text-xs sm:text-sm font-medium px-3 sm:px-5 py-1.5 rounded-lg">
          Sell now
        </button>

      </div>

    </div>


    {/* Wheat */}
    <div className="p-3 sm:p-4">

      <div className="flex items-center gap-3">

        {/* Crop Icon */}
        <div className="text-3xl sm:text-4xl shrink-0">
          🌾
        </div>

        {/* Crop Information */}
        <div className="flex-1 min-w-0">

          <h3 className="text-base sm:text-lg font-semibold text-gray-800">
            Wheat
          </h3>

          <p className="text-[9px] sm:text-[10px] text-gray-400 truncate">
            500 kg ready · Hybrid · Grade-A · Sown Jun 2026
          </p>

          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Market{" "}
            <span className="font-semibold text-gray-800">
              ₹31–34/kg
            </span>
          </p>

        </div>

        {/* Sell Button */}
        <button className="shrink-0 bg-[#146B38] hover:bg-[#0F592E] text-white text-xs sm:text-sm font-medium px-3 sm:px-5 py-1.5 rounded-lg">
          Sell now
        </button>

      </div>

    </div>

  </div>

</div>


        </div>
      </div>
    </FarmerLayout>
  );
}

export default FarmerDashboard;