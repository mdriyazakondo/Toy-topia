import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footers() {
  return (
    <footer className="w-full bg-gray-800 text-white px-6 md:px-12 lg:px-24 xl:px-36">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-white/30">
        {/* --- Logo & Social --- */}
        <div className="max-w-sm">
          <Link to="/">
            <img src="/img/logo2.png" alt="Logo" className="w-24" />
          </Link>
          <p className="text-sm text-white/80 mb-4">
            Bringing joy to kids with the best toys. Explore our amazing
            collection and make playtime unforgettable.
          </p>

          <div className="flex items-center gap-4 mt-2 text-white">
            <a href="#" className="hover:text-blue-400 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-sky-400 transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-pink-400 transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

       
        <div className="w-full md:w-1/4 flex flex-wrap md:flex-nowrap justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="font-semibold text-lg mb-4">Quick Links</h2>
            <ul className="space-y-2 text-white/80 text-sm">
              <Link to={"/"}>
                <li className="hover:text-white transition mt-3">Home</li>
              </Link>
              <Link to={"/products"}>
                <li className="hover:text-white transition mt-3">All Toys</li>
              </Link>
              <Link to={"/blog"}>
                <li className="hover:text-white transition mt-3">Blog</li>
              </Link>
              <Link to={"/contacts"}>
                <li className="hover:text-white transition mt-3">Contacts</li>
              </Link>
              <Link to={"/profile"}>
                <li className="hover:text-white transition mt-3">My Profile</li>
              </Link>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-4">Company</h2>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>


        <div className="max-w-sm">
          <h2 className="font-semibold text-lg mb-4">Stay in Touch</h2>
          <p className="text-sm text-white/80 mb-3">
            Subscribe for new arrivals & special offers.
          </p>
          <form className="flex items-center gap-2 border border-indigo-500  rounded-md">
            <input
              type="email"
              required
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-md text-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-indigo-500  text-white px-4 py-2 rounded-r-sm cursor-pointer font-medium transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="py-4 text-center text-xs md:text-sm text-white/70 border-t border-gray-500">
        <p className="py-4 text-center text-xs md:text-sm text-white/70 ">
          Copyright {new Date().getFullYear()} © Toy Topia. All Rights Reserved.{" "}
        </p>
      </div>
    </footer>
  );
}
