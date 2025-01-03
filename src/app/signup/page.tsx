"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="w-full max-w-sm ml-auto p-6 bg-white bg-opacity-40 rounded-lg shadow-lg">
      <h2 className="text-center mb-6 text-gray-700">
        Don't have account?{" "}
        <span className="text-2xl font-semibold">Create</span>{" "}
      </h2>
      <form className="space-y-4">
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={() => signIn("google")}
            type="button"
            className="w-full py-3 rounded-md text-white bg-gray-900 hover:bg-gray-800"
          >
            Sign up with Google
          </button>
        </div>
        <p className="flex items-center justify-center my-4">
          <span className="flex-grow border-t border-black"></span>
          <span className="mx-4">or</span>
          <span className="flex-grow border-t border-black"></span>
        </p>
        <div className="flex items-center justify-between gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 bg-transparent hover:bg-gray-100 valid:bg-gray-100 valid:bg-opacity-80 text-gray-700"
              required
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 mt-2 border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full border border-gray-300 py-3 rounded-md text-gray-700 hover:bg-gray-100"
        >
          Sign Up
        </button>
      </form>

      <p className="mt-4">
        Already have an account?{" "}
        <Link href="/signin" className="text-blue-500 underline">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
