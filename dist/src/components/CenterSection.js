import { createElement as _createElement } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from "./Button";
function CenterSection({ backgroundImage, textColor, title, description, buttons, }) {
    return (_jsx("section", { className: `py-24 min-h-screen w-full object-cover bg-no-repeat bg-cover bg-center 
      relative overflow-hidden flex items-center justify-center z-10 before:content-['']
      before:absolute
      before:inset-0
      before:block
      before:bg-black
      before:opacity-65
      before:z-[-5]
      `, style: {
            color: textColor,
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }, children: _jsxs("div", { className: "text-center lg:mt-16 py-8 flex flex-col gap-2 lg:gap-4 max-lg:px-4", children: [_jsx("h1", { className: `text-lg sm:text-xl md:text-3xl lg:text-[64px] mb-0 lg:mb-8 font-bold`, children: title }), _jsx("h4", { className: `text-xs md:text-2xl font-normal md:font-bold lg:font-extrabold whitespace-pre-wrap mb-10`, children: description }), _jsx("div", { className: "flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 ", children: buttons.map((button, index) => (_createElement(Button, Object.assign({}, button, { key: index })))) })] }) }));
}
export default CenterSection;
