import Link from "next/link";
import React from "react";

function Button({
  backgroundOrBorderColor,
  textColor,
  text,
  type,
  link,
}: ButtonProps) {
  return (
    <Link href={link}>
      <button
        aria-label={text}
        className={`font-bold text-base rounded-lg min-w-52 
          ${
            type === "outline"
              ? `bg-transparent py-[14.5px] px-[45px]`
              : "py-[17.5px] px-[48px]"
          }
          `}
        style={{
          color: textColor || "#fafafa",
          backgroundColor:
            type === "fill" ? backgroundOrBorderColor : "transparent",
          border:
            type !== "fill"
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
  link: string;
  backgroundOrBorderColor: string;
  textColor: string;
  text: string;
  type: "fill" | "outline";
};
