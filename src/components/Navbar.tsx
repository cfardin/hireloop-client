"use client";

import { useState } from "react";
import { Button, Link } from "@heroui/react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#111113] px-4 py-4">
      <div className="mx-auto container">
        {/* Navbar */}
        <header className="flex h-[66px] items-center justify-between rounded-2xl bg-[#1c1c1e] px-6 md:px-7">
          
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center no-underline"
            aria-label="HireLoop Home"
          >
            <div className="text-[32px] font-bold leading-none tracking-[-1.5px]">
              <span className="text-[#008cff]">hire</span>
              <span className="text-[#ff7900]">loop</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/jobs"
              className="text-[14px] font-medium text-white/90 transition-colors hover:text-white"
            >
              Browse Jobs
            </Link>

            <Link
              href="/company"
              className="text-[14px] font-medium text-white/90 transition-colors hover:text-white"
            >
              Company
            </Link>

            <Link
              href="/pricing"
              className="text-[14px] font-medium text-white/90 transition-colors hover:text-white"
            >
              Pricing
            </Link>

            {/* Divider */}
            <div className="h-6 w-px bg-white/20" />

            <Link
              href="/signin"
              className="text-[15px] font-medium text-[#7065ff] transition-colors hover:text-[#8a80ff]"
            >
              Sign In
            </Link>

            <Button
              as={Link}
              href="/get-started"
              radius="lg"
              className="h-11 bg-[#6255f5] px-6 text-[14px] font-semibold text-white shadow-lg shadow-[#6255f5]/20 transition-all hover:bg-[#7165ff]"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </header>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-2 overflow-hidden rounded-2xl bg-[#1c1c1e] md:hidden">
            <div className="flex flex-col p-4">

              <Link
                href="/jobs"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-white/90 hover:bg-white/5 hover:text-white"
              >
                Browse Jobs
              </Link>

              <Link
                href="/company"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-white/90 hover:bg-white/5 hover:text-white"
              >
                Company
              </Link>

              <Link
                href="/pricing"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-white/90 hover:bg-white/5 hover:text-white"
              >
                Pricing
              </Link>

              <div className="my-2 h-px bg-white/10" />

              <Link
                href="/signin"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-[#7065ff] hover:bg-white/5"
              >
                Sign In
              </Link>

              <Button
                as={Link}
                href="/get-started"
                onClick={() => setIsMenuOpen(false)}
                radius="lg"
                className="mt-2 h-11 w-full bg-[#6255f5] font-semibold text-white"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;