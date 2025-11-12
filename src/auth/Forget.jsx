import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router";

const Forget = () => {
  const { user, fontgetPasswordUser, emailInput } = useContext(AuthContext);
  const location = useLocation();
  const initialLocation = location.state?.email || "";
  const [email, setEmail] = useState(initialLocation);
  const navigate = useNavigate();

  const handleForgetSubmit = (e) => {
    e.preventDefault();
    const forgetEmail = e.target.forget.value;

    if (!forgetEmail) {
      Swal.fire({
        title: "Email Required",
        text: "Please enter your registered email address.",
        icon: "warning",
        confirmButtonColor: "#f59e0b",
      });
      return;
    }

    fontgetPasswordUser(forgetEmail)
      .then(() => {
        Swal.fire({
          title: "Reset Link Sent!",
          text: "A password reset link has been sent to your email. Please check your inbox or spam folder.",
          icon: "success",
          confirmButtonColor: "#7e22ce",
        });
        navigate("/login");
        e.target.reset();
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text:
            error.code === "auth/user-not-found"
              ? "No user found with this email address."
              : error.message,
          icon: "error",
          confirmButtonColor: "#ef4444",
        });
      });
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] max-w-3xl mx-auto">
      {/* <title>Toy-Topia | Forget</title> */}
      <form
        onSubmit={handleForgetSubmit}
        className="space-y-4 shadow-lg border border-purple-200 p-6 rounded-2xl bg-white"
      >
        <h2 className="text-2xl font-bold text-center text-purple-700">
          Forgot Password?
        </h2>
        <p className="text-center text-gray-500 text-sm">
          Enter your email to get a password reset link.
        </p>

        <div className="space-y-2">
          <label className="text-gray-600 font-semibold text-lg">
            Your Email
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="forget"
            placeholder="Enter your registered email"
            className="w-full border border-purple-400 py-2 px-4 outline-none rounded-md mt-1 text-gray-700 focus:ring-2 focus:ring-purple-500 transition-all"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-linear-to-r from-purple-500 to-indigo-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold rounded-md py-2 transition-all"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default Forget;
