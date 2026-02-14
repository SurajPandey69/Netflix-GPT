import React, { useState } from "react";
import Header from "./Header";
import logo from "../assets/Netflix_Bg.jpg";

const Login = () => {
  const [isSignup, setisSignup] = useState(true);
  // true = signup hai new account banao

  const togglesignup = () => {
    setisSignup(!isSignup);
  };

  return (
    //Login Container

    <div className="relative h-screen w-full overflow-hidden">
      {/* Animated Background */}
      <img
        src={logo}
        alt="background"
        className="absolute h-full w-full object-cover scale-110 animate-[zoom_20s_linear_infinite]"
      />

      {/* Header */}
      <Header />

      {/* Login Formed Handle */}

      <div className="relative flex justify-center items-center h-full px-4">
        <form
          className="
 bg-black/50 backdrop-blur-lg
 border border-gray-700
 p-12 rounded-xl
 w-full max-w-md
 text-white
 shadow-2xl
 bg-opacity-80
 "
        >
          <h1 className="text-3xl font-bold mb-8">
            {isSignup ? "Sign in" : "Sign Up"}
          </h1>

          {/* Login up */}

          {/* The logical AND operator (&&) is used in React for conditional rendering. If the left side condition is true, the right side JSX element is rendered. If false, nothing is rendered. 
Why We Wrapped in () ? Cleaner JSX formatting ke liye:

*/}

          {!isSignup && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 mb-4 bg-gray-800/70 rounded-2xl
focus:outline-none focus:ring-2 focus:ring-red-600 transition"
            />
          )}

          {!isSignup && (
            <div
              className="flex bg-gray-800/70 rounded-2xl mb-4 
  focus-within:ring-2 focus-within:ring-red-600 transition"
            >
              {/* Country Selector */}
              <select
                className="bg-gray-800 text-white px-3 rounded-l-2xl 
      outline-none border-r border-gray-600"
              >
                <option value="+91">🇮🇳 +91</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
              </select>

              {/* Phone Input */}
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full p-3 bg-transparent outline-none text-white"
              />
            </div>
          )}

          {/* this is for email input */}
          <input
            type="text"
            placeholder="Enter Email Address"
            className="w-full p-3 mb-4 bg-gray-800/70 rounded-2xl
focus:outline-none focus:ring-2 focus:ring-red-600 transition"
          />

          {/* this is for password input */}

          <input
            type="password"
            placeholder="Enter Password"
            className="w-full p-3 mb-4 bg-gray-800/70 rounded-2xl
focus:outline-none focus:ring-2 focus:ring-red-600 transition"
          />

          {/* Button for Sign in */}

          <button
            className="w-full bg-red-600
py-3 rounded font-semibold hover:bg-red-700 transition duration-300"
          >
            Sign In
          </button>

          {/* Text  */}

          <p className="text-gray-400 text-sm mt-6">
            {!isSignup
              ? "Existing User's ?"
              : "Don't Worry Create your Account"}
            <span
              className="text-white hover:underline cursor-pointer ml-1"
              onClick={togglesignup}
            >
              {!isSignup ? "Login" : "- Sign Up"}
            </span>
          </p>

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between text-sm text-gray-400 mt-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-red-600 w-4 h-4" />
              Remember me
            </label>

            <span className="hover:underline cursor-pointer">
              Forgot password?
            </span>
          </div>

          <p className="text-gray-400 text-sm mt-4">
            This page is Protected by Google reCaptcha to ensure you're not a
            bot.{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
