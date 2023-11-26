"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <section className="border-b-2 z-50">
        <nav className="secondary-fluid-layout py-3 flex justify-between items-center">
          <h1 className="font-semibold text-xl">DIET PLAN</h1>
          <ul className="hidden md:flex items-center gap-x-4">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={
                  pathname === link.href
                    ? "bg-black text-white p-2 rounded-md"
                    : "bg-white text-black p-2"
                }
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
            <li>
              <span className="material-symbols-outlined align-middle">
                account_circle
              </span>
            </li>
            <li>
              <span className="material-symbols-outlined align-middle">
                notifications_active
              </span>
            </li>
            <li>
              <span className="material-symbols-outlined align-middle">
                shopping_cart
              </span>
            </li>
          </ul>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <span className="material-symbols-outlined"> menu </span>
          </button>
        </nav>
      </section>
      <section
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } duration-300 ease-out flex flex-col fixed right-0 top-0 bottom-0 px-4 bg-white w-80 h-full z-50`}
      >
        <div className="flex justify-between items-center py-3 lg:py-4 border-b-2 border-gray-200 mb-4">
          <h1 className="text-2xl font-semibold">Diet Plan</h1>
          <ul className="flex items-center space-x-2">
            <li>
              <span className="material-symbols-outlined align-middle">
                account_circle
              </span>
            </li>
            <li>
              <span className="material-symbols-outlined align-middle">
                notifications_active
              </span>
            </li>
            <li>
              <span className="material-symbols-outlined align-middle">
                shopping_cart
              </span>
            </li>
          </ul>
        </div>
        <ul className="flex-1">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className={
                pathname === link.href
                  ? "bg-black text-white p-2 rounded-md"
                  : "bg-white text-black p-2"
              }
              onClick={() => setIsOpen(!isOpen)}
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <button
          className="material-symbols-outlined max-w-max mx-auto mb-4 bg-gray-100 text-slate-400 rounded-full p-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          close
        </button>
      </section>
    </>
  );
}
