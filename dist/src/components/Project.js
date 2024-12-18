import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from "next/link";
const Project = ({ title, description, en }) => {
    return (_jsxs("div", { className: "flex flex-col items-center overflow-hidden  ", children: [_jsx(Link, { href: `https://${en}.mafazaa.com`, className: "w-full", children: _jsx("div", { className: "w-full h-56 md:h-80 bg-black flex items-center justify-center rounded-lg", children: _jsx("h2", { className: "text-bright-one font-bold text-2xl md:text-3xl lg:text-5xl ", children: title }) }) }), _jsx("div", { className: "p-6 text-center", children: _jsx("p", { className: "text-black text-base md:text-lg lg:text-2xl font-bold mb-4 text-right tracking-wide ", children: description }) })] }));
};
export default Project;
