import { Bell, MapPin, Menu } from "lucide-react";

function FarmerHeader({ setSidebarOpen }) {
  return (
    <header className="h-20 border-b border-gray-200 bg-white px-3 sm:px-6 lg:px-8 mt-3 flex items-center justify-between gap-2">

      {/* Left side */}
      <div className="min-w-0 flex-1 flex items-center gap-2">

        {/* Mobile Hamburger */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="sm:hidden shrink-0 p-1.5 rounded-lg bg-[#133D2F] text-white hover:bg-[#1F4D3D]"
          aria-label="Open navigation menu"
        >
          <Menu size={20} />
        </button>

        {/* Greeting */}
        <div className="min-w-0">
          <h1 className="text-lg sm:text-2xl font-bold text-gray-800 truncate">
            Hello, Ramesh 👋
          </h1>

          <p className="text-[10px] sm:text-sm text-gray-500 truncate">
            Welcome back to your farmer dashboard
          </p>

          <p className="text-[9px] sm:text-xs text-gray-400 mt-1 truncate">
            Kharif Season • September 2026
          </p>
        </div>

      </div>

      {/* Right side */}
      <div className="flex items-center gap-1 sm:gap-4 shrink-0">

        {/* Notification */}
        <div className="relative shrink-0">
          <button
            className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100"
            aria-label="Notifications"
          >
            <Bell
              size={20}
              className="text-gray-600 sm:w-[22px] sm:h-[22px]"
            />
          </button>

          <span className="absolute top-1 right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full"></span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 lg:px-6 py-1.5 sm:py-2 rounded-lg border border-gray-200 bg-gray-50 min-w-0">

          <MapPin
            size={18}
            className="text-green-600 shrink-0 sm:w-5 sm:h-5"
          />

          <div className="min-w-0">
            <p className="text-[9px] sm:text-xs text-gray-500">
              Location
            </p>

            <p className="text-[10px] sm:text-sm font-medium text-gray-700 truncate max-w-[70px] sm:max-w-none">
              Your Location
            </p>
          </div>

        </div>

      </div>

    </header>
  );
}

export default FarmerHeader;