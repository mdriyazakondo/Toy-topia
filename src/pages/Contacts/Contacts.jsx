import React, { useEffect } from "react";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { BiLocationPlus } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const Contacts = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleContact = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    if (!name || !email || !message) {
      Swal.fire({
        icon: "warning",
        title: "Missing Information",
        text: "Please fill out all fields before submitting.",
        confirmButtonColor: "#e53e3e",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thank you for contacting us. We will reply soon!",
      confirmButtonColor: "#6b46c1",
    });

    e.target.reset();
  };

  return (
    <div
      className="px-6 md:px-16 lg:px-24 xl:px-32 w-full min-h-screen flex flex-col md:flex-row items-center justify-center py-16 bg-gray-100 gap-0 lg:gap-6"
      data-aos="fade-up"
    >
      <title>Toy-Topia | Contact Us</title>

      {/* Left Side: Info Section */}
      <div
        className="w-full md:w-1/2 flex flex-col items-start justify-center space-y-6 md:pl-16 mb-10 md:mb-0 text-black"
        data-aos="fade-right"
      >
        <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 drop-shadow-lg text-gray-800">
          Get in Touch
        </h2>
        <p className="text-lg sm:text-base md:text-lg lg:text-xl text-gray-700">
          We'd love to hear from you! Whether you have questions about our toy
          collections, want to partner with us, or just want to say hello — feel
          free to reach out!
        </p>

        <div className="space-y-4 font-medium text-gray-800">
          <p className="flex items-center gap-2">
            <BiLocationPlus className="text-purple-600" />
            <span className="font-bold">Address:</span> 123 Toy Street, Fun
            City, WonderLand
          </p>
          <p className="flex items-center gap-2">
            <IoCall className="text-purple-600" />
            <span className="font-bold">Phone:</span> +880 1234 567890
          </p>
          <p className="flex items-center gap-2">
            <MdEmail className="text-purple-600" />
            <span className="font-bold">Email:</span> contact@toy-topia.com
          </p>
        </div>

        <div className="flex gap-4 mt-4 text-2xl">
          <a
            href="#"
            className="text-blue-500 transition-all"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="text-sky-500 transition-all"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-pink-500 transition-all"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center" data-aos="fade-left">
        <form
          onSubmit={handleContact}
          className="bg-white shadow-2xl rounded-2xl px-8 sm:px-6 md:px-10 py-8 w-full space-y-4 "
        >
          <h2 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-purple-700 mb-6">
            Contact Us
          </h2>

          <div>
            <label className="block mb-1 font-medium text-gray-800">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-800">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-800">
              Message
            </label>
            <textarea
              name="message"
              cols="30"
              rows="6"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 placeholder:text-gray-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full mt-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-md shadow-md transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
