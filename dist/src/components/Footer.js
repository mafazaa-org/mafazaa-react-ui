"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const textColor = "text-bright-one";
const afterborder = "relative after:bg-accent-color after:h-[1px] after:w-2/3 after:absolute after:bottom-0 after:right-0";
function Footer({ links, projects, logo, }) {
    const [isSpecialRoute, setIsSpecialRoute] = useState(false);
    const columns = [
        {
            title: "روابط مهمة",
            links: links.importantLinks,
        },
        {
            title: "مشاريعنا",
            links: projects.map((project) => ({
                href: `https://${project.en}.mafazaa.com`,
                label: project === null || project === void 0 ? void 0 : project.title,
            })),
        },
    ];
    return (_jsx("footer", { className: `w-full ${isSpecialRoute
            ? "bg-[#030B27]"
            : "bg-gradient-to-r from-dark-one to-dark-two"} ${textColor} text-right`, children: _jsxs("div", { className: `flex flex-col-reverse md:grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 lg:gap-20 px-6 md:px-12 lg:px-32 pb-8 pt-10 md:pt-20 md:pb-16`, children: [_jsxs("div", { className: "flex flex-col items-center text-center md:items-end md:text-right md:w-full gap-4 md:gap-6 col-span-12 md:col-span-4  lg:col-span-4", children: [_jsx("h3", { className: `text-2xl lg:text-3xl font-bold ${afterborder} pb-2 lg:pb-4`, children: "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627" }), _jsx("a", { target: "_blank", className: "text-lg lg:text-xl font-bold border-b border-bright-one pb-2 lg:pb-4", href: `mailto:${links.support}`, children: links.support }), _jsx("ul", { className: "flex flex-wrap items-center justify-center gap-4 lg:gap-6", children: links.socialLinks.map((social, index) => (_jsx("li", { children: _jsx(Link, { href: social.href, target: "_blank", children: _jsx(Image, { src: social.src, alt: social.alt, width: 27, height: 27 }) }) }, index))) })] }), _jsx("div", { className: "flex flex-col items-center text-center md:items-start md:text-right md:flex-row gap-10 col-span-12 md:col-span-6 lg:col-span-5", children: columns.map((column, index) => {
                        var _a;
                        return (_jsxs("div", { className: "flex flex-col gap-4 lg:gap-6 min-h-full", children: [_jsx("h3", { className: `text-2xl lg:text-3xl font-bold ${afterborder} pb-2 lg:pb-4`, children: column === null || column === void 0 ? void 0 : column.title }), _jsx("ul", { className: "flex flex-col justify-end gap-2 lg:gap-4 text-base font-bold", children: (_a = column === null || column === void 0 ? void 0 : column.links) === null || _a === void 0 ? void 0 : _a.map((link, linkIndex) => (_jsx("li", { className: "hover:underline hover:text-accent-color", children: _jsx(Link, { href: link === null || link === void 0 ? void 0 : link.href, children: (link === null || link === void 0 ? void 0 : link.label) || (link === null || link === void 0 ? void 0 : link.text) }) }, linkIndex))) })] }, index));
                    }) }), _jsx("div", { className: "flex items-center justify-center col-span-12 md:col-span-2 lg:col-span-3", children: _jsx(Link, { href: "/", children: _jsx(Image, { src: logo, alt: "logo", className: "object-contain" }) }) })] }) }));
}
export default Footer;
