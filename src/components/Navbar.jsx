"use client";

import { ChevronDown, Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

/* ================= CONFIG ================= */

const dropdownData = {
  title: "INFORMATION FOR",
  items: [
    { label: "Students", href: "/info/students" },
    { label: "Parents", href: "/info/parents" },
  ],
};

const mainNavConfig = [
  {
    title: "LIFE AT PAMAVAMBO",
    href: "/life",
    links: [
      { label: "Student Life", href: "/life/student-life" },
      { label: "Calendar", href: "/life/calendar" },
      { label: "News and Events", href: "/life/news" },
      { label: "Campus", href: "/life/campus" },
      { label: "Leadership", href: "/life/leadership" },
      { label: "Careers", href: "/life/careers" },
    ],
  },
  {
    title: "ADMISSION",
    href: "/admission",
    links: [
      { label: "Inquire", href: "/admission/inquire" },
      { label: "Application Process", href: "/admission/application" },
      { label: "Campus Visit", href: "/admission/visit" },
    ],
  },
  {
    title: "ACADEMICS",
    href: "/academics",
    links: [
      { label: "Departments", href: "/academics/departments" },
      { label: "Academic Community", href: "/academics/community" },
      { label: "Career", href: "/academics/career" },
    ],
  },
  {
    title: "BEYOND THE CLASSROOM",
    href: "/beyond-the-classroom",
    links: [],
  },
];

/* ================= COMPONENT ================= */

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50 bg-transparent px-4 md:px-12 py-4">
        {/* Top Bar: Logo and Utility Links */}
        <div className="flex justify-between items-start md:items-center">
          {/* Logo */}
          <Link href="/" className="z-60">
            <h1 className="font-serif text-2xl md:text-4xl text-white leading-tight uppercase">
              The <br /> Pamavambo <br /> School
            </h1>
          </Link>

          {/* Desktop & Mobile Utility Area */}
          <div className="flex items-center gap-4 relative z-60">
            {/* "Information For" Dropdown */}
            <div
              className="hidden sm:flex text-white items-center gap-1 cursor-pointer relative text-xs md:text-sm tracking-widest"
              onMouseEnter={() => setIsInfoOpen(true)}
              onMouseLeave={() => setIsInfoOpen(false)}
            >
              <span>{dropdownData.title}</span>
              <ChevronDown size={16} />

              {isInfoOpen && (
                <div className="absolute top-full right-0 mt-1 w-40 bg-[#610716] text-white rounded shadow-lg">
                  <ul className="flex flex-col">
                    {dropdownData.items.map((item, index) => (
                      <li key={index} className="px-4 py-2 hover:bg-[#821021]">
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Search */}
            <button className="text-white hover:text-amber-500">
              <Search size={22} />
            </button>

            {/* Hamburger Toggle */}
            <button
              className="text-white md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <div className="hidden md:flex items-center justify-center ">
          <nav className="flex border-b border-amber-500/50 pb-2 gap-8">
            {mainNavConfig.map((menu, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setOpenIndex(index)}
                onMouseLeave={() => setOpenIndex(null)}
              >
                <Link
                  href={menu.href}
                  className="cursor-pointer text-white text-sm font-bold tracking-widest hover:text-amber-400 transition-colors"
                >
                  {menu.title}
                </Link>

                {openIndex === index && menu.links.length > 0 && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 bg-[#610716] text-white shadow-2xl rounded-sm py-2">
                    <ul className="flex flex-col">
                      {menu.links.map((link, i) => (
                        <li
                          key={i}
                          className="px-4 py-2 hover:bg-[#821021] transition-colors"
                        >
                          <Link href={link.href} className="block text-sm">
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* ================= MOBILE NAVIGATION OVERLAY ================= */}
        <div
          className={`
          fixed inset-0 bg-[#610716] z-50 transition-transform duration-300 ease-in-out flex flex-col
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
          md:hidden
        `}
        >
          {/* Mobile Header with Close Button */}

          {/* Mobile Menu Content */}
          <div className="flex-1 overflow-y-auto mt-24 p-6">
            <nav className="flex flex-col gap-8">
              {mainNavConfig.map((menu, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <Link
                    href={menu.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white text-lg font-serif border-b border-amber-500/30 pb-2"
                  >
                    {menu.title}
                  </Link>
                  {menu.links.length > 0 && (
                    <div className="flex flex-col gap-2 pl-3">
                      {menu.links.map((link, i) => (
                        <Link
                          key={i}
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-white/80 text-sm hover:text-amber-400 py-1"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Info For - Mobile Version */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <span className="text-amber-500 text-sm tracking-widest block mb-4">
                  INFORMATION FOR
                </span>
                <div className="flex flex-col gap-3">
                  {dropdownData.items.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white text-sm hover:text-amber-400 py-1"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Search in Mobile Menu */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="flex items-center gap-3 text-white">
                  <Search size={20} />
                  <span className="text-sm">Search</span>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
