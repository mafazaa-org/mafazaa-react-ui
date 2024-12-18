declare function Button({ backgroundOrBorderColor, textColor, text, type, link, }: ButtonProps): any;
export default Button;
export type ButtonProps = {
    link: string;
    backgroundOrBorderColor: string;
    textColor: string;
    text: string;
    type: "fill" | "outline";
};
//# sourceMappingURL=Button.d.ts.map