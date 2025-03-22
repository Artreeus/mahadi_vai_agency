"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle opening and closing animations
  const toggleMenu = () => {
    if (!mobileMenuOpen) {
      setMobileMenuOpen(true);
      setAnimationClass("animate-slide-in");
    } else {
      setAnimationClass("animate-slide-out");
      setTimeout(() => {
        setMobileMenuOpen(false);
      }, 300); // Match this with the animation duration
    }
  };

  // Add scroll detection for shadow and background effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when window resizes to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
        setAnimationClass("");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  // Function to close menu
  const closeMenu = () => {
    toggleMenu();
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className={`bg-white rounded-full shadow-md transition-all duration-300 ${
          isScrolled ? "shadow-lg" : ""
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-3">
              {/* Logo - Left Side */}
              <div className="flex-shrink-0">
                <Link href="/" legacyBehavior>
                  <a className="flex items-center">
                    <Image
                      src="/logo.png"
                      alt="Spark TECH Agency"
                      width={117}
                      height={42}
                    />
                  </a>
                </Link>
              </div>

              {/* Navigation - Middle */}
              <div className="hidden md:flex items-center justify-center space-x-10">
                <Link href="/" legacyBehavior>
                  <a className="text-gray-800 hover:text-lime-500 transition-colors duration-300 text-sm font-medium text-[20px]">
                    Home
                  </a>
                </Link>
                <Link href="/about-us" legacyBehavior>
                  <a className="text-gray-800 hover:text-lime-500 transition-colors duration-300 text-sm font-medium text-[20px] border-l-2 border-r-2 border-gray-300 pl-7 pr-7">
                    About Us
                  </a>
                </Link>
                <Link href="/services" legacyBehavior>
                  <a className="text-gray-800 hover:text-lime-500 transition-colors duration-300 text-sm font-medium text-[20px]">
                    Services
                  </a>
                </Link>
              </div>

              {/* Right Side - Search and Button */}
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/contact-us" legacyBehavior>
                  <a className="bg-lime-500 hover:bg-lime-600 text-black text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
                    Contact Us
                  </a>
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  type="button"
                  className="text-gray-700 focus:outline-none"
                  onClick={toggleMenu}
                  aria-expanded={mobileMenuOpen}
                >
                  <span className="sr-only">Open menu</span>
                  {mobileMenuOpen ? (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu - Full overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden flex flex-col">
          {/* Mobile menu header with close button */}
          <div className="border-b border-gray-100 py-4 px-6 flex items-center justify-between">
            <div className="font-medium text-gray-800">Menu</div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="bg-gray-100 hover:bg-gray-200 transition-colors duration-300 p-2 rounded-full flex items-center justify-center"
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="container mx-auto px-6">
            <nav className="flex flex-col space-y-6">
              <Link href="/about-us" legacyBehavior>
                <a
                  className="text-xl text-gray-800 hover:text-lime-500 transition-colors duration-300 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </a>
              </Link>
              <Link href="/services" legacyBehavior>
                <a
                  className="text-xl text-gray-800 hover:text-lime-500 transition-colors duration-300 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </a>
              </Link>
              <Link href="/our-team" legacyBehavior>
                <a
                  className="text-xl text-gray-800 hover:text-lime-500 transition-colors duration-300 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Our Team
                </a>
              </Link>

              <div className="pt-4">
                <Link href="/contact-us" legacyBehavior>
                  <a
                    className="bg-lime-500 hover:bg-lime-600 text-black font-medium px-8 py-3 rounded-full inline-block transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </a>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;