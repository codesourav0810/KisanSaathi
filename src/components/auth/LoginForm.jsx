import logo from "../../assets/logo.png";
import loginBg from "../../assets/Login-bg-Img.svg";
import {
  TrendingUp,
  Users,
  Truck,
  Handshake,
  Store,
  Brain,
  Eye,
  EyeOff,
  ShieldCheck
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//DUMMY DATA FOR TESTING
const dummyUsers = [
  {
    email: "farmer@test.com",
    mobile: "9876543210",
    password: "123456",
    role: "farmer",
  },
  {
    email: "buyer@test.com",
    mobile: "9876543211",
    password: "123456",
    role: "buyer",
  },
  {
    email: "fpo@test.com",
    mobile: "9876543212",
    password: "123456",
    role: "fpo",
  },
  {
    email: "admin@test.com",
    mobile: "9876543213",
    password: "123456",
    role: "admin",
  },
];

function LoginForm() {
  const navigate= useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
  email: false,
  password: false,
});
const [loginError, setLoginError] = useState("");
const handleSubmit = (e) => {
  e.preventDefault();

  const form = e.target;

  const emailError = !form.email.value.trim();
  const passwordError = !form.password.value.trim();

  setErrors({
    email: emailError,
    password: passwordError,
  });

  if (emailError) {
    setShake((prev) => ({
      ...prev,
      email: prev.email + 1,
    }));
  }

  if (passwordError) {
    setShake((prev) => ({
      ...prev,
      password: prev.password + 1,
    }));
  }

  if (emailError || passwordError) {
    return;
  }

  // Login functionality will be added later

  const user = dummyUsers.find(
  (item) =>
    (item.email === form.email.value.trim() ||
      item.mobile === form.email.value.trim()) &&
    item.password === form.password.value.trim()
);

if (!user) {
  setLoginError("Password or mobile number entered is incorrect. Please enter correct credentials.");

  setErrors({
    email: false,
    password: false,
  });

  setShake((prev) => ({
    ...prev,
    email: prev.email + 1,
    password: prev.password + 1,
  }));

  return;
}

localStorage.setItem(
  "loggedInUser",
  JSON.stringify({
    email: user.email,
    mobile: user.mobile,
    role: user.role,
  })
);

navigate(`/${user.role}/dashboard`);


};
const [shake, setShake] = useState({
  email: 0,
  password: 0,
});
  return (
        <>
          <style>
  {`
    @keyframes shake {
      0%, 100% {
        transform: translateX(0);
      }
      20% {
        transform: translateX(-8px);
      }
      40% {
        transform: translateX(8px);
      }
      60% {
        transform: translateX(-6px);
      }
      80% {
        transform: translateX(6px);
      }
    }
  `}
</style>
    <div className="min-h-screen w-full flex">
      {/* Left Section */}
      <section className="w-1/2 min-h-screen relative overflow-hidden">
        {/* Background image + fade */}
        <div
          className="absolute top-0 left-0 w-full h-[95%] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${loginBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/0 to-white/98"></div>
        </div>
        <div className="relative z-10 ml-4">
          <div className="p-6 flex items-center">
            <img src={logo} alt="KisanSaathi" className="w-15" />
            <div>
              <h1 className="text-4xl font-[800] text-[#14532D]">
                KisanSaathi
              </h1>
              <h3 className="text-sm text-[#334155] font-[500]">
                BETTER MARKETS. BETTER PRICES.
              </h3>
            </div>
          </div>
          <div className="p-7">
            <h2>
              <span className="text-black text-5xl font-[800]">
                Connecting Farmers
              </span>{" "}
              <br />
              <span className="text-[#13622E] font-bold text-5xl">
                to Better Markets
              </span>
            </h2>

            <p className="text-[#334155] mt-3">
              Get real-time prices, find trusted buyers, and make <br />
              smarter selling decisions.
            </p>

            {/* Features */}
            <div className="mt-6 flex flex-col gap-4">
              {/* Feature 1 */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#DDF4E6] flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#13622E]" />
                </div>

                <div>
                  <h3 className="text-[#172033] text-lg font-[800]">
                    Real-time Market Prices
                  </h3>
                  <p className="text-[#14532D] text-sm mt-1 font-[500]">
                    Stay updated with live mandi prices
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#DDF4E6] flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#13622E]" />
                </div>

                <div>
                  <h3 className="text-[#172033] text-lg font-[800]">
                    Verified Buyers
                  </h3>
                  <p className="text-[#14532D] font-[500] text-sm mt-1">
                    Connect with trustworthy buyers
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#DDF4E6] flex items-center justify-center">
                  <Truck className="w-5 h-5 text-[#13622E]" />
                </div>

                <div>
                  <h3 className="text-[#172033] text-lg font-[800]">
                    End-to-End Support
                  </h3>
                  <p className="text-[#14532D] text-sm font-[500] mt-1">
                    Transport, storage, payments & more
                  </p>
                </div>
              </div>
            </div>

            {/* Green Stats Card */}
            <div className="px-10 py-5 mt-10 rounded-lg w-full h-[25%] bg-[#0D4624] z-20 px-8 flex items-center justify-around">
              <div className="flex flex-col items-center text-center">
                <Handshake className="w-6 h-6 text-white mb-2" />
                <h3 className="text-white text-3xl font-[800]">1 Platform</h3>
                <p className="text-white/80 text-sm mt-1">
                  Farmers & Buyers Connected
                </p>
              </div>

              <div className="h-12 w-px bg-white/30"></div>

              <div className="flex flex-col items-center text-center">
                <Store className="w-5 h-5 text-white mb-2" />
                <h3 className="text-white text-3xl font-[800]">24/7</h3>
                <p className="text-white/80 text-sm mt-1">Market Access</p>
              </div>

              <div className="h-12 w-px bg-white/30"></div>

              <div className="flex flex-col items-center text-center">
                <Brain className="w-5 h-5 text-white mb-2" />
                <h3 className="text-white text-3xl font-[800]">Smart</h3>
                <p className="text-white/80 text-sm mt-1">Selling Decisions</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>

      {/* Right Section */}
      <section className="w-1/2 min-h-screen flex items-center justify-center bg-white">

  <div className="flex flex-col justify-center w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

    <h1 className="text-black text-4xl font-[800] text-center">
      Welcome Back!
    </h1>

    <h1 className="text-black text-md font-light mt-1 mb-10 text-center">
      Login to access your account now
    </h1>

    <form onSubmit={handleSubmit} noValidate>

      <div className="my-5">

        <label>Mobile Number / Email</label>

        <br />

        <input
          name="email"
          required
          type="text"
          placeholder="Enter mobile number or email"
          key={shake.email}
          className={`border p-2 w-full rounded-lg mt-3 text-[#94A3B8]
            ${
              errors.email
                ? "border-red-500 animate-[shake_0.4s_ease-in-out]"
                : "border-[#94A3B8]/50"
            }
          `}
        />

      </div>

      <div className="my-5">

        <label>Password</label>

        <br />

        <div className="relative">

          <input
            name="password"
            required
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            key={shake.password}
            className={`border p-2 w-full rounded-lg mt-3 text-[#94A3B8]
              ${
                errors.password
                  ? "border-red-500 animate-[shake_0.4s_ease-in-out]"
                  : "border-[#94A3B8]/50"
              }
            `}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 mt-1"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>

        </div>

      </div>

      {/* Error Message */}
      {(errors.email || errors.password) && (
        <p className="text-red-500 text-sm -mt-2 mb-2">
          fields can't be empty*
        </p>
      )}

      {/* Forgot Password */}
      <div className="flex justify-end mt-2">

        <button
          type="button"
          className="text-sm text-[#13622E] font-[600] hover:underline"
        >
          Forgot Password?
        </button>

      </div>

      {/* Login */}
      {loginError && (
  <p className="text-red-600 text-sm text-center mb-3">
    {loginError}
  </p>
)}
      <button
        type="submit"
        className="w-full bg-[#13622E] text-white py-3 rounded-lg mt-6 font-[600] hover:bg-[#14532D] transition"
      >
        Login
      </button>
{/* Divider */}
<div className="flex items-center gap-4 mt-8">
  <div className="h-px bg-[#CBD5E1] flex-1"></div>

  <span className="text-[#94A3B8] text-sm">
    or
  </span>

  <div className="h-px bg-[#CBD5E1] flex-1"></div>
</div>

{/* Create Account */}
<div className="flex justify-center items-center gap-2 mt-8">
  <span className="text-[#64748B] font-[500]">
    New to KisanSaathi?
  </span>

  <Link
    to="/register"
    className="text-[#13622E] font-[700] underline hover:text-[#14532D]"
  >
    Create Account
  </Link>
</div>

{/* Security Footer */}
<div className="flex items-center justify-center gap-2 mt-10 mx-auto w-[90%] py-2 rounded-full border border-[#BBF7D0] bg-[#F0FDF4]">
  <ShieldCheck className="w-5 h-5 text-[#059669]" />

  <span className="text-[#64748B] text-sm">
    Your data is 100% secure with AgriLink
  </span>
</div>
    </form>

  </div>

</section>
    </div>
    </>
  );
}

export default LoginForm;
