"use client";

import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";
import Image from "next/image";
import loc from "@public/loc.png";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/85 backdrop-blur-xl border-b border-teal/10">
      {/* Logo */}
      <div className="font-sora font-bold text-[1.05rem] text-dark tracking-tight">
        <Image
         src="/images/locCopy.png"
         alt="Light"
          width={100} height={100} 
          className="inline-block mr-2" />
      </div>

      {/* Links — hidden on mobile */}
      <ul className="hidden md:flex gap-8 list-none">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-[0.88rem] text-[#3d5166] font-medium hover:text-teal transition-colors no-underline"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href="#register"
        className="bg-teal text-white no-underline px-5 py-2 rounded-full text-[0.88rem] font-medium hover:bg-teal-dark transition-all hover:-translate-y-px active:translate-y-0"
      >
        Register Now
      </Link>
    </nav>
  );
}
