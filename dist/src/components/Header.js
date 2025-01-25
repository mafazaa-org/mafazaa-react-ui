"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
function Header({ links, logo, show = false, }) {
    var _a, _b, _c;
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSpecialRoute, setIsSpecialRoute] = useState(false);
    const filteredLinks = (_a = links === null || links === void 0 ? void 0 : links.importantLinks) === null || _a === void 0 ? void 0 : _a.filter((link) => (link === null || link === void 0 ? void 0 : link.text) !== "الرئيسية" && link.text !== "تواصل معنا");
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    useEffect(() => {
        setIsSpecialRoute(pathname === "/contact");
    }, [pathname]);
    return (_jsxs("header", { className: `flex md:grid grid-cols-9 items-center justify-between md:justify-items-center px-6 py-4 md:px-12 lg:px-32 fixed top-0 w-full z-20 transition-colors duration-300 h-16 md:h-20 lg:h-24 ${show || isScrolled || isSpecialRoute
            ? "bg-gradient-to-r from-dark-one to-dark-two"
            : "bg-transparent"}`, children: [_jsx("ul", { className: `hidden md:flex justify-start items-center gap-6 w-full col-span-3`, children: (_b = links === null || links === void 0 ? void 0 : links.socialLinks) === null || _b === void 0 ? void 0 : _b.map((social, index) => (_jsx("li", { children: _jsx(Link, Object.assign({ target: "_blank" }, social, { children: _jsx(Image, Object.assign({}, social, { width: 27, height: 27, alt: social.alt })) })) }, index))) }), _jsx("button", { className: "block md:hidden text-bright-one focus:outline-none relative z-20", onClick: () => setIsMenuOpen(!isMenuOpen), children: _jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: isMenuOpen ? (_jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" })) : (_jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" })) }) }), _jsx(Link, { href: "/", className: "col-span-3", children: _jsx(Image, { src: logo, alt: "logo", width: 143, height: 67, className: "max-lg:w-[67px] max-lg:h-[32px] object-contain " }) }), _jsx("ul", { className: `hidden md:flex col-span-3 justify-end items-center gap-4 text-bright-one font-semibold w-full`, children: filteredLinks === null || filteredLinks === void 0 ? void 0 : filteredLinks.map((link, index) => (_jsx("li", { className: "text-base hover:underline hover:text-accent-color", children: _jsx(Link, { href: link.href, children: link.text }) }, index))) }), isMenuOpen && (_jsx("ul", { className: "md:hidden bg-gradient-to-r from-dark-one to-dark-two px-6 py-4 z-10 fixed left-0 top-0 w-full h-screen flex flex-col-reverse items-center justify-center", children: (_c = links === null || links === void 0 ? void 0 : links.importantLinks) === null || _c === void 0 ? void 0 : _c.map((link, index) => (_jsx("li", { className: "py-2", children: _jsx(Link, { href: link.href, className: "text-bright-one font-bold hover:text-gray-200", children: link.text }) }, index))) }))] }));
}
export default Header;
