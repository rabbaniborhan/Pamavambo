"use client";

import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "DIRECTORY", href: "/directory" },
  { name: "CAREERS", href: "/careers" },
  { name: "BIG RED STORE", href: "/store" },
  { name: "SITE MAP", href: "/sitemap" },
  { name: "PRIVACY POLICY", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-gray-900 text-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Changed to flex-col for mobile, md:flex-row for desktop */}
          <div className="flex flex-col md:flex-row justify-between md:justify-evenly gap-12 md:gap-0">
            {/* 1. Left Column: Navigation & CTA */}
            <div className="flex flex-col space-y-4 items-center md:items-start text-center md:text-left">
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-xs font-bold tracking-widest hover:text-[#b89149] transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="pt-4">
                <Link
                  href="/give"
                  className="inline-block border border-[#b89149] px-6 py-2 text-xs font-bold tracking-widest hover:bg-[#b89149] hover:text-black transition-all"
                >
                  Make a gift &rarr;
                </Link>
              </div>
            </div>

            {/* 2. Right Group: Combined Address, Mission, and Seal */}
            {/* On mobile, this stacks everything vertically. On desktop, it keeps your side-by-side layout */}
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Text Content */}
              <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-6">
                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-bold">
                    The Lawrenceville School
                  </h4>
                  <p className="text-sm opacity-80">2500 Main Street</p>
                  <p className="text-sm opacity-80">Lawrenceville, NJ 08648</p>
                </div>

                <p className="text-xs leading-relaxed opacity-60 max-w-xs italic">
                  The Lawrenceville School is a co-educational college
                  preparatory school for boarding and day students in grades 9 -
                  12.
                </p>

                {/* Social Icons */}
                <div className="flex space-x-6 pt-2">
                  <Facebook
                    size={18}
                    className="cursor-pointer hover:text-[#b89149]"
                  />
                  <div className="w-5 h-5 border border-white flex items-center justify-center text-[10px] font-bold cursor-pointer hover:border-[#b89149] hover:text-[#b89149]">
                    X
                  </div>
                  <Linkedin
                    size={18}
                    className="cursor-pointer hover:text-[#b89149]"
                  />
                  <Instagram
                    size={18}
                    className="cursor-pointer hover:text-[#b89149]"
                  />
                  <Youtube
                    size={18}
                    className="cursor-pointer hover:text-[#b89149]"
                  />
                </div>
              </div>

              {/* Seal/Logo */}
              <div className="flex justify-center md:justify-end">
                <div className="relative w-32 h-32">
                  <Image
                    src="/logo-emblem-white.svg"
                    alt="The Lawrenceville School Seal"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 bg-black text-white text-center">
        <p className="text-[10px] opacity-40 uppercase tracking-widest">
          © Powered by Finalsite
        </p>
      </div>
    </footer>
  );
}
