import { useEffect, useState } from "react";

import FarmerSidebar from "./FarmerSidebar";
import FarmerHeader from "./FarmerHeader";

function FarmerLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
useEffect(() => {
  document.body.style.overflow = sidebarOpen ? "hidden" : "";

  return () => {
    document.body.style.overflow = "";
  };
}, [sidebarOpen]);
  return (
    <div className="min-h-screen flex">

      <FarmerSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex-1 min-w-0">

        <FarmerHeader
          setSidebarOpen={setSidebarOpen}
        />

        <main>
          {children}
        </main>

      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-30 bg-black/40 sm:hidden"
        />
      )}

    </div>
  );
}

export default FarmerLayout;