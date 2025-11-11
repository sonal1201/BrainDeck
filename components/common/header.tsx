"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { BrainCircuitIcon } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

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

      {/* Right Side - Nav + User */}
      <div className="flex items-center gap-6 font-medium text-gray-800">
        <Link
          href="/#pricing"
          className={`p-1 transition-all duration-200 rounded-md px-4 py-2 hover:bg-gray-100 ${
            pathname === "/#pricing" ? "text-black font-semibold" : ""
          }`}
        >
          Pricing
        </Link>

        <SignedIn>
          <Link
            href="/dashboard"
            className={`p-1 transition-all duration-200 px-4 py-2 rounded-md hover:bg-gray-100 ${
              pathname === "/dashboard" ? "text-black font-semibold" : ""
            }`}
          >
            Your Summaries
          </Link>
        </SignedIn>

        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <div className="bg-linear-to-r from-blue-900 to-blue-400 hover:bg-linear-to-r hover:from-blue-400 hover:to-blue-900  shadow-lg text-white px-4 py-2 rounded-md font-medium transition-all hover:scale-103 duration-200 cursor-pointer">
            <SignInButton />
          </div>
        </SignedOut>
      </div>
    </nav>
  );
}
