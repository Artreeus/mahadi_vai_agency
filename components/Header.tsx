'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <div className="container px-4 py-3">
      <div className="bg-white rounded-full shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Logo - Left Side */}
            <div className="flex-shrink-0">
              <Link href="/" legacyBehavior>
                <a className="flex items-center">
                  <Image src="/logo.png" alt="Spark TECH Agency" width={117} height={42} />
                </a>
              </Link>
            </div>
            
            {/* Navigation - Middle */}
            <div className="hidden md:flex items-center justify-center space-x-10">
              <Link href="/about-us" legacyBehavior>
                <a className="text-gray-800 hover:text-lime-500 transition-colors duration-300 text-sm font-medium">
                  About Us
                </a>
              </Link>
              <Link href="/services" legacyBehavior>
                <a className="text-gray-800 hover:text-lime-500 transition-colors duration-300 text-sm font-medium">
                  Services
                </a>
              </Link>
              <Link href="/our-team" legacyBehavior>
                <a className="text-gray-800 hover:text-lime-500 transition-colors duration-300 text-sm font-medium">
                  Our Team
                </a>
              </Link>
            </div>
            
            {/* Right Side - Search and Button */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center">
                <Search className="h-5 w-5 text-gray-700" />
                <span className="ml-1 text-gray-800 text-sm font-medium">Search</span>
              </div>
              
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
                className="text-gray-700"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
              >
                <span className="sr-only">Open menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/about-us" legacyBehavior>
                <a className="block px-3 py-2 text-gray-800 hover:text-lime-500 transition-colors duration-300 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                  About Us
                </a>
              </Link>
              <Link href="/services" legacyBehavior>
                <a className="block px-3 py-2 text-gray-800 hover:text-lime-500 transition-colors duration-300 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Services
                </a>
              </Link>
              <Link href="/our-team" legacyBehavior>
                <a className="block px-3 py-2 text-gray-800 hover:text-lime-500 transition-colors duration-300 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Our Team
                </a>
              </Link>
              <div className="flex items-center px-3 py-2">
                <Search className="h-5 w-5 text-gray-700" />
                <span className="ml-1 text-gray-800 text-sm font-medium">Search</span>
              </div>
              <div className="px-3 py-2">
                <Link href="/contact-us" legacyBehavior>
                  <a className="bg-lime-500 hover:bg-lime-600 text-black text-sm font-medium px-4 py-2 rounded-full inline-block transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5" onClick={() => setMobileMenuOpen(false)}>
                    Contact Us
                  </a>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;