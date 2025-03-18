"use client";

// components/Navbar.jsx
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaQuestionCircle,
  FaUser,
  FaGift,
  FaBell,
  FaComments,
} from "react-icons/fa";
import { RiSwordFill } from "react-icons/ri";
import { GiLion } from "react-icons/gi";

const Navbar = () => {
  const [notifications, setNotifications] = useState(0);
  const [rewards, setRewards] = useState(1);

  return (
    <nav className="w-full bg-gradient-to-r from-black to-purple-900 text-white shadow-lg mb-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-purple-400 text-3xl">
                <GiLion />
              </div>
              <span className="font-bold text-xl">QuestHub</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link className="nav-link" href="/">
              Home
            </Link>
            <Link className="nav-link" href="/stats">
              Stats
            </Link>
            <Link className="nav-link active" href="/report">
              Report
            </Link>
            <Link className="nav-link" href="/Leaderboard">
              Leaderboard
            </Link>
            <Link className="nav-link" href="/profile">
              Profile
            </Link>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-6">
            {/* Rewards */}
            <div className="relative">
              <div className="text-yellow-400">
                <FaGift size={20} />
              </div>
              {rewards > 0 && (
                <div className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {rewards}
                </div>
              )}
            </div>

            {/* Notifications */}
            <div className="relative">
              <div className="text-purple-300">
                <FaBell size={20} />
              </div>
              {notifications > 0 && (
                <div className="absolute -top-2 -right-2 bg-purple-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {notifications}
                </div>
              )}
            </div>

            {/* Messages */}
            <div className="text-white">
              <FaComments size={20} />
            </div>

            {/* Profile */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-300 rounded-full overflow-hidden">
                <Image
                  src=""
                  alt="Profile"
                  width={32}
                  height={32}
                  className="object-cover"
                  // Add a default placeholder image or have one in your project
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Hidden by default, toggleable */}
      <div className="md:hidden bg-purple-900 pb-4 hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/missions"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-800"
          >
            Missions
          </Link>
          <Link
            href="/report"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-800"
          >
            Report
          </Link>
          <Link
            href="/stats"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-800"
          >
            Stats
          </Link>
          <Link
            href="/help"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-800"
          >
            Help
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
