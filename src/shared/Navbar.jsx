import { useContext, useState } from "react";
import { MdClose, MdLogin, MdMenu } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { CgLogOut } from "react-icons/cg";

const Navbar = () => {
  const { user, logoutFunc, loading } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out from your account!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#6b46c1",
      cancelButtonColor: "#e53e3e",
      confirmButtonText: "Yes, log me out!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        logoutFunc()
          .then(() => {
            Swal.fire({
              title: "Logged Out!",
              text: "You have successfully logged out.",
              icon: "success",
              confirmButtonColor: "#6b46c1",
            });
          })
          .catch((err) => {
            Swal.fire({
              title: "Error!",
              text: err.message,
              icon: "error",
              confirmButtonColor: "#e53e3e",
            });
          });
      }
    });
  };

  const links = (
    <>
      <NavLink
        onClick={() => setOpen(false)}
        to="/"
        className="text-gray-600 font-semibold hover:text-purple-500"
      >
        Home
      </NavLink>
      <NavLink
        onClick={() => setOpen(false)}
        to="/products"
        className="text-gray-600 font-semibold hover:text-purple-500"
      >
        All Toys
      </NavLink>
      {user && (
        <NavLink
          onClick={() => setOpen(false)}
          to="/blog"
          className="text-gray-600 font-semibold hover:text-purple-500"
        >
          Blog
        </NavLink>
      )}
      {user && (
        <NavLink
          onClick={() => setOpen(false)}
          to="/contacts"
          className="text-gray-600 font-semibold hover:text-purple-500"
        >
          Contact
        </NavLink>
      )}
      {user && (
        <NavLink
          onClick={() => setOpen(false)}
          to="/profile"
          className="text-gray-600 font-semibold hover:text-purple-500"
        >
          My Profile
        </NavLink>
      )}
    </>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-300 transition-all px-6 md:px-16 lg:px-24 py-3 flex items-center justify-between">
      <Link to="/">
        <img src="/img/logo2.png" alt="Logo" className="w-24" />
      </Link>

      <div className="hidden md:flex lg:gap-8 md:gap-6 items-center">
        {links}
      </div>

      {loading ? (
        <div className="hidden md:flex w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
      ) : user ? (
        <div className="hidden md:flex items-center gap-4">
          <Link to="/profile">
            <div className="relative group">
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-12 h-12 rounded-full border border-purple-500 cursor-pointer"
                />
              )}
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-gray-100 text-xs p-2 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity text-center space-y-2">
                <h4>{user.displayName}</h4>
                <p>{user.email}</p>
              </div>
            </div>
          </Link>
          <button
            onClick={handleLogOut}
            className="px-5 py-2 flex bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-md transition cursor-pointer items-center gap-1"
          >
            <CgLogOut className="w-6 h-6" /> Logout
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Link
            to="/register"
            className="hidden md:flex px-5 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-md transition items-center gap-2"
          >
            <MdLogin className="w-6 h-6"/> Register
          </Link>{" "}
          <Link
            to="/login"
            className="hidden md:flex px-5 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-md transition items-center gap-2"
          >
            <MdLogin className="w-6 h-6"/> Login
          </Link>
        </div>
      )}

      <button onClick={() => setOpen(!open)} className="md:hidden">
        {open ? (
          <MdClose className="w-6 h-6" />
        ) : (
          <MdMenu className="w-6 h-6" />
        )}
      </button>

      <div
        className={`${
          open ? "flex" : "hidden"
        } flex-col md:hidden absolute top-[60px] left-0 w-full bg-white shadow-md py-4 px-5 gap-3`}
      >
        {links}

        {loading ? (
          <div className="flex justify-center py-2 w-full">
            <div className="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
          </div>
        ) : user ? (
          <div className="flex flex-col gap-2 mt-2">
            <div className="relative group flex items-center">
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="w-12 h-12 rounded-full border border-purple-500"
              />
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-gray-100 p-2 rounded shadow text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                <h4>{user.displayName}</h4>
                <p>{user.email}</p>
              </div>
            </div>
            <button
              onClick={() => {
                handleLogOut();
                setOpen(false);
              }}
              className="w-full text-center px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-full transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="w-full text-center px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-full transition"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
