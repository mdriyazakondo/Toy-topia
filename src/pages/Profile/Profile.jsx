import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { updateEmail, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "../Loading/Loading";

const Profile = () => {
  const { user, setLoading, loading } = useContext(AuthContext);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const photoURL = e.target.photoURL.value.trim();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    setLoading(true);
    try {
      if (user) {
        if (photoURL !== user.photoURL) {
          await updateProfile(user, { photoURL });
        } else if (name !== user.displayName) {
          await updateProfile(user, { displayName: name });
        } else if (email !== user.email) {
          await updateEmail(user, email);
        }

        Swal.fire({
          icon: "success",
          title: "Profile Updated!",
          text: "Your profile information has been updated successfully.",
          confirmButtonColor: "#6b46c1",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: error.message,
        confirmButtonColor: "#e53e3e",
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full mx-auto flex items-center justify-center flex-col my-20">
      <title>Toy-Topia | My Profile</title>
      <div
        className="bg-white p-8 rounded-lg shadow-md text-center"
        data-aos="fade-up"
      >
        <img
          className="w-32 h-32 rounded-full mx-auto shadow-md"
          src={user?.photoURL}
          alt={user?.displayName || "User Photo"}
          data-aos="zoom-in"
        />
        <div className="mt-6 space-y-2" data-aos="fade-up" data-aos-delay="200">
          <h4 className="text-lg font-semibold">
            Name: {user?.displayName || "N/A"}
          </h4>
          <h4 className="text-gray-700">Email: {user?.email || "N/A"}</h4>
          <h4 className="text-gray-500">
            Last Login:{" "}
            {user?.metadata?.lastSignInTime
              ? new Date(user.metadata.lastSignInTime).toLocaleString()
              : "N/A"}
          </h4>
        </div>
      </div>

      <form
        onSubmit={handleUpdate}
        className="w-full md:w-2/3 lg:w-1/3 mt-6 shadow p-6 rounded-md bg-white"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="space-y-4">
          <div>
            <label className="font-medium text-gray-700">Your Photo URL</label>
            <input
              type="url"
              name="photoURL"
              defaultValue={user.photoURL}
              placeholder="Your photoURL"
              className="w-full border border-purple-600 outline-none rounded-md py-2 px-4 mt-2 focus:border-2 transition-all duration-100"
            />
          </div>
          <div>
            <label className="font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              name="name"
              defaultValue={user.displayName}
              placeholder="Your Name"
              className="w-full border border-purple-600 outline-none rounded-md py-2 px-4 mt-2 focus:border-2 transition-all duration-100"
            />
          </div>
          <div>
            <label className="font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              name="email"
              defaultValue={user.email}
              placeholder="Your Email"
              className="w-full border border-purple-600 outline-none rounded-md py-2 px-4 mt-2 focus:border-2 transition-all duration-100"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-md cursor-pointer mt-6 transition-all duration-200"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          Update User
        </button>
      </form>
    </div>
  );
};

export default Profile;
