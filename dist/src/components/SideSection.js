import { createElement as _createElement } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import Button from "./Button";
function SideSection({ imageSrc, title, description, buttons, textColor, reverse, }) {
    return (_jsxs("div", { className: `flex gap-6 lg:gap-0 ${reverse
            ? "flex-col lg:flex-row-reverse"
            : "flex-col-reverse lg:flex-row"} mt-20 mb-10 py-10 lg:py-20 relative 
          after:content-['']
          after:absolute
          after:left-1/4
          after:bottom-0
          after:w-1/2
          after:h-[0.5px]
          after:block
        after:bg-black`, children: [_jsx("div", { className: "max-lg:flex max-lg:items-center max-lg:justify-center flex-1 lg:w-1/2 relative \r\n          before:content-['']\r\n          before:w-2/5\r\n          before:h-1/2\r\n          before:absolute\r\n          before:left-4\r\n          lg:before:left-1/4\r\n          before:-top-1/4\r\n          before:block\r\n        before:bg-accent-color\r\n          before:rounded-lg\r\n          before:opacity-40\r\n          before:-z-10\r\n          before:blur-[1px]\r\n          ", children: _jsx(Image, { src: imageSrc, alt: title, width: 400, height: 400, className: "object-cover rounded-lg max-lg:w-3/4" }) }), _jsxs("div", { style: { color: textColor }, className: "flex-1 lg:w-1/2 flex flex-col items-start justify-center gap-4 px-4 lg:pr-28", children: [_jsx("h2", { className: `text-xl  md:text-3xl lg:text-5xl w-4/5 font-bold mb-4`, children: title }), _jsx("p", { className: "text-xs sm:text-sm md:text-lg lg:text-2xl font-bold mb-4 w-4/5 text-right", children: description }), _jsx("div", { className: "flex items-center justify-center gap-4", children: buttons.map((button, index) => (_createElement(Button, Object.assign({}, button, { key: index })))) })] })] }));
}
export default SideSection;
