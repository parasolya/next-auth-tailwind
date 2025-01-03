"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";

const SignIn = () => {
  return (
    <div className="w-full max-w-sm  p-6 bg-white bg-opacity-40 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
        Welcome back
      </h2>
      <form className="space-y-4">
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={() => signIn("google")}
            type="button"
            className="w-full border border-gray-300 py-3 rounded-md text-gray-700 hover:bg-gray-100"
          >
            Sign up with Google
          </button>
        </div>
        <p className="flex items-center justify-center my-4">
          <span className="flex-grow border-t border-black"></span>
          <span className="mx-4">or</span>
          <span className="flex-grow border-t border-black"></span>
        </p>

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
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
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

        <button
          type="submit"
          className="w-full border border-gray-300 py-3 rounded-md text-gray-700 hover:bg-gray-100"
        >
          Sign In
        </button>
      </form>

    
      <p className="mt-4">
        Don't have an account?{" "}
        <Link href="/signup" className="text-blue-500 underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
};
export default SignIn;
