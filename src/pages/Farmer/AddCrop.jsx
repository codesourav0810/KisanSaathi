import { useState } from "react";
import {
  Plus,
  X,
  Check,
  Lightbulb,
  ChevronDown,
  CalendarDays,
  Crown,
  BadgeCheck,
  ShieldCheck,
} from "lucide-react";

import FarmerLayout from "../../components/farmer/FarmerLayout";

function AddCrop() {
  // Existing form states
  const [cropName, setCropName] = useState("");
  const [variety, setVariety] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expectedPrice, setExpectedPrice] = useState("");
  const [showGradingGuide, setShowGradingGuide] = useState(false);

  // New form states
  const [minimumPrice, setMinimumPrice] = useState("");
  const [priceTerms, setPriceTerms] = useState("Negotiable");
  const [availableFrom, setAvailableFrom] = useState("");

  // Quality
  const [qualityGrade, setQualityGrade] = useState("Grade A");

  // Photos
  const [photos, setPhotos] = useState([]);
  const [formError, setFormError] = useState("");

  // Handle photo upload
const handlePhotoUpload = (e) => {
  const files = Array.from(e.target.files);

  if (photos.length + files.length > 5) {
    setFormError("You can upload a maximum of 5 photos.");
    return;
  }

  const newPhotos = files.map((file) => ({
    id: `${file.name}-${file.lastModified}`,
    file,
    preview: URL.createObjectURL(file),
  }));

  setPhotos((prev) => [...prev, ...newPhotos]);
  setFormError("");
};

  // Remove photo
  const removePhoto = (id) => {
    setPhotos((prev) => prev.filter((photo) => photo.id !== id));
  };
const handleCreateListing = () => {
  setFormError("");

  if (
    !cropName ||
    !variety ||
    !quantity ||
    !expectedPrice ||
    !minimumPrice ||
    !availableFrom
  ) {
    setFormError("Please fill in all required fields.");
    return;
  }

  if (photos.length < 3) {
    setFormError("Please add at least 3 photos.");
    return;
  }

  alert("Listing created successfully!");
};
  return (
    <FarmerLayout>
      <div className="bg-[#EEF6F1] min-h-screen p-4 sm:p-6 lg:p-8">
        {/* =========================
            PAGE HEADING
        ========================== */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Add New Crop
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Add your crop details to create a new listing.
          </p>
        </div>

        {/* =========================
            QUANTITY & ASKING PRICE
        ========================== */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
            Quantity & Asking Price
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6">
            {/* Crop Name */}
            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-500 mb-2">
                Crop Name<span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                placeholder="e.g. Tomato"
                value={cropName}
                onChange={(e) => setCropName(e.target.value)}
                className="w-full border border-[#A8D5C4] bg-[#F8FCFA] rounded-lg px-4 py-2.5 outline-none focus:border-[#16835B]"
              />
            </div>

            {/* Variety */}
            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-500 mb-2">
                Variety<span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                placeholder="e.g. Hybrid"
                value={variety}
                onChange={(e) => setVariety(e.target.value)}
                className="w-full border border-[#A8D5C4] bg-[#F8FCFA] rounded-lg px-4 py-2.5 outline-none focus:border-[#16835B]"
              />
            </div>

            {/* Total Quantity */}
            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-500 mb-2">
                Total Quantity<span className="text-red-500">*</span>
              </label>

              <div className="relative">
                <input
                  type="number"
                  placeholder="e.g. 500"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full border border-[#A8D5C4] bg-[#F8FCFA] rounded-lg px-4 py-2.5 pr-14 outline-none focus:border-[#16835B]"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 font-medium text-gray-700">
                  Kg
                </span>
              </div>
            </div>

            {/* Asking Price */}
            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-500 mb-2">
                Asking Price<span className="text-red-500">*</span>
              </label>

              <div className="relative">
                <input
                  type="number"
                  placeholder="e.g. ₹33"
                  value={expectedPrice}
                  onChange={(e) => setExpectedPrice(e.target.value)}
                  className="w-full border border-[#A8D5C4] bg-[#F8FCFA] rounded-lg px-4 py-2.5 pr-20 outline-none focus:border-[#16835B]"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 font-medium text-gray-700">
                  per Kg
                </span>
              </div>

              {/* Smart Recommendation */}
              <div className="flex items-center gap-1.5 mt-2 text-xs text-gray-500">
                <Lightbulb size={13} className="text-yellow-500" />

                <span>
                  Smart Recommendation: list between{" "}
                  <span className="font-semibold text-[#16835B]">
                    ₹32–₹34/kg
                  </span>
                </span>
              </div>
            </div>

            {/* Minimum Asking Price */}
            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-500 mb-2">
                Minimum Asking Price<span className="text-red-500">*</span>
              </label>

              <div className="relative">
                <input
                  type="number"
                  placeholder="e.g. ₹31"
                  value={minimumPrice}
                  onChange={(e) => setMinimumPrice(e.target.value)}
                  className="w-full border border-[#A8D5C4] bg-[#F8FCFA] rounded-lg px-4 py-2.5 pr-20 outline-none focus:border-[#16835B]"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 font-medium text-gray-700">
                  per Kg
                </span>
              </div>
            </div>

            {/* Price Terms */}
            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-500 mb-2">
                Price Terms<span className="text-red-500">*</span>
              </label>

              <div className="relative">
                <select
                  value={priceTerms}
                  onChange={(e) => setPriceTerms(e.target.value)}
                  className="appearance-none w-full border border-[#A8D5C4] bg-[#F8FCFA] rounded-lg px-4 py-2.5 pr-10 outline-none focus:border-[#16835B]"
                >
                  <option value="Negotiable">Negotiable</option>
                  <option value="Fixed">Fixed</option>
                </select>

                <ChevronDown
                  size={20}
                  className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-700"
                />
              </div>
            </div>

            {/* Available From */}
            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-500 mb-2">
                Available From<span className="text-red-500">*</span>
              </label>

              <div className="relative">
                <input
                  type="date"
                  value={availableFrom}
                  onChange={(e) => setAvailableFrom(e.target.value)}
                  className="w-full border border-[#A8D5C4] bg-[#F8FCFA] rounded-lg px-4 py-2.5 outline-none focus:border-[#16835B]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* =========================
            QUALITY GRADE & PHOTOS
        ========================== */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Quality Grade & Photos
            </h2>

            <button
              type="button"
              onClick={() => setShowGradingGuide(true)}
              className="text-sm font-medium text-[#16835B] hover:underline w-fit"
            >
              Grading guide →
            </button>
          </div>

          {/* Quality Options */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
            {/* Premium */}
            <button
              type="button"
              onClick={() => setQualityGrade("Premium")}
              className={`relative rounded-xl border px-4 py-5 text-center transition ${
                qualityGrade === "Premium"
                  ? "border-[#16835B] bg-[#F4FBF7]"
                  : "border-[#A8D5C4] bg-white hover:bg-gray-50"
              }`}
            >
              {qualityGrade === "Premium" && (
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#20A464] text-white flex items-center justify-center">
                  <Check size={12} />
                </span>
              )}

<div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-3">
  <Crown size={22} className="text-green-600" />
</div>

              <p className="font-semibold text-gray-900">Premium</p>

              <p className="text-xs text-gray-500 mt-1">Export Quality</p>
            </button>

            {/* Grade A */}
            <button
              type="button"
              onClick={() => setQualityGrade("Grade A")}
              className={`relative rounded-xl border px-4 py-5 text-center transition ${
                qualityGrade === "Grade A"
                  ? "border-[#16835B] bg-[#F4FBF7]"
                  : "border-[#A8D5C4] bg-white hover:bg-gray-50"
              }`}
            >
              {qualityGrade === "Grade A" && (
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#20A464] text-white flex items-center justify-center">
                  <Check size={12} />
                </span>
              )}

<div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center mx-auto mb-3">
  <BadgeCheck size={22} className="text-orange-600" />
</div>
              <p className="font-semibold text-gray-900">Grade A</p>

              <p className="text-xs text-gray-500 mt-1">Firm, uniform, ripe</p>
            </button>

            {/* Grade B */}
            <button
              type="button"
              onClick={() => setQualityGrade("Grade B")}
              className={`relative rounded-xl border px-4 py-5 text-center transition ${
                qualityGrade === "Grade B"
                  ? "border-[#16835B] bg-[#F4FBF7]"
                  : "border-[#A8D5C4] bg-white hover:bg-gray-50"
              }`}
            >
              {qualityGrade === "Grade B" && (
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#20A464] text-white flex items-center justify-center">
                  <Check size={12} />
                </span>
              )}
<div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center mx-auto mb-3">
  <ShieldCheck size={22} className="text-yellow-600" />
</div>

              <p className="font-semibold text-gray-900">Grade B</p>

              <p className="text-xs text-gray-500 mt-1">Minor blemishes</p>
            </button>
          </div>

          {/* Photos */}
          <div className="mt-7">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
              Photos{" "}
              <span className="text-sm font-normal text-gray-400">
                (first photo is the cover)
              </span>
            </h3>

            <div className="flex flex-wrap gap-4 mt-4">
              {/* Uploaded photos */}
              {photos.map((photo, index) => (
                <div
                  key={photo.id}
className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border border-gray-300"
                >
                  <img
                    src={photo.preview}
                    alt={`Crop ${index + 1}`}
                    className="w-full h-full object-cover"
                  />

                  {index === 0 && (
                    <span className="absolute top-1 left-1 bg-[#20A464] text-white w-5 h-5 rounded-full flex items-center justify-center">
                      <Check size={12} />
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={() => removePhoto(photo.id)}
                    className="absolute top-1 right-1 w-5 h-5 rounded-full bg-black/60 text-white flex items-center justify-center"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}

              {/* Add photo */}
{photos.length < 5 && (
<label className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition">

  <Plus size={28} className="text-gray-500" />

  <span className="text-xs text-gray-500 mt-1">
    Add photo
  </span>
  <input
    type="file"
    accept="image/*"
    multiple
    onChange={handlePhotoUpload}
    className="hidden"
  />
</label>
)}
            </div>

            <p className="text-sm text-gray-700 mt-4">
  Take photos in daylight · Add 3–5 photos
  {photos.length > 0 && (
    <span className="ml-2 text-gray-500">
      ({photos.length}/3 added)
    </span>
  )}
</p>
          </div>
        </div>

        {/* =========================
            LISTING SUMMARY
        ========================== */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
            Listing Summary
          </h2>

          <div className="max-w-2xl mx-auto space-y-4">
{/* Crop */}
<div className="flex items-center justify-between gap-4 py-2 border-b border-gray-100">
  <p className="text-sm font-medium text-gray-500">
    Crop
  </p>

  <p className="text-sm font-semibold text-gray-800 text-right">
    {cropName || "—"}
    {variety && ` · ${variety}`}
  </p>
</div>


{/* Quality */}
<div className="flex items-center justify-between gap-4 py-2 border-b border-gray-100">
  <p className="text-sm font-medium text-gray-500">
    Quality
  </p>

  <p className="text-sm font-semibold text-gray-800">
    {qualityGrade || "—"}
  </p>
</div>


{/* Quantity */}
<div className="flex items-center justify-between gap-4 py-2 border-b border-gray-100">
  <p className="text-sm font-medium text-gray-500">
    Quantity
  </p>

  <p className="text-sm font-semibold text-gray-800">
    {quantity ? `${quantity} kg` : "—"}
  </p>
</div>


{/* Asking Price */}
<div className="flex items-center justify-between gap-4 py-2 border-b border-gray-100">
  <p className="text-sm font-medium text-gray-500">
    Asking Price
  </p>

  <p className="text-sm font-semibold text-gray-800">
    {expectedPrice ? `₹${expectedPrice}/kg` : "—"}
  </p>
</div>


{/* Floor Price */}
<div className="flex items-center justify-between gap-4 py-2 border-b border-gray-100">
  <p className="text-sm font-medium text-gray-500">
    Minimum Asking Price
  </p>

  <p className="text-sm font-semibold text-gray-800">
    {minimumPrice ? `₹${minimumPrice}/kg` : "—"}
  </p>
</div>


{/* Price Terms */}
<div className="flex items-center justify-between gap-4 py-2 border-b border-gray-100">
  <p className="text-sm font-medium text-gray-500">
    Price Terms
  </p>

  <p className="text-sm font-semibold text-gray-800">
    {priceTerms}
  </p>
</div>


{/* Available From */}
<div className="flex items-center justify-between gap-4 py-2">
  <p className="text-sm font-medium text-gray-500">
    Available From
  </p>

  <p className="text-sm font-semibold text-gray-800">
    {availableFrom || "—"}
  </p>
</div>
          </div>

          {/* Expected Payout */}
          <div className="max-w-2xl mx-auto mt-7 bg-[#176D38] text-white rounded-xl p-5">
            <p className="text-sm sm:text-base font-medium text-green-100">
              Expected Payout (At Asking Price)
            </p>

            <p className="text-3xl sm:text-4xl font-bold mt-1">
              ₹
              {quantity && expectedPrice
                ? Number(quantity) * Number(expectedPrice)
                : "0"}
            </p>
          </div>
        </div>

        {/* =========================
            CREATE LISTING
        ========================== */}
          {formError && (
  <p className="text-sm text-red-600 text-center mb-3">
    {formError}
  </p>
)}
        <div className="flex justify-center pb-6">
          <button
           onClick={handleCreateListing}
            type="button"
            className="w-full sm:w-auto sm:min-w-[320px] px-8 py-3.5 rounded-xl bg-[#176D38] text-white text-lg sm:text-xl font-semibold hover:bg-[#125A2E] transition"
          >
            Create Listing
          </button>
        </div>
      </div>

      {showGradingGuide && (
  <div
    className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4"
    onClick={() => setShowGradingGuide(false)}
  >
    <div
      className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-5 sm:p-6"
      onClick={(e) => e.stopPropagation()}
    >

      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-5">

        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Grading Guide
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Choose the grade that best matches your crop quality.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowGradingGuide(false)}
          className="shrink-0 w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center"
          aria-label="Close grading guide"
        >
          <X size={18} className="text-gray-600" />
        </button>

      </div>


      {/* Premium */}
      <div className="border border-green-200 rounded-xl p-4 mb-3 bg-green-50">

        <div className="flex items-center gap-3">

<div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-3">
  <Crown size={22} className="text-green-600" />
</div>

          <div>
            <h3 className="font-semibold text-gray-900">
              Premium
            </h3>

            <p className="text-sm text-gray-600 mt-1">
              Excellent quality, highly uniform, fresh and suitable for
              premium or export markets.
            </p>
          </div>

        </div>

      </div>


      {/* Grade A */}
      <div className="border border-orange-200 rounded-xl p-4 mb-3 bg-orange-50">

        <div className="flex items-center gap-3">

<div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center mx-auto mb-3">
  <BadgeCheck size={22} className="text-orange-600" />
</div>

          <div>
            <h3 className="font-semibold text-gray-900">
              Grade A
            </h3>

            <p className="text-sm text-gray-600 mt-1">
              Good quality, firm and uniform with good appearance and
              only minor imperfections.
            </p>
          </div>

        </div>

      </div>


      {/* Grade B */}
      <div className="border border-yellow-200 rounded-xl p-4 bg-yellow-50">

        <div className="flex items-center gap-3">

<div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center mx-auto mb-3">
  <ShieldCheck size={22} className="text-yellow-600" />
</div>

          <div>
            <h3 className="font-semibold text-gray-900">
              Grade B
            </h3>

            <p className="text-sm text-gray-600 mt-1">
              Acceptable quality with visible blemishes or variations,
              but still suitable for sale.
            </p>
          </div>

        </div>

      </div>


      {/* Close */}
      <button
        type="button"
        onClick={() => setShowGradingGuide(false)}
        className="w-full mt-5 py-2.5 rounded-lg bg-[#16835B] text-white font-medium hover:bg-[#126B4A]"
      >
        Got it
      </button>

    </div>
  </div>
)}
    </FarmerLayout>
  );
}

export default AddCrop;
