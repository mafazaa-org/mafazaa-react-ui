import { jsx as _jsx } from "react/jsx-runtime";
import Link from "next/link";
function Button({ text, link = "/", fill = true, textColor = "#f2f2f2", backgroundOrBorderColor = "#18cad3", }) {
    return (_jsx(Link, { href: link, children: _jsx("button", { "aria-label": text, className: `font-bold text-base rounded-lg min-w-52
          ${!fill
                ? `bg-transparent py-[14.5px] px-[45px]`
                : "py-[17.5px] px-[48px]"}
          `, style: {
                color: textColor,
                backgroundColor: fill ? backgroundOrBorderColor : "transparent",
                border: !fill
                    ? `3px ${backgroundOrBorderColor} solid`
                    : "transparent",
            }, children: _jsx("h4", { children: text }) }) }));
}
export default Button;
