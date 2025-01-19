import { ButtonProps } from "./Button";
import { StaticImageData } from "next/image";
export type CenterSectionProps = {
    backgroundImage: string | StaticImageData;
    textColor: string;
    title: string;
    description: string;
    buttons: ButtonProps[];
};
declare function CenterSection({ backgroundImage, textColor, title, description, buttons, }: CenterSectionProps): import("react/jsx-runtime").JSX.Element;
export default CenterSection;
//# sourceMappingURL=CenterSection.d.ts.map