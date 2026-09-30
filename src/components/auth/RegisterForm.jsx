import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

import {
  Leaf,
  Users,
  Building2,
  ShieldCheck,
  ChevronDown,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  Check,
  X,
  Smartphone,
  Mail,
  BadgeCheck,
  Loader2,
} from "lucide-react";

/* ========================================================= */
/* LOCAL LOCATION DATA                                       */
/* ========================================================= */

/*
  Structure:

  State
    └── District
          └── City
                └── Tehsil

  This is temporary frontend data.
  Later this can be replaced with Sagnik's backend API.
*/

const locationData = {
  "West Bengal": {
    Darjeeling: {
      Siliguri: ["Siliguri", "Matigara", "Naxalbari"],
      Darjeeling: ["Darjeeling", "Jorethang"],
      Kurseong: ["Kurseong"],
    },

    Jalpaiguri: {
      Jalpaiguri: ["Jalpaiguri", "Rajganj"],
      Mal: ["Mal", "Matiali"],
      Dhupguri: ["Dhupguri"],
    },

    Kalimpong: {
      Kalimpong: ["Kalimpong"],
      Algarah: ["Algarah"],
    },

    Kolkata: {
      Kolkata: ["Kolkata"],
    },

    "South 24 Parganas": {
      Alipore: ["Alipore"],
      Baruipur: ["Baruipur"],
      DiamondHarbour: ["Diamond Harbour"],
    },

    "North 24 Parganas": {
      Barasat: ["Barasat"],
      Basirhat: ["Basirhat"],
      Bongaon: ["Bongaon"],
    },

    Malda: {
      Malda: ["English Bazar", "Old Malda"],
      Chanchal: ["Chanchal"],
    },

    Murshidabad: {
      Berhampore: ["Berhampore"],
      Jangipur: ["Jangipur"],
    },

    Nadia: {
      Krishnanagar: ["Krishnanagar"],
      Ranaghat: ["Ranaghat"],
    },

    Hooghly: {
      Chinsurah: ["Chinsurah"],
      Chandannagar: ["Chandannagar"],
      Serampore: ["Serampore"],
    },

    Howrah: {
      Howrah: ["Howrah"],
      Uluberia: ["Uluberia"],
    },

    Bardhaman: {
      Bardhaman: ["Bardhaman"],
      Kalna: ["Kalna"],
      Durgapur: ["Durgapur"],
    },
  },

  Bihar: {
    Patna: {
      Patna: ["Patna Sadar"],
      Danapur: ["Danapur"],
      Phulwari: ["Phulwari"],
    },

    Gaya: {
      Gaya: ["Gaya Sadar"],
      Tekari: ["Tekari"],
    },

    Muzaffarpur: {
      Muzaffarpur: ["Muzaffarpur"],
      Kanti: ["Kanti"],
    },

    Bhagalpur: {
      Bhagalpur: ["Bhagalpur"],
      Nathnagar: ["Nathnagar"],
    },
  },

  Assam: {
    Kamrup: {
      Guwahati: ["Guwahati"],
      Rangia: ["Rangia"],
    },

    Dibrugarh: {
      Dibrugarh: ["Dibrugarh"],
      Naharkatia: ["Naharkatia"],
    },

    Jorhat: {
      Jorhat: ["Jorhat"],
      Titabor: ["Titabor"],
    },
  },

  Jharkhand: {
    Ranchi: {
      Ranchi: ["Ranchi"],
      Kanke: ["Kanke"],
    },

    Dhanbad: {
      Dhanbad: ["Dhanbad"],
      Jharia: ["Jharia"],
    },

    Bokaro: {
      Bokaro: ["Bokaro"],
      Chas: ["Chas"],
    },
  },

  Odisha: {
    Khordha: {
      Bhubaneswar: ["Bhubaneswar"],
      Khordha: ["Khordha"],
    },

    Cuttack: {
      Cuttack: ["Cuttack"],
      Athagarh: ["Athagarh"],
    },

    Puri: {
      Puri: ["Puri"],
      Pipili: ["Pipili"],
    },
  },

  Maharashtra: {
    Mumbai: {
      Mumbai: ["Mumbai"],
    },

    Pune: {
      Pune: ["Pune City"],
      Baramati: ["Baramati"],
    },

    Nashik: {
      Nashik: ["Nashik"],
      Sinnar: ["Sinnar"],
    },
  },

  Karnataka: {
    BengaluruUrban: {
      Bengaluru: ["Bengaluru North", "Bengaluru South"],
    },

    Mysuru: {
      Mysuru: ["Mysuru"],
      Nanjangud: ["Nanjangud"],
    },

    Belagavi: {
      Belagavi: ["Belagavi"],
      Gokak: ["Gokak"],
    },
  },

  Rajasthan: {
    Jaipur: {
      Jaipur: ["Jaipur"],
      Amer: ["Amer"],
    },

    Jodhpur: {
      Jodhpur: ["Jodhpur"],
      Osian: ["Osian"],
    },

    Udaipur: {
      Udaipur: ["Udaipur"],
      Girwa: ["Girwa"],
    },
  },

  UttarPradesh: {
    Lucknow: {
      Lucknow: ["Lucknow"],
      Mohanlalganj: ["Mohanlalganj"],
    },

    Varanasi: {
      Varanasi: ["Varanasi"],
      Pindra: ["Pindra"],
    },

    Prayagraj: {
      Prayagraj: ["Sadar"],
      Koraon: ["Koraon"],
    },
  },

  MadhyaPradesh: {
    Bhopal: {
      Bhopal: ["Berasia", "Huzur"],
    },

    Indore: {
      Indore: ["Indore"],
      Depalpur: ["Depalpur"],
    },

    Jabalpur: {
      Jabalpur: ["Jabalpur"],
      Sihora: ["Sihora"],
    },
  },

  Gujarat: {
    Ahmedabad: {
      Ahmedabad: ["Ahmedabad City"],
      Daskroi: ["Daskroi"],
    },

    Surat: {
      Surat: ["Chorasi"],
      Bardoli: ["Bardoli"],
    },

    Vadodara: {
      Vadodara: ["Vadodara"],
      Savli: ["Savli"],
    },
  },

  Punjab: {
    Amritsar: {
      Amritsar: ["Amritsar I", "Amritsar II"],
    },

    Ludhiana: {
      Ludhiana: ["Ludhiana East", "Ludhiana West"],
    },

    Jalandhar: {
      Jalandhar: ["Jalandhar I", "Jalandhar II"],
    },
  },

  Haryana: {
    Gurugram: {
      Gurugram: ["Gurugram"],
      Sohna: ["Sohna"],
    },

    Faridabad: {
      Faridabad: ["Faridabad"],
      Ballabgarh: ["Ballabgarh"],
    },

    Hisar: {
      Hisar: ["Hisar"],
      Hansi: ["Hansi"],
    },
  },

  Kerala: {
    Ernakulam: {
      Kochi: ["Kochi"],
      Aluva: ["Aluva"],
    },

    Thiruvananthapuram: {
      Thiruvananthapuram: ["Thiruvananthapuram"],
      Neyyattinkara: ["Neyyattinkara"],
    },

    Kozhikode: {
      Kozhikode: ["Kozhikode"],
      Vadakara: ["Vadakara"],
    },
  },

  TamilNadu: {
    Chennai: {
      Chennai: ["Chennai"],
    },

    Coimbatore: {
      Coimbatore: ["Coimbatore North", "Coimbatore South"],
    },

    Madurai: {
      Madurai: ["Madurai North", "Madurai South"],
    },
  },

  Telangana: {
    Hyderabad: {
      Hyderabad: ["Hyderabad"],
    },

    Rangareddy: {
      Rajendranagar: ["Rajendranagar"],
      Chevella: ["Chevella"],
    },

    Warangal: {
      Warangal: ["Warangal"],
    },
  },

  AndhraPradesh: {
    Krishna: {
      Vijayawada: ["Vijayawada"],
      Machilipatnam: ["Machilipatnam"],
    },

    Guntur: {
      Guntur: ["Guntur"],
      Tenali: ["Tenali"],
    },

    Visakhapatnam: {
      Visakhapatnam: ["Visakhapatnam"],
      Bheemunipatnam: ["Bheemunipatnam"],
    },
  },

  Chhattisgarh: {
    Raipur: {
      Raipur: ["Raipur"],
      Arang: ["Arang"],
    },

    Bilaspur: {
      Bilaspur: ["Bilaspur"],
      Kota: ["Kota"],
    },
  },
};

/* ========================================================= */
/* INPUT FIELD                                               */
/* ========================================================= */

function InputField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  error = false,
  disabled = false,
  children,
}) {
  return (
    <div className="w-full">
      <label className="block text-sm md:text-base text-[#1E293B] mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <div className="relative">
        <input
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full h-12 px-4 rounded-lg border bg-white outline-none
            text-[#334155] placeholder:text-[#B8B1B1]
            transition
            ${
              error
                ? "border-red-500"
                : "border-[#D6CECE] focus:border-[#13622E]"
            }
            ${
              disabled
                ? "bg-gray-100 cursor-not-allowed text-gray-500"
                : ""
            }
          `}
        />

        {children}
      </div>
    </div>
  );
}

/* ========================================================= */
/* SELECT FIELD                                              */
/* ========================================================= */

function SelectField({
  label,
  name,
  value,
  onChange,
  options = [],
  placeholder,
  required = false,
  error = false,
  disabled = false,
}) {
  return (
    <div className="w-full">
      <label className="block text-sm md:text-base text-[#1E293B] mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`w-full h-12 px-4 pr-10 rounded-lg border bg-white outline-none appearance-none text-[#334155]
            ${
              error
                ? "border-red-500"
                : "border-[#D6CECE] focus:border-[#13622E]"
            }
            ${
              disabled
                ? "bg-gray-100 cursor-not-allowed text-gray-500"
                : ""
            }
          `}
        >
          <option value="">{placeholder}</option>

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748B] pointer-events-none" />
      </div>

      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
}

/* ========================================================= */
/* REGISTER FORM                                             */
/* ========================================================= */

function RegisterForm() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [role, setRole] = useState("farmer");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [errors, setErrors] = useState({});

  /* OTP */

  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpType, setOtpType] = useState("");
  const [otp, setOtp] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const [otpTimer, setOtpTimer] = useState(29);

  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] =
    useState(false);

  /* Verification */

  const [contactVerified, setContactVerified] =
    useState(false);

  const [aadharVerified, setAadharVerified] =
    useState(false);

  const [bankVerified, setBankVerified] =
    useState(false);

  const [isVerifyingBank, setIsVerifyingBank] =
    useState(false);

  /* Success */

  const [showSuccess, setShowSuccess] = useState(false);

  /* ======================================================= */
  /* FORM DATA                                               */
  /* ======================================================= */

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    guardianName: "",
    dateOfBirth: "",
    gender: "",

    password: "",
    confirmPassword: "",

    address1: "",
    address2: "",
    pincode: "",

    state: "",
    district: "",
    city: "",
    tehsil: "",

    mobile: "",
    email: "",

    accountNumber: "",
    reAccountNumber: "",
    ifsc: "",
    bankConsent: false,

    agriStackId: "",
    aadhar: "",
  });

  /* ======================================================= */
  /* DERIVED LOCATION DATA                                   */
  /* ======================================================= */

  const stateOptions = Object.keys(locationData).map(
    (state) => ({
      value: state,
      label: state
        .replace("UttarPradesh", "Uttar Pradesh")
        .replace("MadhyaPradesh", "Madhya Pradesh")
        .replace("TamilNadu", "Tamil Nadu")
        .replace("AndhraPradesh", "Andhra Pradesh"),
    })
  );

  const districtOptions = formData.state
    ? Object.keys(locationData[formData.state] || {}).map(
        (district) => ({
          value: district,
          label: district,
        })
      )
    : [];

  const cityOptions =
    formData.state && formData.district
      ? Object.keys(
          locationData[formData.state]?.[formData.district] || {}
        ).map((city) => ({
          value: city,
          label: city,
        }))
      : [];

  const tehsilOptions =
    formData.state &&
    formData.district &&
    formData.city
      ? (
          locationData[formData.state]?.[
            formData.district
          ]?.[formData.city] || []
        ).map((tehsil) => ({
          value: tehsil,
          label: tehsil,
        }))
      : [];

  /* ======================================================= */
  /* OTP TIMER                                               */
  /* ======================================================= */

  useEffect(() => {
    if (!showOtpModal || otpTimer <= 0) return;

    const timer = setInterval(() => {
      setOtpTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [showOtpModal, otpTimer]);

  /* ======================================================= */
  /* HANDLE INPUT CHANGE                                     */
  /* ======================================================= */

  const handleChange = (e) => {
    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    let newValue =
      type === "checkbox" ? checked : value;

    /* Aadhaar */

    if (name === "aadhar") {
      newValue = value
        .replace(/\D/g, "")
        .slice(0, 12);

      setAadharVerified(false);
    }

    /* Mobile */

    if (name === "mobile") {
      newValue = value
        .replace(/\D/g, "")
        .slice(0, 10);

      setContactVerified(false);
    }

    /* Pincode */

    if (name === "pincode") {
      newValue = value
        .replace(/\D/g, "")
        .slice(0, 6);
    }

    /* Account number */

    if (
      name === "accountNumber" ||
      name === "reAccountNumber"
    ) {
      newValue = value.replace(/\D/g, "");

      setBankVerified(false);
    }

    /* IFSC */

    if (name === "ifsc") {
      newValue = value
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, "")
        .slice(0, 11);

      setBankVerified(false);
    }

    /* =================================================== */
    /* STATE CHANGE                                        */
    /* =================================================== */

    if (name === "state") {
      setFormData((prev) => ({
        ...prev,
        state: newValue,
        district: "",
        city: "",
        tehsil: "",
      }));

      setErrors((prev) => ({
        ...prev,
        state: "",
        district: "",
        city: "",
        tehsil: "",
      }));

      return;
    }

    /* =================================================== */
    /* DISTRICT CHANGE                                     */
    /* =================================================== */

    if (name === "district") {
      setFormData((prev) => ({
        ...prev,
        district: newValue,
        city: "",
        tehsil: "",
      }));

      setErrors((prev) => ({
        ...prev,
        district: "",
        city: "",
        tehsil: "",
      }));

      return;
    }

    /* =================================================== */
    /* CITY CHANGE                                         */
    /* =================================================== */

    if (name === "city") {
      setFormData((prev) => ({
        ...prev,
        city: newValue,
        tehsil: "",
      }));

      setErrors((prev) => ({
        ...prev,
        city: "",
        tehsil: "",
      }));

      return;
    }

    /* =================================================== */
    /* NORMAL INPUT                                        */
    /* =================================================== */

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  /* ======================================================= */
  /* PASSWORD VALIDATION                                    */
  /* ======================================================= */

  const isValidPassword = (password) => {
    return /^[A-Za-z0-9]{11,}$/.test(password);
  };

  /* ======================================================= */
  /* STEP VALIDATION                                        */
  /* ======================================================= */

  const validateStep = () => {
    const newErrors = {};

    /* --------------------------------------------------- */
    /* STEP 1                                             */
    /* --------------------------------------------------- */

    if (step === 1) {
      if (!role) {
        newErrors.role =
          "Please select an option";
      }

      if (!formData.firstName.trim()) {
        newErrors.firstName =
          "First name is required";
      }

      if (!formData.lastName.trim()) {
        newErrors.lastName =
          "Last name is required";
      }

      if (!formData.guardianName.trim()) {
        newErrors.guardianName =
          "Guardian name is required";
      }

      if (!formData.dateOfBirth) {
        newErrors.dateOfBirth =
          "Date of birth is required";
      }

      if (!formData.gender) {
        newErrors.gender =
          "Please select gender";
      }

      if (!formData.password) {
        newErrors.password =
          "Password is required";
      } else if (
        !isValidPassword(formData.password)
      ) {
        newErrors.password =
          "Password must contain at least 11 letters/numbers only";
      }

      if (!formData.confirmPassword) {
        newErrors.confirmPassword =
          "Please confirm your password";
      } else if (
        formData.password !==
        formData.confirmPassword
      ) {
        newErrors.confirmPassword =
          "Passwords do not match";
      }

      if (!formData.address1.trim()) {
        newErrors.address1 =
          "Address is required";
      }

      if (!formData.pincode.trim()) {
        newErrors.pincode =
          "Pincode is required";
      } else if (
        formData.pincode.length !== 6
      ) {
        newErrors.pincode =
          "Pincode must contain 6 digits";
      }

      if (!formData.state) {
        newErrors.state =
          "State is required";
      }

      if (!formData.district) {
        newErrors.district =
          "District is required";
      }

      if (!formData.city) {
        newErrors.city =
          "City / Village is required";
      }

      if (!formData.tehsil) {
        newErrors.tehsil =
          "Tehsil is required";
      }
    }

    /* --------------------------------------------------- */
    /* STEP 2                                             */
    /* --------------------------------------------------- */

    if (step === 2) {
      if (!formData.mobile.trim()) {
        newErrors.mobile =
          "Mobile number is required";
      } else if (
        formData.mobile.length !== 10
      ) {
        newErrors.mobile =
          "Mobile number must contain 10 digits";
      }

      if (!formData.email.trim()) {
        newErrors.email =
          "Email is required";
      } else if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
          formData.email
        )
      ) {
        newErrors.email =
          "Enter a valid email address";
      }

      if (!contactVerified) {
        newErrors.contact =
          "Please verify your mobile number before continuing";
      }
    }

    /* --------------------------------------------------- */
    /* STEP 3                                             */
    /* --------------------------------------------------- */

    if (step === 3) {
      if (!formData.accountNumber.trim()) {
        newErrors.accountNumber =
          "Account number is required";
      }

      if (!formData.reAccountNumber.trim()) {
        newErrors.reAccountNumber =
          "Please re-enter your account number";
      }

      if (
        formData.accountNumber &&
        formData.reAccountNumber &&
        formData.accountNumber !==
          formData.reAccountNumber
      ) {
        newErrors.reAccountNumber =
          "Account numbers do not match";
      }

      if (!formData.ifsc.trim()) {
        newErrors.ifsc =
          "IFSC code is required";
      }

      if (
        formData.ifsc &&
        !/^[A-Z]{4}0[A-Z0-9]{6}$/.test(
          formData.ifsc
        )
      ) {
        newErrors.ifsc =
          "Enter a valid IFSC code";
      }

      if (!formData.bankConsent) {
        newErrors.bankConsent =
          "Please provide authorization";
      }
    }

    /* --------------------------------------------------- */
    /* STEP 4                                             */
    /* --------------------------------------------------- */

    if (step === 4) {
      if (!formData.aadhar.trim()) {
        newErrors.aadhar =
          "Aadhaar number is required";
      } else if (
        formData.aadhar.length !== 12
      ) {
        newErrors.aadhar =
          "Aadhaar number must contain exactly 12 digits";
      }

      if (!aadharVerified) {
        newErrors.aadharVerification =
          "Please verify your Aadhaar number";
      }
    }

    setErrors(newErrors);

    return (
      Object.keys(newErrors).length === 0
    );
  };

  /* ======================================================= */
  /* NEXT                                                   */
  /* ======================================================= */

  const handleNext = async () => {
    const valid = validateStep();

    if (!valid) return;

    /* STEP 3 → STEP 4 */

    if (step === 3) {
      setIsVerifyingBank(true);

      // Temporary local verification
      await new Promise((resolve) =>
        setTimeout(resolve, 1800)
      );

      setBankVerified(true);
      setIsVerifyingBank(false);

      setStep(4);

      return;
    }

    /* STEP 1 → STEP 2 */
    /* STEP 2 → STEP 3 */

    if (step < 4) {
      setStep((prev) => prev + 1);
      return;
    }

    /* STEP 4 → SUCCESS */

    /* STEP 4 → REGISTER WITH BACKEND */

try {
  const response = await fetch(
    "http://10.164.132.46:8000/api/auth/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        role: role,

        first_name: formData.firstName,
        middle_name: formData.middleName,
        last_name: formData.lastName,

        guardian_name: formData.guardianName,
        date_of_birth: formData.dateOfBirth,
        gender: formData.gender,

        password: formData.password,
        confirm_password: formData.confirmPassword,

        address1: formData.address1,
        address2: formData.address2,

        pincode: formData.pincode,
        state: formData.state,
        district: formData.district,
        tehsil: formData.tehsil,
        city: formData.city,

        mobile: formData.mobile,
        email: formData.email,

        account_number: formData.accountNumber,
        re_account_number: formData.reAccountNumber,
        ifsc: formData.ifsc,
        bank_consent: formData.bankConsent,

        agri_stack_id: formData.agriStackId,
        aadhaar: formData.aadhar,

        mobile_verified: contactVerified,
        aadhaar_verified: aadharVerified,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || "Registration failed");
  }

  console.log("Registration successful:", data);

  setShowSuccess(true);
} 
catch (error) {
  console.error("Registration error:", error);

  alert(error.message || "Registration failed");
}
  };

  /* ======================================================= */
  /* BACK                                                   */
  /* ======================================================= */

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  /* ======================================================= */
  /* OPEN OTP MODAL                                         */
  /* ======================================================= */

  const openOtpModal = async (type) => {
    if (type === "contact") {
      if (!formData.mobile) {
        setErrors((prev) => ({
          ...prev,
          mobile:
            "Enter your mobile number first",
        }));

        return;
      }

      if (formData.mobile.length !== 10) {
        setErrors((prev) => ({
          ...prev,
          mobile:
            "Mobile number must contain 10 digits",
        }));

        return;
      }

      if (contactVerified) return;
    }

    if (type === "aadhar") {
      if (!formData.aadhar) {
        setErrors((prev) => ({
          ...prev,
          aadhar:
            "Enter Aadhaar number first",
        }));

        return;
      }

      if (formData.aadhar.length !== 12) {
        setErrors((prev) => ({
          ...prev,
          aadhar:
            "Aadhaar number must contain exactly 12 digits",
        }));

        return;
      }

      if (aadharVerified) return;
    }

    setIsSendingOtp(true);

    /*
      BACKEND INTEGRATION LATER

      Sagnik's API will be called here.

      For now this is only a demo.
    */

    await new Promise((resolve) =>
      setTimeout(resolve, 1200)
    );

    setIsSendingOtp(false);

    setOtpType(type);
    setOtp([
      "",
      "",
      "",
      "",
      "",
      "",
    ]);
    setOtpTimer(29);
    setShowOtpModal(true);
  };

  /* ======================================================= */
  /* OTP INPUT                                              */
  /* ======================================================= */

  const handleOtpChange = (
    index,
    value
  ) => {
    const digit = value
      .replace(/\D/g, "")
      .slice(-1);

    const updatedOtp = [...otp];

    updatedOtp[index] = digit;

    setOtp(updatedOtp);

    if (digit && index < 5) {
      const nextInput =
        document.getElementById(
          `otp-${index + 1}`
        );

      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  /* ======================================================= */
  /* VERIFY OTP                                             */
  /* ======================================================= */

  const verifyOtp = async () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      return;
    }

    setIsVerifyingOtp(true);

    /*
      BACKEND INTEGRATION LATER

      Sagnik's OTP verification API
      will be called here.
    */

    await new Promise((resolve) =>
      setTimeout(resolve, 1200)
    );

    if (otpType === "contact") {
      setContactVerified(true);
    }

    if (otpType === "aadhar") {
      setAadharVerified(true);
    }

    setIsVerifyingOtp(false);
    setShowOtpModal(false);
  };

  /* ======================================================= */
  /* RESEND OTP                                             */
  /* ======================================================= */

  const resendOtp = async () => {
    if (
      otpTimer > 0 ||
      isSendingOtp
    ) {
      return;
    }

    setIsSendingOtp(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    setOtp([
      "",
      "",
      "",
      "",
      "",
      "",
    ]);

    setOtpTimer(29);

    setIsSendingOtp(false);
  };

  /* ======================================================= */
  /* PROGRESS                                               */
  /* ======================================================= */

  const progressWidth =
    `${((step - 1) / 3) * 100}%`;

  /* ======================================================= */
  /* ROLE DATA                                              */
  /* ======================================================= */

  const roles = [
    {
      id: "farmer",
      title: "Farmer",
      description:
        "Grow and sell your produce",
      icon: Leaf,
    },

    {
      id: "fpo",
      title: "FPO",
      description:
        "Manage your farmer organization",
      icon: Users,
    },

    {
      id: "buyer",
      title: "Buyer",
      description:
        "Source quality agricultural products",
      icon: Building2,
    },

    {
      id: "admin",
      title: "Admin",
      description:
        "Manage the KisanSaathi platform",
      icon: ShieldCheck,
    },
  ];

  /* ======================================================= */
  /* RETURN                                                  */
  /* ======================================================= */

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0FDF4] via-white to-[#ECFDF5]">

      {/* ================================================= */}
      {/* HEADER                                            */}
      {/* ================================================= */}

      <header className="w-full bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-3 h-20 flex items-center justify-between">

          <div className="flex items-center">
            <img
              src={logo}
              alt="KisanSaathi"
              className="h-11 w-auto"
            />

            <h1 className="text-[#065F46] text-4xl font-bold">
              KisanSaathi
            </h1>
          </div>

          <button
            type="button"
            className="flex items-center gap-2 border border-[#D6CECE] rounded-lg px-4 py-2 text-sm text-[#334155]"
          >
            English
            <ChevronDown className="w-4 h-4" />
          </button>

        </div>
      </header>

      {/* ================================================= */}
      {/* MAIN                                               */}
      {/* ================================================= */}

      <main className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">

        <div className="max-w-5xl mx-auto">

          {/* HEADING */}

          <div className="text-center mb-8">

            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0F172A]">
              Register
            </h1>

            <p className="text-[#64748B] mt-2">
              Create your KisanSaathi account
            </p>

          </div>

          {/* ================================================= */}
          {/* PROGRESS BAR                                      */}
          {/* ================================================= */}

          <div className="mb-8">

            <div className="relative flex justify-between items-center">

              <div className="absolute left-0 right-0 top-5 h-1 bg-[#E2E8F0] -z-0"></div>

              <div
                className="absolute left-0 top-5 h-1 bg-[#16A34A] transition-all duration-700 ease-in-out -z-0"
                style={{
                  width: progressWidth,
                }}
              ></div>

              {[1, 2, 3, 4].map(
                (number) => (
                  <div
                    key={number}
                    className="relative z-10 flex flex-col items-center"
                  >

                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                        step >= number
                          ? "bg-[#16A34A] text-white"
                          : "bg-white border-2 border-[#CBD5E1] text-[#94A3B8]"
                      }`}
                    >
                      {step > number ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        number
                      )}
                    </div>

                    <span className="text-xs md:text-sm text-[#64748B] mt-2">
                      {number === 1 &&
                        "Basic Info"}

                      {number === 2 &&
                        "Verification"}

                      {number === 3 &&
                        "Bank Details"}

                      {number === 4 &&
                        "Identity"}
                    </span>

                  </div>
                )
              )}

            </div>
          </div>

          {/* ================================================= */}
          {/* FORM CARD                                         */}
          {/* ================================================= */}

          <div className="bg-white rounded-2xl shadow-xl border border-[#E2E8F0] p-5 sm:p-8 md:p-10">

            {/* ================================================= */}
            {/* STEP 1                                            */}
            {/* ================================================= */}

            {step === 1 && (
              <div>

                <h2 className="text-2xl font-bold text-[#0F172A]">
                  Basic Information
                </h2>

                <p className="text-[#64748B] mt-1 mb-8">
                  Tell us a little about yourself
                </p>

                {/* ROLE */}

                <div className="mb-10">

                  <label className="block text-base md:text-lg text-[#1E293B] mb-4 font-medium">
                    I am{" "}
                    <span className="text-red-500">
                      *
                    </span>
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                    {roles.map((item) => {
                      const Icon = item.icon;

                      const selected =
                        role === item.id;

                      return (
                        <div
                          key={item.id}
                          onClick={() => {
                            setRole(item.id);

                            setErrors(
                              (prev) => ({
                                ...prev,
                                role: "",
                              })
                            );
                          }}
                          className={`relative cursor-pointer rounded-xl border-2 p-5 transition-all duration-200 ${
                            selected
                              ? "bg-[#F0FDF4] border-[#16A34A] shadow-md"
                              : "bg-white border-[#E2E8F0] hover:border-[#86EFAC]"
                          }`}
                        >

                          {selected && (
                            <span className="absolute -top-2 -left-2 bg-[#16A34A] text-white rounded-full w-6 h-6 flex items-center justify-center shadow-sm">
                              <Check className="w-4 h-4" />
                            </span>
                          )}

                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                              selected
                                ? "bg-[#DCFCE7] text-[#16A34A]"
                                : "bg-[#F1F5F9] text-[#64748B]"
                            }`}
                          >
                            <Icon className="w-6 h-6" />
                          </div>

                          <h3
                            className={`font-bold ${
                              selected
                                ? "text-[#166534]"
                                : "text-[#1E293B]"
                            }`}
                          >
                            {item.title}
                          </h3>

                          <p className="text-sm text-[#64748B] mt-1">
                            {item.description}
                          </p>

                        </div>
                      );
                    })}

                  </div>

                  {errors.role && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.role}
                    </p>
                  )}

                </div>

                {/* BASIC DETAILS */}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                  <InputField
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter first name"
                    required
                    error={!!errors.firstName}
                  />

                  <InputField
                    label="Middle Name"
                    name="middleName"
                    value={formData.middleName}
                    onChange={handleChange}
                    placeholder="Enter middle name"
                  />

                  <InputField
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter last name"
                    required
                    error={!!errors.lastName}
                  />

                  <InputField
                    label="Guardian Name"
                    name="guardianName"
                    value={formData.guardianName}
                    onChange={handleChange}
                    placeholder="Enter guardian name"
                    required
                    error={!!errors.guardianName}
                  />

                  <InputField
                    label="Date of Birth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    type="date"
                    required
                    error={!!errors.dateOfBirth}
                  />

                  <div>

                    <label className="block text-sm md:text-base text-[#1E293B] mb-2">
                      Gender
                      <span className="text-red-500 ml-1">
                        *
                      </span>
                    </label>

                    <div className="relative">

                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className={`w-full h-12 px-4 pr-10 rounded-lg border bg-white outline-none appearance-none ${
                          errors.gender
                            ? "border-red-500"
                            : "border-[#D6CECE] focus:border-[#13622E]"
                        }`}
                      >
                        <option value="">
                          Select gender
                        </option>

                        <option value="male">
                          Male
                        </option>

                        <option value="female">
                          Female
                        </option>

                        <option value="other">
                          Other
                        </option>
                      </select>

                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748B] pointer-events-none" />

                    </div>

                    {errors.gender && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.gender}
                      </p>
                    )}

                  </div>

                </div>

                {/* PASSWORD */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">

                  <div>

                    <label className="block text-sm md:text-base text-[#1E293B] mb-2">
                      Password
                      <span className="text-red-500 ml-1">
                        *
                      </span>
                    </label>

                    <div className="relative">

                      <input
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        type={
                          showPassword
                            ? "text"
                            : "password"
                        }
                        placeholder="Enter password"
                        className={`w-full h-12 px-4 pr-12 rounded-lg border outline-none ${
                          errors.password
                            ? "border-red-500"
                            : "border-[#D6CECE] focus:border-[#13622E]"
                        }`}
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowPassword(
                            (prev) => !prev
                          )
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748B]"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>

                    </div>

                    <p className="text-xs text-[#64748B] mt-2">
                      Must contain at least 11 characters using letters and numbers only.
                    </p>

                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.password}
                      </p>
                    )}

                  </div>

                  <div>

                    <label className="block text-sm md:text-base text-[#1E293B] mb-2">
                      Confirm Password
                      <span className="text-red-500 ml-1">
                        *
                      </span>
                    </label>

                    <div className="relative">

                      <input
                        name="confirmPassword"
                        value={
                          formData.confirmPassword
                        }
                        onChange={handleChange}
                        type={
                          showConfirmPassword
                            ? "text"
                            : "password"
                        }
                        placeholder="Confirm password"
                        className={`w-full h-12 px-4 pr-12 rounded-lg border outline-none ${
                          errors.confirmPassword
                            ? "border-red-500"
                            : "border-[#D6CECE] focus:border-[#13622E]"
                        }`}
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(
                            (prev) => !prev
                          )
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748B]"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>

                    </div>

                    {errors.confirmPassword && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.confirmPassword}
                      </p>
                    )}

                  </div>

                </div>

                {/* ADDRESS */}

                <div className="mt-10">

                  <h3 className="text-lg font-bold text-[#1E293B] mb-5">
                    Present Address
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <InputField
                      label="Address Line 1"
                      name="address1"
                      value={formData.address1}
                      onChange={handleChange}
                      placeholder="Enter address"
                      required
                      error={!!errors.address1}
                    />

                    <InputField
                      label="Address Line 2"
                      name="address2"
                      value={formData.address2}
                      onChange={handleChange}
                      placeholder="Apartment, landmark, etc."
                    />

                    <InputField
                      label="Pincode"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      placeholder="Enter pincode"
                      required
                      error={!!errors.pincode}
                    />

                    {/* STATE */}

                    <SelectField
                      label="State"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      options={stateOptions}
                      placeholder="Select state"
                      required
                      error={errors.state}
                    />

                    {/* DISTRICT */}

                    <SelectField
                      label="District"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      options={districtOptions}
                      placeholder={
                        !formData.state
                          ? "Select state first"
                          : "Select district"
                      }
                      required
                      disabled={!formData.state}
                      error={errors.district}
                    />

                    {/* CITY */}

                    <SelectField
                      label="City / Village"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      options={cityOptions}
                      placeholder={
                        !formData.district
                          ? "Select district first"
                          : "Select city / village"
                      }
                      required
                      disabled={!formData.district}
                      error={errors.city}
                    />

                    {/* TEHSIL */}

                    <SelectField
                      label="Tehsil"
                      name="tehsil"
                      value={formData.tehsil}
                      onChange={handleChange}
                      options={tehsilOptions}
                      placeholder={
                        !formData.city
                          ? "Select city first"
                          : "Select tehsil"
                      }
                      required
                      disabled={!formData.city}
                      error={errors.tehsil}
                    />

                  </div>

                </div>

              </div>
            )}

            {/* ================================================= */}
            {/* STEP 2                                            */}
            {/* ================================================= */}

            {step === 2 && (
              <div>

                <h2 className="text-2xl font-bold text-[#0F172A]">
                  Contact Verification
                </h2>

                <p className="text-[#64748B] mt-1 mb-8">
                  Verify your mobile number
                </p>

                {/* MOBILE */}

                <div className="mb-7">

                  <label className="block text-base md:text-lg text-[#1E293B] mb-3">
                    Mobile Number
                    <span className="text-red-500 ml-1">
                      *
                    </span>
                  </label>

                  <div className="flex flex-col sm:flex-row gap-3 max-w-xl">

                    <div className="relative flex-1">

                      <Smartphone className="absolute left-4 top-3.5 w-5 h-5 text-[#94A3B8]" />

                      <input
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        disabled={contactVerified}
                        placeholder="Enter mobile number"
                        inputMode="numeric"
                        maxLength={10}
                        className={`w-full h-12 pl-12 pr-4 rounded-lg border outline-none ${
                          errors.mobile
                            ? "border-red-500"
                            : "border-[#D6CECE] focus:border-[#13622E]"
                        } ${
                          contactVerified
                            ? "bg-gray-100 cursor-not-allowed"
                            : ""
                        }`}
                      />

                    </div>

                    <button
                      type="button"
                      disabled={
                        contactVerified ||
                        isSendingOtp
                      }
                      onClick={() =>
                        openOtpModal("contact")
                      }
                      className={`h-12 px-8 rounded-lg font-semibold text-white transition flex items-center justify-center gap-2 min-w-[120px] ${
                        contactVerified
                          ? "bg-[#16A34A] cursor-not-allowed"
                          : "bg-[#07845F] hover:bg-[#066F50]"
                      }`}
                    >

                      {isSendingOtp ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : contactVerified ? (
                        <>
                          <Check className="w-5 h-5" />
                          Verified
                        </>
                      ) : (
                        "Verify"
                      )}

                    </button>

                  </div>

                  {errors.mobile && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.mobile}
                    </p>
                  )}

                  {errors.contact && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.contact}
                    </p>
                  )}

                </div>

                {/* EMAIL */}

                <div className="mb-8">

                  <label className="block text-base md:text-lg text-[#1E293B] mb-3">
                    Email Address
                    <span className="text-red-500 ml-1">
                      *
                    </span>
                  </label>

                  <div className="w-full sm:w-[420px]">

                    <div className="relative">

                      <Mail className="absolute left-4 top-3.5 w-5 h-5 text-[#94A3B8]" />

                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email address"
                        className={`w-full h-12 pl-12 pr-4 rounded-lg border outline-none ${
                          errors.email
                            ? "border-red-500"
                            : "border-[#D6CECE] focus:border-[#13622E]"
                        }`}
                      />

                    </div>

                  </div>

                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email}
                    </p>
                  )}

                </div>

                {contactVerified && (
                  <div className="flex items-center gap-2 text-[#16A34A] bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg px-4 py-3 max-w-xl">

                    <BadgeCheck className="w-5 h-5" />

                    <span className="text-sm font-medium">
                      Mobile number successfully verified.
                    </span>

                  </div>
                )}

              </div>
            )}

            {/* ================================================= */}
            {/* STEP 3                                            */}
            {/* ================================================= */}

            {step === 3 && (
              <div>

                <h2 className="text-2xl font-bold text-[#0F172A]">
                  Bank Details
                </h2>

                <p className="text-[#64748B] mt-1 mb-8">
                  Add your bank account details for secure transactions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  <InputField
                    label="Account Number"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleChange}
                    placeholder="Enter account number"
                    required
                    error={!!errors.accountNumber}
                  />

                  <InputField
                    label="Re-enter Account Number"
                    name="reAccountNumber"
                    value={
                      formData.reAccountNumber
                    }
                    onChange={handleChange}
                    placeholder="Re-enter account number"
                    required
                    error={!!errors.reAccountNumber}
                  />

                  <InputField
                    label="IFSC Code"
                    name="ifsc"
                    value={formData.ifsc}
                    onChange={handleChange}
                    placeholder="Enter IFSC code"
                    required
                    error={!!errors.ifsc}
                  />

                </div>

                {/* CONSENT */}

                <div className="mt-7">

                  <label className="flex items-start gap-3 cursor-pointer">

                    <input
                      type="checkbox"
                      name="bankConsent"
                      checked={formData.bankConsent}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 accent-[#16A34A]"
                    />

                    <span className="text-sm text-[#475569]">
                      I authorize KisanSaathi to verify and use my bank account details for the purposes related to this platform.
                    </span>

                  </label>

                  {errors.bankConsent && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.bankConsent}
                    </p>
                  )}

                </div>

                {bankVerified && (
                  <div className="mt-5 flex items-center gap-2 text-[#16A34A] bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg px-4 py-3">

                    <BadgeCheck className="w-5 h-5" />

                    <span className="text-sm font-medium">
                      Bank details successfully verified.
                    </span>

                  </div>
                )}

              </div>
            )}

            {/* ================================================= */}
            {/* STEP 4                                            */}
            {/* ================================================= */}

            {step === 4 && (
              <div>

                <h2 className="text-2xl font-bold text-[#0F172A]">
                  Identity Verification
                </h2>

                <p className="text-[#64748B] mt-1 mb-8">
                  Complete your identity verification.
                </p>

                {/* AGRISTACK */}

                <div className="mb-8">

                  <InputField
                    label="AgriStack Farmer ID / Kisan Pehchaan Patra"
                    name="agriStackId"
                    value={formData.agriStackId}
                    onChange={handleChange}
                    placeholder="Enter AgriStack Farmer ID"
                  />

                </div>

                {/* AADHAAR */}

                <div>

                  <label className="block text-base md:text-lg text-[#1E293B] mb-3">
                    Aadhaar Number
                    <span className="text-red-500 ml-1">
                      *
                    </span>
                  </label>

                  <div className="flex flex-col sm:flex-row gap-3 max-w-xl">

                    <input
                      name="aadhar"
                      value={formData.aadhar}
                      onChange={handleChange}
                      disabled={aadharVerified}
                      placeholder="Enter 12-digit Aadhaar number"
                      inputMode="numeric"
                      maxLength={12}
                      className={`w-full h-12 px-4 rounded-lg border outline-none ${
                        errors.aadhar
                          ? "border-red-500"
                          : "border-[#D6CECE] focus:border-[#13622E]"
                      } ${
                        aadharVerified
                          ? "bg-gray-100 cursor-not-allowed"
                          : ""
                      }`}
                    />

                    <button
                      type="button"
                      disabled={
                        aadharVerified ||
                        isSendingOtp
                      }
                      onClick={() =>
                        openOtpModal("aadhar")
                      }
                      className={`h-12 px-8 rounded-lg font-semibold text-white transition flex items-center justify-center gap-2 min-w-[120px] ${
                        aadharVerified
                          ? "bg-[#16A34A] cursor-not-allowed"
                          : "bg-[#07845F] hover:bg-[#066F50]"
                      }`}
                    >

                      {isSendingOtp ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : aadharVerified ? (
                        <>
                          <Check className="w-5 h-5" />
                          Verified
                        </>
                      ) : (
                        "Send OTP"
                      )}

                    </button>

                  </div>

                  {errors.aadhar && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.aadhar}
                    </p>
                  )}

                  {errors.aadharVerification && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.aadharVerification}
                    </p>
                  )}

                </div>

                {aadharVerified && (
                  <div className="mt-5 flex items-center gap-2 text-[#16A34A] bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg px-4 py-3">

                    <BadgeCheck className="w-5 h-5" />

                    <span className="text-sm font-medium">
                      Aadhaar number successfully verified.
                    </span>

                  </div>
                )}

              </div>
            )}

            {/* ================================================= */}
            {/* NAVIGATION                                         */}
            {/* ================================================= */}

            <div className="flex flex-col-reverse sm:flex-row justify-between gap-4 mt-10 pt-7 border-t border-[#E2E8F0]">

              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="h-12 px-7 rounded-lg border border-[#CBD5E1] text-[#334155] font-semibold flex items-center justify-center gap-2 hover:bg-[#F8FAFC] transition"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back
                </button>
              ) : (
                <div></div>
              )}

              <button
                type="button"
                onClick={handleNext}
                disabled={isVerifyingBank}
                className="h-12 px-8 rounded-lg bg-[#13622E] hover:bg-[#14532D] text-white font-semibold flex items-center justify-center gap-2 transition sm:min-w-[150px] disabled:opacity-70 disabled:cursor-not-allowed"
              >

                {isVerifyingBank ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  <>
                    {step === 4
                      ? "Register"
                      : "Next"}

                    <ArrowRight className="w-5 h-5" />
                  </>
                )}

              </button>

            </div>

          </div>

          {/* SECURITY FOOTER */}

          <div className="flex items-center justify-center gap-2 mt-8 text-[#64748B]">

            <ShieldCheck className="w-5 h-5 text-[#059669]" />

            <span className="text-sm">
              Your data is protected with KisanSaathi
            </span>

          </div>

        </div>

      </main>

      {/* ===================================================== */}
      {/* OTP MODAL                                             */}
      {/* ===================================================== */}

      {showOtpModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">

          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8">

            <button
              type="button"
              onClick={() =>
                setShowOtpModal(false)
              }
              className="absolute right-5 top-5 text-[#64748B] hover:text-[#0F172A]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center">

              <div className="mx-auto w-14 h-14 rounded-full bg-[#DCFCE7] flex items-center justify-center">

                <Smartphone className="w-7 h-7 text-[#16A34A]" />

              </div>

              <h2 className="text-2xl font-bold text-[#0F172A] mt-5">
                Verify OTP
              </h2>

              <p className="text-[#64748B] text-sm mt-2">
                Enter the 6-digit OTP sent for verification.
              </p>

            </div>

            {/* OTP INPUTS */}

            <div className="flex justify-center gap-2 sm:gap-3 mt-7">

              {otp.map(
                (digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    value={digit}
                    onChange={(e) =>
                      handleOtpChange(
                        index,
                        e.target.value
                      )
                    }
                    maxLength={1}
                    inputMode="numeric"
                    className="w-10 h-12 sm:w-12 sm:h-14 text-center text-xl font-bold border border-[#CBD5E1] rounded-lg outline-none focus:border-[#16A34A] focus:ring-2 focus:ring-[#DCFCE7]"
                  />
                )
              )}

            </div>

            {/* VERIFY */}

            <button
              type="button"
              disabled={
                otp.join("").length !== 6 ||
                isVerifyingOtp
              }
              onClick={verifyOtp}
              className="w-full h-12 mt-7 rounded-lg bg-[#13622E] hover:bg-[#14532D] disabled:bg-[#94A3B8] text-white font-semibold flex items-center justify-center gap-2 transition"
            >

              {isVerifyingOtp ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Verifying...
                </>
              ) : (
                "Verify OTP"
              )}

            </button>

            {/* RESEND */}

            <div className="text-center mt-5">

              {otpTimer > 0 ? (
                <p className="text-sm text-[#64748B]">
                  Resend OTP in{" "}
                  <span className="font-semibold text-[#13622E]">
                    {otpTimer}s
                  </span>
                </p>
              ) : (
                <button
                  type="button"
                  onClick={resendOtp}
                  disabled={isSendingOtp}
                  className="text-sm font-semibold text-[#13622E] hover:underline disabled:text-[#94A3B8]"
                >
                  {isSendingOtp
                    ? "Sending..."
                    : "Resend OTP"}
                </button>
              )}

            </div>

          </div>

        </div>
      )}

      {/* ===================================================== */}
      {/* SUCCESS MODAL                                         */}
      {/* ===================================================== */}

      {showSuccess && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">

          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 text-center">

            <div className="mx-auto w-16 h-16 rounded-full bg-[#DCFCE7] flex items-center justify-center">

              <Check className="w-8 h-8 text-[#16A34A]" />

            </div>

            <h2 className="text-2xl font-bold text-[#0F172A] mt-5">
              Registration Successful
            </h2>

            <p className="text-[#64748B] mt-2">
              Your KisanSaathi account has been created successfully.
            </p>

            <button
              type="button"
              onClick={() =>
                navigate("/login")
              }
              className="w-full h-12 mt-7 rounded-lg bg-[#13622E] hover:bg-[#14532D] text-white font-semibold transition"
            >
              Go to Login
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default RegisterForm;