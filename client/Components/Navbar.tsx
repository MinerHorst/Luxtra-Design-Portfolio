import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="flex gap-2 text-2xl font-medium relative z-20 text-white">
      <ul className="flex flex-row gap-12">
        <Link href="/">
          <li
            className={`cursor-pointer ${
              router.pathname == "/" ? "underline" : ""
            }`}
          >
            Home
          </li>
        </Link>
        <Link href="/contact">
          <li
            className={`cursor-pointer ${
              router.pathname == "/contact" ? "underline" : ""
            }`}
          >
            Contact
          </li>
        </Link>
      </ul>
    </nav>
  );
}
