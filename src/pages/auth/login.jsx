import React, { useState } from "react";
import Logo from "@assets/logo-white.png";
import BImage from "@assets/login.png";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Login() {
  const [isTypePass, setIsTypePass] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // form submitda sahifa yangilanmasin

    console.log("Email:", email);
    console.log("Password:", password);

    // Shu yerda API chaqirishing yoki login logic bo'lishi mumkin
  };

  return (
    <div className="bg-[#f4f9fd] min-h-screen flex items-center justify-center px-4 py-6">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl rounded-3xl overflow-hidden bg-white shadow-lg">
        {/* Left Section */}
        <div className="hidden lg:flex flex-col flex-1 justify-between bg-[#3F8CFF] text-white lg:w-1/2 px-6 py-8 xl:px-12 xl:py-10">
          <div className="flex items-center gap-6">
            <img src={Logo} alt="Logo" className="w-10 h-10 object-contain" />
            <p className="text-2xl xl:text-3xl font-bold">Woorkroom</p>
          </div>
          <p className="text-2xl xl:text-4xl font-bold leading-snug my-8 xl:mt-24">
            Your place to work. <br />
            Plan. Create. Control.
          </p>
          <img
            className="mt-auto max-w-[400px] mx-auto"
            src={BImage}
            alt="Illustration"
          />
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 px-6 py-8 sm:px-8 xl:px-12 flex items-center justify-center">
          <div className="w-full max-w-md">
            <h2 className="text-center text-gray-800 text-2xl font-bold mb-8">
              Sign In to Woorkroom
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  className="block text-gray-600 text-sm font-semibold mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="youremail@gmail.com"
                  className="w-full border border-gray-300 focus:border-blue-500 focus:ring-blue-500 outline-none px-4 py-3 rounded-lg text-sm text-gray-800 placeholder:text-[#7D8592]"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-600 text-sm font-semibold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={isTypePass ? "password" : "text"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={isTypePass ? "••••••••" : "password"}
                    className="w-full border border-gray-300 focus:border-blue-500 focus:ring-blue-500 outline-none px-4 py-3 rounded-lg text-sm text-gray-800 placeholder:text-[#7D8592]"
                  />
                  <button
                    onClick={() => setIsTypePass(!isTypePass)}
                    type="button"
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500"
                    aria-label="Toggle password visibility"
                  >
                    {isTypePass ? <Eye size={20} /> : <EyeOff size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between mb-8">
                <label
                  htmlFor="remember"
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <input id="remember" type="checkbox" className="w-4 h-4" />
                  Remember me
                </label>
                <NavLink
                  to="#"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Forgot Password?
                </NavLink>
              </div>

              <button
                type="submit"
                className="w-full bg-[#3F8CFF] hover:bg-blue-600 text-white font-semibold py-3 rounded-lg flex justify-center items-center gap-2 transition"
              >
                <span>Sign In</span>
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
