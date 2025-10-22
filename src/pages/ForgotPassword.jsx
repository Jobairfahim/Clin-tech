import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = (e) => {
    e.preventDefault();
    // TODO: Connect to backend to send OTP
    setOtpSent(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          Forgot Password
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Enter your email to receive a One-Time Password (OTP) to reset your password
        </p>

        {!otpSent ? (
          <form onSubmit={handleSendOtp} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="mt-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Send OTP
            </button>
          </form>
        ) : (
          <div className="text-center">
            <p className="text-green-600 font-semibold mb-4">
              OTP sent to {email}
            </p>
            <button
              onClick={() => setOtpSent(false)}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-all"
            >
              Send Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
