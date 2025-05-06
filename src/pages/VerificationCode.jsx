import React, { useRef, useState } from "react";
import vau from "../assets/images/vau.png";
import { Eye, EyeOff } from "lucide-react";
import { useShopContext } from "../context";
import {toast} from "react-toastify"; // <-- import toast

function VerificationInput({ onComplete }) {
  const inputRefs = useRef([]);
  const [code, setCode] = useState(new Array(6).fill(""));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { backendUrl } = useShopContext();

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^[0-9]$/.test(value)) return;

    const newCode = [...code];
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
      const newCode = [...code];

      if (code[index] !== "") {
        newCode[index] = "";
        setCode(newCode);
      } else if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backendUrl}/api/admin/sendRestOtp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (data.success) {
        toast.success("Email sent successfully!");
      } else {
        toast.error("Failed to send email.");
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.error("Error:", error);
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
        {/* OTP Inputs */}
        <div className="flex gap-3 justify-center mt-4">
          {code.map((digit, index) => (
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

        {/* Email Input */}
        <div className="mt-5">
          <label htmlFor="adminEmail">Email</label>
          <input
            type="email"
            id="adminEmail"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Password Input with Show/Hide */}
        <div className="mt-5">
          <label htmlFor="newPassword">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="newPassword"
              placeholder="Enter your password"
              value={password}
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
          className="w-full bg-cyan-700 text-white py-2 rounded-md hover:bg-sky-500 transition duration-300 mt-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default VerificationInput;
