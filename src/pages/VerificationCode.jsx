import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import vau from "../assets/images/vau.png";
import { Eye, EyeOff } from "lucide-react";
import { useShopContext } from "../context";
import { toast } from "react-toastify";
import axios from "axios";

function VerificationInput({ onComplete }) {
  const inputRefs = useRef([]);
  const [OTP, setCode] = useState(new Array(6).fill(""));
  const [adminEmail, setEmail] = useState("");
  const [newPassword, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { backendUrl } = useShopContext();
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^[0-9]$/.test(value)) return;

    const newCode = [...OTP];
    newCode[index] = value;
    setCode(newCode);

    if (index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }

    if (newCode.every((digit) => digit !== "") && onComplete) {
      onComplete(newCode.join(""));
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      const newCode = [...OTP];

      if (OTP[index] !== "") {
        newCode[index] = "";
        setCode(newCode);
      } else if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(`${backendUrl}/api/admin/resetPassword`, {
        otp: OTP.join(""),
        email: adminEmail,
        password: newPassword
      });

      if (data.success) {
        toast.success("Password reset successfully");
        navigate("/");
      } else {
        toast.error( "Failed to reset password, Check the correct Email and OTP");
      }
    } catch (error) {
      toast.error( "Something went wrong");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-10 justify-self-center mx-auto">
      <h1 className="font-bold text-3xl font-Montserrat text-center">
        Vault<span className="text-cyan-700">ify</span> Admin Dashboard
      </h1>

      <div>
        <img src={vau} className="mx-auto mb-5" alt="Vaultify Logo" />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex gap-3 justify-center mt-4">
          {OTP.map((digit, index) => (
            <input
              key={index}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
              className="w-12 h-12 text-xl text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>

        <div className="mt-5">
          <label htmlFor="adminEmail">Email</label>
          <input
            type="email"
            id="adminEmail"
            placeholder="Enter your email"
            value={adminEmail}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mt-5">
          <label htmlFor="newPassword">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="newPassword"
              placeholder="Enter your password"
              value={newPassword}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white py-2 rounded-md transition duration-300 mt-5 ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-cyan-700 hover:bg-sky-500"
          }`}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default VerificationInput;
