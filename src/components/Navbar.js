import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { StarIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const activeLink =
    "bg-slate-700 text-white px-3 py-2 rounded-md text-sm font-medium";
  const normalLink =
    "text-slate-300 hover:bg-slate-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium";

  useEffect(() => {
    const highlightArea = document.querySelector(".nav-links-highlight");
    if (!highlightArea) return;

    const handleMouseMove = (e) => {
      const rect = highlightArea.getBoundingClientRect();
      const x = e.clientX - rect.left;
      highlightArea.style.setProperty("--mouse-x", `${x}px`);
    };

    highlightArea.addEventListener("mousemove", handleMouseMove);
    return () =>
      highlightArea.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <style>{`
        .nav-links-highlight {
          position: relative;
          display: inline-block;
        }
        .nav-links-highlight::before {
          content: '';
          position: absolute;
          top: 0;
          left: var(--mouse-x, 50%);
          width: 80px;
          height: 100%;
          background: rgba(255, 192, 203, 0.15);
          transform: translateX(-50%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 0.375rem;
          z-index: 10;
        }
        .nav-links-highlight:hover::before {
          opacity: 1;
        }
      `}</style>

      <nav className="bg-slate-800 shadow-lg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 relative">
            <div className="flex items-center">
              <Link
                to="/events"
                className="flex-shrink-0 flex items-center space-x-2"
              >
                <StarIcon className="h-8 w-8 text-yellow-400" />
                <span className="text-white text-xl font-bold">EventFriend</span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4 nav-links-highlight">
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Events
              </NavLink>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Profile
              </NavLink>
              <Link
                to="/"
                className="text-slate-300 hover:text-white flex items-center space-x-2"
              >
                <ArrowRightOnRectangleIcon className="h-5 w-5" />
                <span>Logout</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
