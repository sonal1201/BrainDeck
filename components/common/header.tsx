"use client";

import { BrainCircuitIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isLogged = false; // Replace with your actual auth state

  const navLinks = [
    { href: "/#pricing", label: "Pricing" },
    ...(isLogged ? [{ href: "/dashboard", label: "Your Summaries" }] : []),
  ];

  return (
    <nav className="flex justify-between items-center py-4 lg:px-8 px-4 shadow-sm bg-white/80 backdrop-blur-md sticky top-0 z-50">
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-1 text-gray-900 hover:text-gray-700 transition-all duration-200"
      >
        <BrainCircuitIcon size={20} />
        <span className="font-extrabold text-lg md:text-xl tracking-tight">
          BrainDeck
        </span>
      </Link>

      {/* Center Nav */}
      <div className="hidden md:flex gap-8 font-medium text-gray-800">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`p-1 transition-all duration-200 rounded-md hover:bg-gray-100 ${
              pathname === href ? "text-black font-semibold" : ""
            }`}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Right Action Button */}
      <div>
        {isLogged ? (
          <Link
            href="/api/auth/signout"
            className="border border-gray-300 px-3 py-1 rounded-md text-gray-800 font-medium hover:bg-gray-100 transition"
          >
            Log Out
          </Link>
        ) : (
          <Link
            href="/signin"
            className="border border-gray-300 px-3 py-1 rounded-md text-gray-800 font-medium hover:bg-gray-100 transition"
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}
