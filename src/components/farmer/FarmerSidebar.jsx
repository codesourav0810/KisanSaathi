import {
  Home,
  Sprout,
  Plus,
  ShoppingBag,
  Lightbulb,
  Map,
  ClipboardList,
  User,
  Languages,
  LogOut,
  X,
} from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";

import logo from "../../assets/logo.png";

function FarmerSidebar({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleNavigation = (path) => {
    navigate(path);
    setSidebarOpen(false);
  };

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`
          fixed sm:static
          top-0 left-0
          z-40
          w-72
          h-screen sm:h-auto
          overflow-y-auto sm:overflow-visible
          overflow-x-hidden
          bg-[#133D2F]
          border-r border-gray-200
          p-4
          shrink-0
          transition-transform duration-300 ease-in-out
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full sm:translate-x-0"
          }
        `}
      >
        {/* Mobile Close Button */}
        <div className="flex justify-end sm:hidden mb-4">
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 rounded-lg text-white hover:bg-[#1F4D3D]"
            aria-label="Close navigation menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Logo and Branding */}
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="KisanSaathi"
              className="w-10 h-10 shrink-0"
            />

            <h2 className="text-2xl font-bold text-white">
              Kisan
              <span className="text-[#34D399]">Saathi</span>
            </h2>
          </div>

          <p className="text-xs text-white mt-1">
            BETTER MARKETS. BETTER PRICES.
          </p>
        </div>

        {/* Farmer Information */}
        <div className="mb-6">
          <p className="font-semibold text-white">
            Hello, Ramesh Das
          </p>

          <p className="text-sm text-gray-400">
            Farmer
          </p>
        </div>

        {/* Navigation */}
        <nav className="space-y-2 text-[#D1FAE5]">

          {/* Home */}
          <button
            onClick={() =>
              handleNavigation("/farmer/dashboard")
            }
            className="relative w-full p-3 rounded-lg flex items-center gap-3 border-0 bg-transparent hover:bg-[#1F4D3D] text-left cursor-pointer"
          >
            <span
              className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-1 rounded-full bg-[#34D399] ${
                isActive("/farmer/dashboard")
                  ? "underline-grow"
                  : "w-0 opacity-0"
              }`}
            />

            <Home
              size={20}
              className="text-[#6EE7B7] shrink-0"
            />

            <span>Home</span>
          </button>

          {/* My Crops */}
          <button
            onClick={() =>
              handleNavigation("/farmer/my-crops")
            }
            className="relative w-full p-3 rounded-lg flex items-center gap-3 border-0 bg-transparent hover:bg-[#1F4D3D] text-left cursor-pointer"
          >
            <span
              className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-1 rounded-full bg-[#34D399] ${
                isActive("/farmer/my-crops")
                  ? "underline-grow"
                  : "w-0 opacity-0"
              }`}
            />

            <Sprout
              size={20}
              className="text-[#6EE7B7] shrink-0"
            />

            <span>My Crops</span>
          </button>

          {/* Add New Crop */}
          <button
            onClick={() =>
              handleNavigation("/farmer/add-crop")
            }
            className="relative w-full p-3 rounded-lg flex items-center gap-3 border-0 bg-transparent hover:bg-[#1F4D3D] text-left cursor-pointer"
          >
            <span
              className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-1 rounded-full bg-[#34D399] ${
                isActive("/farmer/add-crop")
                  ? "underline-grow"
                  : "w-0 opacity-0"
              }`}
            />

            <Plus
              size={20}
              className="text-[#6EE7B7] shrink-0"
            />

            <span>Add New Crop</span>
          </button>

          {/* Kisan Market */}
          <button
            onClick={() =>
              handleNavigation("/farmer/market")
            }
            className="relative w-full p-3 rounded-lg flex items-center gap-3 border-0 bg-transparent hover:bg-[#1F4D3D] text-left cursor-pointer"
          >
            <span
              className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-1 rounded-full bg-[#34D399] ${
                isActive("/farmer/market")
                  ? "underline-grow"
                  : "w-0 opacity-0"
              }`}
            />

            <ShoppingBag
              size={20}
              className="text-[#6EE7B7] shrink-0"
            />

            <span>Kisan Market</span>
          </button>

          {/* Smart Recommendations */}
          <button
            onClick={() =>
              handleNavigation("/farmer/recommendations")
            }
            className="relative w-full p-3 rounded-lg flex items-center gap-3 border-0 bg-transparent hover:bg-[#1F4D3D] text-left cursor-pointer"
          >
            <span
              className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-1 rounded-full bg-[#34D399] ${
                isActive("/farmer/recommendations")
                  ? "underline-grow"
                  : "w-0 opacity-0"
              }`}
            />

            <Lightbulb
              size={20}
              className="text-[#6EE7B7] shrink-0"
            />

            <span className="whitespace-nowrap">
              Smart Recommendations
            </span>
          </button>

          {/* Mandi Map */}
          <button
            onClick={() =>
              handleNavigation("/farmer/mandi-map")
            }
            className="relative w-full p-3 rounded-lg flex items-center gap-3 border-0 bg-transparent hover:bg-[#1F4D3D] text-left cursor-pointer"
          >
            <span
              className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-1 rounded-full bg-[#34D399] ${
                isActive("/farmer/mandi-map")
                  ? "underline-grow"
                  : "w-0 opacity-0"
              }`}
            />

            <Map
              size={20}
              className="text-[#6EE7B7] shrink-0"
            />

            <span>Mandi Map</span>
          </button>

          {/* Orders */}
          <button
            onClick={() =>
              handleNavigation("/farmer/orders")
            }
            className="relative w-full p-3 rounded-lg flex items-center gap-3 border-0 bg-transparent hover:bg-[#1F4D3D] text-left cursor-pointer"
          >
            <span
              className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-1 rounded-full bg-[#34D399] ${
                isActive("/farmer/orders")
                  ? "underline-grow"
                  : "w-0 opacity-0"
              }`}
            />

            <ClipboardList
              size={20}
              className="text-[#6EE7B7] shrink-0"
            />

            <span>Orders</span>
          </button>

          {/* Profile */}
          <button
            onClick={() =>
              handleNavigation("/farmer/profile")
            }
            className="relative w-full p-3 rounded-lg flex items-center gap-3 border-0 bg-transparent hover:bg-[#1F4D3D] text-left cursor-pointer"
          >
            <span
              className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-1 rounded-full bg-[#34D399] ${
                isActive("/farmer/profile")
                  ? "underline-grow"
                  : "w-0 opacity-0"
              }`}
            />

            <User
              size={20}
              className="text-[#6EE7B7] shrink-0"
            />

            <span>Profile</span>
          </button>

        </nav>

        {/* Language */}
        <div className="mt-8 border-t border-gray-600 pt-4">
          <button
            className="w-full p-3 rounded-lg flex items-center gap-3 border-0 bg-transparent hover:bg-[#1F4D3D] text-left cursor-pointer text-[#D1FAE5]"
          >
            <Languages
              size={20}
              className="text-[#6EE7B7] shrink-0"
            />

            <span>Language</span>
          </button>
        </div>

        {/* Logout */}
        <button
          onClick={() => {
            localStorage.removeItem("loggedInUser");
            navigate("/login");
            setSidebarOpen(false);
          }}
          className="w-full p-3 rounded-lg flex items-center gap-3 border-0 bg-transparent hover:bg-[#1F4D3D] text-left cursor-pointer text-red-400"
        >
          <LogOut
            size={20}
            className="text-[#6EE7B7] shrink-0"
          />

          <span>Log Out</span>
        </button>

      </aside>
    </>
  );
}

export default FarmerSidebar;
