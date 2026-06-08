"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Search, User } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = scrolled ? "text-black" : "text-white";

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-white/90 shadow-sm backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        {/* Top Header */}
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Mobile Menu */}
            <button
              onClick={() => setMenuOpen(true)}
              className={`md:hidden ${textColor}`}
            >
              <Menu size={24} />
            </button>

            {/* Language */}
            <div className={`hidden text-sm md:block ${textColor}`}>
              <select
                className="bg-transparent outline-none"
                defaultValue="EN"
              >
                <option value="EN">EN</option>
                <option value="AR">AR</option>
                <option value="FR">FR</option>
              </select>
            </div>

            {/* Logo */}
            <Link
              href="/"
              className={`${textColor} text-2xl font-light tracking-[0.3em] md:text-4xl`}
            >
              FRAVE
            </Link>

            {/* Actions */}
            <div className={`flex items-center gap-4 md:gap-6 ${textColor}`}>
              <button>
                <Search size={20} />
              </button>

              <Link href="/login" className="hidden text-sm md:block">
                Login
              </Link>

              <Link href="/account">
                <User size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="mx-auto hidden max-w-7xl px-6 md:block">
          <nav>
            <ul
              className={`flex h-16 items-center justify-center gap-12 text-sm uppercase tracking-widest ${textColor}`}
            >
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/products">Shop</Link>
              </li>

              <li>
                <Link href="/collections">Collections</Link>
              </li>

              <li>
                <Link href="/about">About</Link>
              </li>

              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/60"
            onClick={() => setMenuOpen(false)}
          />

          <div className="fixed left-0 top-0 z-50 h-screen w-72 bg-black p-8 text-white">
            <div className="mb-10 flex justify-end">
              <button onClick={() => setMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <nav>
              <ul className="space-y-8 text-lg uppercase tracking-wider">
                <li>
                  <Link href="/" onClick={() => setMenuOpen(false)}>
                    Home
                  </Link>
                </li>

                <li>
                  <Link href="/products" onClick={() => setMenuOpen(false)}>
                    Shop
                  </Link>
                </li>

                <li>
                  <Link href="/collections" onClick={() => setMenuOpen(false)}>
                    Collections
                  </Link>
                </li>

                <li>
                  <Link href="/about" onClick={() => setMenuOpen(false)}>
                    About
                  </Link>
                </li>

                <li>
                  <Link href="/contact" onClick={() => setMenuOpen(false)}>
                    Contact
                  </Link>
                </li>

                <li>
                  <Link href="/login" onClick={() => setMenuOpen(false)}>
                    Login
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
