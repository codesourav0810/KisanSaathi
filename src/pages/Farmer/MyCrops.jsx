import FarmerLayout from "../../components/farmer/FarmerLayout";
import { Sprout, ClipboardList, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
const crops = [
  {
    id: 1,
    name: "Tomato",
    variety: "Hybrid",
    grade: "Grade A",
    date: "Sown Jun 2026",
    quantity: "500 kg",
    price: "₹31–34/kg",
    status: "Live listing",
  },

  {
    id: 2,
    name: "Onion",
    variety: "Red Onion",
    grade: "Grade A",
    date: "Sown Jun 2026",
    quantity: "500 kg",
    price: "₹28–32/kg",
    status: "Live listing",
  },

{
  id: 3,
  name: "Wheat",
  variety: "Sharbati",
  grade: "Grade A",
  date: "Sown Jun 2026",
  quantitySold: "450 kg",
  rate: "₹26/kg",
  status: "Sold",
},

];

function MyCrops() {
const navigate = useNavigate();

const activeCrops = crops.filter(
  (crop) => crop.status === "Live listing"
);

const soldCrops = crops.filter(
  (crop) => crop.status === "Sold"
);
  return (
    <FarmerLayout>
      <div className="min-h-[calc(100vh-5rem)] bg-[#EEF5F0] p-4 sm:p-6 lg:p-8">

        <div className="max-w-7xl mx-auto">

          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              My Crops
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Manage your crop listings and track their status
            </p>
          </div>

          {/* Summary Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-16 mb-8 ">

  {/* Active Crops */}
<div className="bg-white rounded-2xl shadow-[inset_0_0_10px_rgba(0,0,0,0.18)] p-5 w-full sm:w-[330px]">

    <div className="flex items-start gap-4">

      {/* Icon */}
      <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
        <Sprout
          size={28}
          className="text-green-600"
        />
      </div>

      {/* Heading */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Active crops
        </h2>

        <p className="text-sm text-gray-600 mt-1">
          Available Crops (September)
        </p>
      </div>

    </div>

    {/* Number */}
    <p className="text-2xl font-bold text-gray-800 text-center mt-3">
      {activeCrops.length}
    </p>

    {/* Crop Names */}
    <div className="flex justify-center mt-4">
      <span className="px-4 py-1 rounded-md bg-emerald-100 text-emerald-700 text-xs font-medium">
        {activeCrops.map((crop) => crop.name).join(" · ")}
      </span>
    </div>

  </div>


  {/* Sold Crops */}
<div className="bg-white rounded-2xl shadow-[inset_0_0_10px_rgba(0,0,0,0.18)] p-5 w-full sm:w-[330px]">

    <div className="flex items-start gap-4">

      {/* Icon */}
      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
        <ClipboardList
          size={27}
          className="text-gray-600"
        />
      </div>

      {/* Heading */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Sold Crops
        </h2>

        <p className="text-sm text-gray-600 mt-1">
          Crops Sold in September
        </p>
      </div>

    </div>

    {/* Number */}
    <p className="text-3xl font-bold text-gray-800 text-center mt-4">
      {soldCrops.length}
    </p>

    {/* Crop Names */}
    <div className="flex justify-center mt-4">
      <span className="px-4 py-1 rounded-md bg-emerald-100 text-emerald-700 text-xs font-medium">
        {soldCrops.map((crop) => crop.name).join(" · ")}
      </span>
    </div>

  </div>

</div>

        </div>
{/* Tabs + Add Crop */}
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

  {/* Tabs */}
  <div className="flex items-center justify-center gap-10 bg-white border border-gray-100 rounded-xl p-1 w-[50%]">

    <button
      className="px-4 py-1 text-sm font-medium rounded-xl bg-[#166534] text-white w-[25%] cursor-pointer"
    >
      All
    </button>

    <button
      className="px-4 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 cursor-pointer"
    >
      Live listing
    </button>

    <button
      className="px-4 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 cursor-pointer"
    >
      Sold crops
    </button>

  </div>

<button
  onClick={() => navigate("/farmer/add-crop")}
  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#16835B] text-white text-sm font-medium hover:bg-[#126B4A]"
>
    <Plus size={18} />
    Add New Crop
  </button>

</div>
{/* Crop Listings */}
<div className="space-y-4">

  {crops.map((crop) => (
    <div
  key={crop.id}
  className="bg-white rounded-2xl p-5 sm:p-6"
>
  <div className="flex flex-col sm:flex-row sm:items-center gap-5">

    {/* Crop image */}
    <div className="w-20 h-20 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
      <Sprout
        size={38}
        className="text-green-600"
      />
    </div>

    {/* Crop details */}
    <div className="flex-1 min-w-0">

      <div className="flex flex-wrap items-center gap-2">

        <h2 className="text-xl font-semibold text-gray-900">
          {crop.name}
        </h2>

<span
  className={`px-4.5 py-1 rounded-full text-xs font-bold ${
    crop.status === "Sold"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-green-100 text-green-700"
  }`}
>
  {crop.status}
</span>

      </div>

      <p className="text-sm text-gray-500 mt-1">
        {crop.variety} · {crop.grade} · {crop.date}
      </p>

      <div className="flex flex-wrap gap-6 mt-4">

{crop.status === "Sold" ? (
  <>
    <div>
      <p className="text-xs text-gray-400">
        Quantity Sold
      </p>

      <p className="text-sm font-semibold text-gray-800 mt-1">
        {crop.quantitySold}
      </p>
    </div>

    <div>
      <p className="text-xs text-gray-400">
        Rate
      </p>

      <p className="text-sm font-semibold text-gray-800 mt-1">
        {crop.rate}
      </p>
    </div>
  </>
) : (
  <>
    <div>
      <p className="text-xs text-gray-400">
        Quantity
      </p>

      <p className="text-sm font-semibold text-gray-800 mt-1">
        {crop.quantity}
      </p>
    </div>

    <div>
      <p className="text-xs text-gray-400">
        Market Price
      </p>

      <p className="text-sm font-semibold text-gray-800 mt-1">
        {crop.price}
      </p>
    </div>
  </>
)}

      </div>

    </div>


  {/* Crop Actions */}
<div className="flex flex-wrap gap-2 mt-5 sm:mt-0">

  {crop.status === "Live listing" ? (
    <>
      <button
        className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        Edit
      </button>

      <button
        className="px-4 py-2 rounded-lg bg-[#16835B] text-white text-sm font-medium hover:bg-[#126B4A]"
      >
        Mark as sold
      </button>
    </>
  ) : (
    <button
      className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50"
    >
      View details
    </button>
  )}

</div>
</div>
  </div>
  ))}

</div>
      </div>
    </FarmerLayout>
  );
}

export default MyCrops;