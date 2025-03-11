import React from "react";
import Button, { ButtonProps } from "./Button";
import { StaticImageData } from "next/image";

export type CenterSectionProps = {
  backgroundImage: string | StaticImageData;
  textColor: string;
  title: string;
  description: string;
  buttons: ButtonProps[];
};

function CenterSection({
  backgroundImage,
  textColor,
  title,
  description,
  buttons,
}: CenterSectionProps) {
  const backgroundImageUrl =
    typeof backgroundImage === "string" ? backgroundImage : backgroundImage.src;
  return (
    <section
      className={`py-24 min-h-screen w-full object-cover bg-no-repeat bg-cover bg-center 
      relative overflow-hidden flex items-center justify-center z-10 before:content-[''] bg-centerSectionBg
      before:absolute
      before:inset-0
      before:block
      before:bg-black
      before:opacity-65
      before:z-[-5]
      `}
      style={{
        color: textColor,
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-center lg:mt-16 py-8 flex flex-col gap-2 lg:gap-4 max-lg:px-4">
        <h1
          className={`text-lg sm:text-xl md:text-3xl lg:text-[64px] mb-0 lg:mb-8 font-bold`}
        >
          {title}
        </h1>
        <h4
          className={`text-xs md:text-2xl font-normal md:font-bold lg:font-extrabold whitespace-pre-wrap mb-10`}
        >
          {description}
        </h4>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 ">
          {buttons.map((button, index) => (
            <Button {...button} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CenterSection;
