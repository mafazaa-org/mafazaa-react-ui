import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import SideSection from "./SideSection";
import CenterSection from "./CenterSection";
const Section = ({ type, payload }) => {
    return type == "center" ? (_jsx(CenterSection, Object.assign({}, payload))) : (_jsx(SideSection, Object.assign({}, payload)));
};
export default Section;
