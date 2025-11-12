import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { FaGithub, FaGoogle, FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const SignUp = () => {
  const { createUserFunc, signInWithGoogle, signInWithGithub, logoutFunc } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmitSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const termsAccepted = e.target.terms.checked;

    if (!termsAccepted) {
      Swal.fire({
        title: "Terms Required",
        text: "You must accept the terms and conditions",
        icon: "warning",
        confirmButtonColor: "#f59e0b",
      });
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(password)) {
      Swal.fire({
        title: "Weak Password!",
        text: "Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 6 characters long.",
        icon: "warning",
        confirmButtonColor: "#f59e0b",
      });
      return;
    }

    createUserFunc(email, password)
      .then((result) =>
        updateProfile(result.user, {
          displayName: name,
          photoURL: photoURL,
        })
      )
      .then(() => {
        Swal.fire({
          title: "Account Created!",
          text: "Your account has been created successfully.",
          icon: "success",
          confirmButtonColor: "#7e22ce",
        }).then(() => {
          logoutFunc()
            .then(() => {
              navigate("/login");
            })
            .catch((err) => {
              console.error("Logout error:", err);
            });
        });
        e.target.reset();
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
          confirmButtonColor: "#ef4444",
        });
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Signed in successfully!",
          text: `Welcome back, ${result.user.email}`,
          confirmButtonColor: "#6B46C1",
        });
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Sign in failed",
          text: err.message,
          confirmButtonColor: "#6B46C1",
        });
      });
  };

  const handleGithubLogin = () => {
    signInWithGithub()
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Signed in successfully!",
          text: `Welcome back, ${result.user.email}`,
          confirmButtonColor: "#6B46C1",
        });
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Sign in failed",
          text: err.message,
          confirmButtonColor: "#6B46C1",
        });
      });
  };

  return (
    <div className="flex items-center justify-center my-20 px-4 w-full md:w-1/3 mx-auto">
      <title>Toy-Topia | Sign Up</title>
      <form
        onSubmit={handleSubmitSignUp}
        className="bg-white shadow-lg rounded-2xl px-10 py-8 w-full space-y-4"
      >
        <h2 className="text-3xl font-semibold text-center text-purple-600 mb-6">
          Create an Account
        </h2>

        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Photo URL
          </label>
          <input
            type="text"
            name="photoURL"
            placeholder="Enter your photo URL"
            className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-400"
            />
            <span
              className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEyeOutline /> : <FaRegEyeSlash />}
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Must include uppercase, lowercase, and a number (min 6 characters).
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="terms"
            id="terms"
            required
            className="text-purple-600"
          />
          <label className="text-sm  text-purple-600">
            I accept the terms & conditions
          </label>
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer bg-linear-to-r from-purple-500 to-indigo-500 hover:from-indigo-600 hover:to-purple-600 text-white py-3 rounded-md font-semibold  transition duration-200"
        >
          Sign Up
        </button>

        <p className="text-center text-gray-600 text-sm mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-purple-600 hover:underline font-medium"
          >
            Log In
          </Link>
        </p>
        <div className="flex items-center justify-center gap-4 w-full">
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-red-500 text-white cursor-pointer"
          >
            <FaGoogle /> Google
          </button>
          <button
            onClick={handleGithubLogin}
            type="button"
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-700 text-white cursor-pointer "
          >
            <FaGithub /> Github
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
