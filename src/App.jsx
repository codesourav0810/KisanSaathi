import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ApiTest from "./components/ApiTest";
import FarmerDashboard from "./pages/Farmer/FarmerDashboard";
import MyCrops from "./pages/Farmer/MyCrops";
import AddCrop from "./pages/Farmer/AddCrop";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/api-test" element={<ApiTest />} />
        <Route path="/farmer/dashboard" element={<FarmerDashboard />} />
        <Route path="/farmer/my-crops" element={<MyCrops />} />
        <Route path="/farmer/add-crop" element={<AddCrop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
