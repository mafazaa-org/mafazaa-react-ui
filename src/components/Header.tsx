"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type linkType = { text: string; href: string };

function Header({
  links,
  logo,
  show = false,
}: {
  links: any;
  logo?: any;
  show?: boolean;
}) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSpecialRoute, setIsSpecialRoute] = useState(false);

  const filteredLinks = links?.importantLinks?.filter(
    (link: linkType) => link?.text !== "الرئيسية" && link.text !== "تواصل معنا"
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsSpecialRoute(pathname === "/contact");
  }, [pathname]);

  return (
    <header
      className={`flex md:grid grid-cols-9 items-center justify-between md:justify-items-center px-6 py-4 md:px-8 lg:px-32 fixed top-0 w-full z-20 transition-all duration-300 h-16 md:h-20 lg:h-24 ${
        show || isScrolled || isSpecialRoute
          ? "bg-gradient-to-r from-dark-one to-dark-two shadow-md"
          : "bg-transparent"
      }`}
    >
      {/* Social Links (Hidden on Mobile) */}
      <ul className="hidden md:flex justify-start items-center gap-4 w-full col-span-3">
        {links?.socialLinks?.map((social: any, index: any) => (
          <li key={index}>
            <Link target="_blank" {...social}>
              <Image {...social} width={27} height={27} alt={social.alt} />
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <button
        className="block md:hidden text-bright-one focus:outline-none relative z-30"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Logo */}
      <Link
        href="/"
        className="col-span-3 flex justify-center md:justify-start"
      >
        <Image
          src={logo}
          alt="logo"
          width={143}
          height={67}
          className="max-lg:w-[100px] max-lg:h-[60px] object-contain"
        />
      </Link>

      {/* Navigation Links (Hidden on Mobile) */}
      <ul className="hidden md:flex col-span-3 justify-end items-center gap-4 text-bright-one font-semibold w-full">
        {filteredLinks?.map((link, index) => (
          <li
            key={index}
            className="text-lg md:text-base lg:text-lg hover:underline hover:text-accent-color"
          >
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu (Full-screen overlay) */}
      <div
        className={`fixed inset-0 bg-gradient-to-r from-dark-one to-dark-two z-20 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <ul className="flex flex-col-reverse items-center justify-center h-full gap-8 text-bright-one font-bold">
          {links?.importantLinks?.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="text-4xl hover:text-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
