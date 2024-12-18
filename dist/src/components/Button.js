import { jsx as _jsx } from "react/jsx-runtime";
import Link from "next/link";
import React from "react";
function Button({ backgroundOrBorderColor, textColor, text, type, link, }) {
    return (_jsx(Link, { href: link, children: _jsx("button", { "aria-label": text, className: `font-bold text-base rounded-lg min-w-52 
          ${type === "outline"
                ? `bg-transparent py-[14.5px] px-[45px]`
                : "py-[17.5px] px-[48px]"}
          `, style: {
                color: textColor || "#fafafa",
                backgroundColor: type === "fill" ? backgroundOrBorderColor : "transparent",
                border: type !== "fill"
                    ? `3px ${backgroundOrBorderColor} solid`
                    : "transparent",
            }, children: _jsx("h4", { children: text }) }) }));
}
export default Button;
