import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        {/* Welcome Text */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          Hello, Welcome!
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Please Enter Your Details Below To Continue
        </p>

        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded" />
              Remember Me
            </label>
            <Link to="/forgot-password" className="hover:text-blue-600">
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="mt-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Login
          </button>

          {/* Signup link below form */}
          <p className="mt-4 text-center text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
