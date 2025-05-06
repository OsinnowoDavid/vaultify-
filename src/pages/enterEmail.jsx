import React, { useState } from "react";
import vau from "../assets/images/vau.png";
import { useShopContext } from '../context.jsx';

function EnterEmail() {
  const { backendUrl } = useShopContext()
  const [email,setEmail] = useState("")
  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
      const response = await fetch(`${backendUrl}/api/admin/enterEmail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (data.success) {
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      console.error("Error:", error);
    }


  }
  return (
    <div className="mt-10 justify-self-center mx-auto">
      <h1 className="justify-self-center justify-centers font-bold text-3xl font-Montserrat">
        Vault<span className="text-cyan-700">ify</span> Admin Dashboard{" "}
      </h1>
      <div>
        <img src={vau} className="mx-auto mb-5" />
      </div>
      <form onSubmit={handleSubmit}>

      <div>
        <label> Email Address</label>
        <p>
        <input
      type="email"
      id="adminEmail"
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
      trim
    />
        </p>
      </div>
      </form>
      
  <button
    type="submit"
    className="w-full bg-cyan-700 text-white py-2 rounded-md hover:bg-sky-700 transition duration-300 mt-5"
  >
    Submit
  </button>
    </div>
  );
}

export default EnterEmail;
