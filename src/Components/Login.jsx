"use client";
import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import jwt from "jsonwebtoken"; // Import jsonwebtoken library
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://192.168.232.97:3005/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful, save the token to local storage
        localStorage.setItem("token", data.token);

        // Decode the token
        const decodedToken = jwt.decode(data.token);
        console.log("Decoded Token:", decodedToken);

        // Continue with other actions...
      } else {
        // Handle login error
        console.error("Login failed:", data.message);
      }
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col lg:flex-row w-11/12 max-w-4xl overflow-hidden">
        <div className="lg:w-3/5 p-5">
          <div className="text-center lg:text-left font-bold">
            <span className="text-green-500">Rajasthan Police</span> Feedback
            System
          </div>
          <div className="py-10">
            <h2 className="text-3xl font-bold text-green-500 mb-2 lg:ml-20">
              Login to your Account
            </h2>
            <div className="border-2 w-12 border-green-500 inline-block mb-2 lg:ml-48"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 w-72 p-2 flex items-center mb-3">
              <FaEnvelope className="text-gray-400 m-2" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-100 outline-none text-sm flex-1"
              ></input>
            </div>
            <div className="bg-gray-100 w-72 p-2 flex items-center mb-3">
              <MdLockOutline className="text-gray-400 m-2" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-100 outline-none text-sm flex-1"
              ></input>
            </div>

            <button
              onClick={handleLogin}
              className="border-2 border-green-500 text-green-500 rounded-full px-8 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white"
            >
              Log in
            </button>
          </div>
        </div>

        <div className="lg:w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-10 lg:py-36 px-6 lg:px-12 mt-10 lg:mt-0">
          <h2 className="text-3xl font-bold mb-2">Hello, Citizen!!</h2>
          <div className="border-2 w-12 border-white inline-block mb-2 lg:ml-20"></div>
          <p className="mb-5 lg:mb-10">
            Help us improve, by providing feedback!!
          </p>
          <Link
            href={"/register/user"}
            className="border-2 border-white rounded-full px-8 py-2 inline-block font-semibold hover:bg-white hover:text-green-500"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
