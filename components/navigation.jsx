"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <section className="border-b-2 z-50">
      <nav className="secondary-fluid-layout py-3 flex justify-between items-center">
        <h3 className="font-semibold text-xl">DIET PLAN</h3>
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
        <button className="md:hidden">
          <span className="material-symbols-outlined"> menu </span>
        </button>
      </nav>
    </section>
  );
}
