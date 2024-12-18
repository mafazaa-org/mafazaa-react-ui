import { SideSectionProps } from "./SideSection";
import { CenterSectionProps } from "./CenterSection";
declare const Section: ({ type, payload }: SectionProps) => any;
export default Section;
export type SectionProps = {
    type: "side" | "center";
    payload: CenterSectionProps | SideSectionProps;
};
//# sourceMappingURL=Section.d.ts.map