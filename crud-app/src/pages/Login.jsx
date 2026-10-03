import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../services/api";

function Login({ onLogin }) {
  const [isLoggedinMode, setLoginMode] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!isLoggedinMode && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);

    try {
      if (isLoggedinMode) {
        const response = await loginUser({ email, password });
        const loggedInName =
          response.data?.user?.name ||
          response.data?.name ||
          email.split("@")[0];

        onLogin(loggedInName);
        navigate("/");
      } else {
        await registerUser({ name, email, password });
        setLoginMode(true);
        setPassword("");
        setConfirmPassword("");
        setError("Registration successful. Please log in.");
      }
    } catch (requestError) {
      setError(
        requestError.response?.data?.detail ||
          "Unable to complete the request. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="place-items-center pt-10 bg-cyan-400 h-175.5">
      <div className="w-[430px] bg-white p-10 rounded-2xl shadow-lg">
        <div className="flex justify-center mb-6">
          <h2 className="text-3xl font-semibold text-center">
            {isLoggedinMode ? "Login" : "Sign Up"}
          </h2>
        </div>

        <div className="relative flex h-12 mb-8 border border-gray-300 rounded-full overflow-hidden">
          <button
            onClick={() => setLoginMode(true)}
            className={`w-1/2 text-lg font-medium transition-all z-10 ${isLoggedinMode ? "text-white" : "text-black"}`}
          >
            Login
          </button>
          <button
            onClick={() => setLoginMode(false)}
            className={`w-1/2 text-lg font-medium transition-all z-10 ${!isLoggedinMode ? "text-white" : "text-black"}`}
          >
            Sign Up
          </button>
          <div
            className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 ${isLoggedinMode ? "left-0" : "left-1/2"}`}
          ></div>
        </div>

        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col gap-7"
        >
          {!isLoggedinMode && (
            <input
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full px-3 py-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full px-3 py-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full px-3 py-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
          />

          {!isLoggedinMode && (
            <input
              type="password"
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              className="w-full px-3 py-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
            />
          )}

          {isLoggedinMode && (
            <div className="-mt-2 text-right">
              <p className="text-cyan-600 hover:underline">Forget Password</p>
            </div>
          )}

          {error && (
            <p className="text-center text-sm text-red-600" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full p-3 -mt-1 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full text-lg font-medium hover:opacity-90 transition disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Please wait..." : isLoggedinMode ? "Login" : "Signup"}
          </button>

          <p className="-mt-2 text-center text-gray">
            {isLoggedinMode
              ? "Don't have an account "
              : "Already have an account "}
            <a
              href="#"
              onClick={(e) => setLoginMode(!isLoggedinMode)}
              className="text-cyan-600 hover:underline"
            >
              {isLoggedinMode ? "Signup now" : "Login"}
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
