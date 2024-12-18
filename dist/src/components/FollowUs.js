"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from "next/link";
import Image from "next/image";
import group1 from "@/assets/Group 1.svg";
import group2 from "@/assets/Group 2.svg";
function FollowUs({ links }) {
    var _a;
    return (_jsxs("section", { className: "bg-gradient-to-r from-dark-one to-dark-two text-bright-one text-center rounded-xl\r\n          mx-4 md:mx-8 lg:mx-32 my-16 py-10 relative  flex flex-col\r\n          after:content-['']\r\n          after:absolute\r\n          after:left-1/4\r\n          after:-bottom-10\r\n          lg:after:-bottom-20\r\n          after:w-1/2\r\n          after:h-[0.5px]\r\n          after:block\r\n        after:bg-black", children: [_jsx(Image, { src: group1, alt: "icon", width: 325, height: 240, className: "absolute hidden md:block left-0 top-0 w-fit md:h-full" }), _jsx("h1", { className: "mb-6 text-2xl lg:text-5xl font-bold", children: "\u0644\u0627 \u062A\u062F\u0639 \u0627\u0644\u0645\u0647\u0645 \u064A\u0641\u0648\u062A\u0643!" }), _jsx("p", { className: "mb-16 text-base lg:text-2xl font-medium", children: "\u062A\u0627\u0628\u0639\u0646\u0627 \u0639\u0644\u0649 \u0635\u0641\u062D\u0627\u062A\u0646\u0627 \u0644\u062A\u0635\u0644\u0643 \u0645\u0634\u0627\u0631\u064A\u0639\u0646\u0627 \u0648 \u0645\u0646\u062A\u062C\u0627\u062A\u0646\u0627 \u0627\u0644\u062C\u062F\u064A\u062F\u0629 \u0628\u0625\u0630\u0646 \u0627\u0644\u0644\u0647" }), _jsx("ul", { className: "mx-auto flex flex-row-reverse items-center justify-center gap-6 lg:gap-16", children: (_a = links === null || links === void 0 ? void 0 : links.socialLinks) === null || _a === void 0 ? void 0 : _a.map((social, index) => (_jsx("li", { children: _jsx(Link, { href: social === null || social === void 0 ? void 0 : social.href, target: "_blank", children: _jsx(Image, { src: social.src, alt: social.alt, width: 40, height: 40, className: "w-6 lg:w-10" }) }) }, index))) }), _jsx(Image, { src: group2, alt: "icon", width: 325, height: 240, className: "absolute hidden md:block right-0 bottom-0 w-fit md:h-full" })] }));
}
export default FollowUs;
