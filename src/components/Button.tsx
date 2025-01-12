import Link from "next/link";
import React from "react";

function Button({
  text,
  link = "/",
  fill = true,
  textColor = "#f2f2f2",
  backgroundOrBorderColor = "#18cad3",
}: ButtonProps) {
  return (
    <Link href={link}>
      <button
        aria-label={text}
        className={`font-bold text-base rounded-lg min-w-52
          ${
            !fill
              ? `bg-transparent py-[14.5px] px-[45px]`
              : "py-[17.5px] px-[48px]"
          }
          `}
        style={{
          color: textColor,
          backgroundColor: fill ? backgroundOrBorderColor : "transparent",
          border: !fill
            ? `3px ${backgroundOrBorderColor} solid`
            : "transparent",
        }}
      >
        <h4>{text}</h4>
      </button>
    </Link>
  );
}

export default Button;

export type ButtonProps = {
  text: string;
  link?: string;
  fill?: boolean;
  textColor?: string;
  backgroundOrBorderColor?: string;
};
