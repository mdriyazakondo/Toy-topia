import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { IoEyeOutline } from "react-icons/io5";
import { FaGithub, FaGoogle, FaRegEyeSlash } from "react-icons/fa";

const SignIn = () => {
  const {
    signInUserFunc,
    signInWithGoogle,
    signInWithGithub,
    setEmailInput,
    emailInput,
  } = useContext(AuthContext);
  const [showsPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.state?.from.pathname || "/";

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUserFunc(email, password)
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Signed in successfully!",
          text: `Welcome back, ${result.user.email}`,
          confirmButtonColor: "#6B46C1",
        });
        navigate(currentPath, { replace: true });
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

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Signed in successfully!",
          text: `Welcome back, ${result.user.email}`,
          confirmButtonColor: "#6B46C1",
        });
        navigate(currentPath, { replace: true });
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
        navigate(currentPath, { replace: true });
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
    <div className="flex items-center justify-center my-20 w-full md:w-2/3 lg:w-1/3 mx-auto px-4">
      <title>Toy-Topia | Sign In</title>
      <form
        onSubmit={handleSignIn}
        className="bg-white shadow-lg rounded-2xl px-10 py-8 w-full space-y-6"
      >
        <h2 className="text-3xl font-semibold text-center text-purple-600 mb-6">
          Sign In
        </h2>

        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Password
          </label>
          <div className="relative">
            <input
              type={showsPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-400"
            />
            <span
              className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showsPassword)}
            >
              {showsPassword ? <IoEyeOutline /> : <FaRegEyeSlash />}
            </span>
          </div>
        </div>
        <div>
          <button
            type="button"
            onClick={() =>
              navigate("/forget", { state: { email: emailInput } })
            }
            className="hover:border-b border-purple-600 text-purple-600"
          >
            Forgot password?
          </button>
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer bg-linear-to-r from-purple-500 to-indigo-500 hover:from-indigo-600 hover:to-purple-600 text-white py-3 rounded-md font-semibold  transition duration-200"
        >
          Sign In
        </button>

        <p className="text-center text-gray-600 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-purple-600 hover:underline font-medium"
          >
            Sign Up
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
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-700 text-white cursor-pointer"
          >
            <FaGithub /> Github
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
