"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
const googleFormEntries = {
    name: "363973468",
    phone: "352758841",
    email: "1290881859",
    category: "11630139",
    message: "1905445608",
};
const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        category: "",
        message: "",
    });
    const [MsgPlaceholder, setMsgPlaceholder] = useState("اكتب رسالتك هنا");
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submissionMessage, setSubmissionMessage] = useState("");
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "category") {
            setMsgPlaceholder(value === "contribute" ? "كيف تود أن تساهم معنا" : "كيف نساعدك");
        }
        setFormData((prevData) => (Object.assign(Object.assign({}, prevData), { [name]: value })));
        setErrors((prevErrors) => (Object.assign(Object.assign({}, prevErrors), { [name]: "" })));
        setIsSubmitted(false);
    };
    const validateForm = () => {
        const newErrors = {};
        if (!formData.name)
            newErrors.name = "الاسم مطلوب";
        if (!formData.phone)
            newErrors.phone = "رقم الهاتف مطلوب";
        if (!formData.email)
            newErrors.email = "البريد الإلكتروني مطلوب";
        if (!formData.category)
            newErrors.category = "الرجاء اختيار فئة";
        if (!formData.message)
            newErrors.message = "الرسالة مطلوبة";
        return newErrors;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
        let url = "https://docs.google.com/forms/d/e/1FAIpQLSc14podGZFjpmWE4Sc4Z5GOIlLSSF2ZbeqsoKFbLg-MsWBmVA/formResponse?submit=Submit&usp=pp_url";
        for (let key of Object.keys(formData)) {
            url += `&entry.${googleFormEntries[key]}=${formData[key]}`;
        }
        try {
            await fetch(url, {
                method: "POST",
                mode: "no-cors",
            });
            setFormData({
                name: "",
                phone: "",
                email: "",
                category: "",
                message: "",
            });
            setSubmissionMessage("تم إرسال الرسالة بنجاح! شكراً لك.");
            setIsSubmitted(true);
        }
        catch (error) {
            setSubmissionMessage("حدث خطأ أثناء إرسال الرسالة. حاول مرة أخرى.");
            setIsSubmitted(true);
            console.error("Error submitting the form:", error);
        }
    };
    useEffect(() => {
        const isValid = formData.name &&
            formData.phone &&
            formData.email &&
            formData.category &&
            formData.message;
        setIsFormValid(Boolean(isValid));
    }, [formData]);
    return (_jsxs("div", { className: `max-w-lg lg:max-w-xl px-6 lg:px-0 mx-auto py-20`, children: [_jsx("h1", { className: "text-center text-2xl lg:text-[40px] font-bold mb-3", children: "\u0633\u0627\u0647\u0645 \u0627\u0648 \u0627\u0637\u0644\u0628 \u0645\u0633\u0627\u0639\u062F\u0629" }), _jsx("p", { className: "text-center font-medium text-base lg:text-[20px] mb-8", children: "\u062A\u0641\u0636\u0644 \u0627\u062E\u064A \u0648 \u0627\u0639\u0631\u0636 \u0639\u0644\u064A\u0646\u0627 \u0645\u0627 \u0639\u0646\u062F\u0643 \u0648 \u0623\u0641\u062F\u0646\u0627 \u062C\u0632\u0627\u0643 \u0627\u0644\u0644\u0647 \u0639\u0646\u0627 \u062E\u064A\u0631 \u0627\u0644\u062C\u0632\u0627\u0621" }), _jsxs("form", { dir: "rtl", onSubmit: handleSubmit, className: "space-y-4", children: [_jsxs("div", { className: "w-full flex flex-col lg:flex-row gap-6 ", children: [_jsx("input", { type: "text", name: "name", "aria-label": "\u0627\u0644\u0627\u0633\u0645", placeholder: "\u0627\u0644\u0627\u0633\u0645", value: formData.name, onChange: handleChange, className: "w-full lg:w-1/2 px-4 py-2.5 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 placeholder:text-[#afafaf] bg-[#f5f5f5] text-black lg:font-bold placeholder:lg:font-bold" }), errors.name && _jsx("p", { className: "text-red-500", children: errors.name }), _jsx("input", { type: "text", name: "phone", "aria-label": "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641", placeholder: "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641", value: formData.phone, onChange: handleChange, className: "w-full lg:w-1/2 px-4 py-2.5 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 placeholder:text-[#afafaf] bg-[#f5f5f5] text-black lg:font-bold placeholder:lg:font-bold" }), errors.phone && _jsx("p", { className: "text-red-500", children: errors.phone })] }), _jsx("input", { type: "email", name: "email", "aria-label": "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A", placeholder: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A", value: formData.email, onChange: handleChange, className: "w-full px-4 py-2.5 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 placeholder:text-[#afafaf] bg-[#f5f5f5] text-black lg:font-bold placeholder:lg:font-bold" }), errors.email && _jsx("p", { className: "text-red-500", children: errors.email }), _jsxs("select", { name: "category", "aria-label": "\u0641\u0626\u0629", value: formData.category, onChange: handleChange, className: "w-full px-4 py-2.5 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 placeholder:text-[#afafaf] bg-[#f5f5f5] text-[#afafaf] lg:font-bold placeholder:lg:font-bold", children: [_jsx("option", { value: "", children: "\u0645\u0627\u0630\u0627 \u062A\u0648\u062F \u0623\u0646 \u062A\u0641\u0639\u0644" }), _jsx("option", { value: "help", children: "\u0637\u0644\u0628 \u0645\u0633\u0627\u0639\u062F\u0629" }), _jsx("option", { value: "contribute", children: "\u0645\u0633\u0627\u0647\u0645\u0629" })] }), errors.category && _jsx("p", { className: "text-red-500", children: errors.category }), _jsx("textarea", { name: "message", "aria-label": "\u0627\u0644\u0631\u0633\u0627\u0644\u0629", placeholder: MsgPlaceholder, value: formData.message, onChange: handleChange, className: "w-full px-4 py-2.5 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 placeholder:text-[#afafaf] bg-[#f5f5f5] text-black lg:font-bold placeholder:lg:font-bold", rows: 4 }), errors.message && _jsx("p", { className: "text-red-500", children: errors.message }), _jsx("button", { type: "submit", className: `w-full px-4 py-2.5 border border-[#D9D9D9] rounded-lg bg-purple-600 text-white lg:font-bold placeholder:lg:font-bold shadow active:shadow-inner hover:bg-purple-700 ${!isFormValid ? "opacity-50 cursor-not-allowed" : ""}`, disabled: !isFormValid, children: "\u0627\u0631\u0633\u0627\u0644" }), isSubmitted && (_jsx("p", { className: "text-center text-green-500 mt-4", children: submissionMessage }))] })] }));
};
export default Form;
