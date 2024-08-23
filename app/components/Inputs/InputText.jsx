'use client';
import { useState } from 'react';

export default function InputText({ placeholder, name, errors, register, disabled = false, patern = {}, textRequired = "" }) {

    const [activeText, setActiveText] = useState(false);
    function handleTextChange(text) {
        setActiveText((text == "") ? false : true);
    }
    function handleFocus() {
        setActiveText(true);
    }
    function handleBlur(text) {
        if (!text) {
            setActiveText(false);
        }
    }
    return (
        <>
            <div className={`flex flex-col relative w-full ${errors[name] ? "mb-1" : "mb-6"}`}>
                <input
                    className={`w-full py-2 font-btn outline-none border-b-[0.8px] bg-transparent ${errors[name] ? "border-b-red" : "border-b-astro-gray"}`}
                    type="text"
                    disabled={disabled}
                    onFocus={(e) => { handleFocus(e) }}
                    id={name}
                    {...register(name, {
                        required: `${textRequired}`,
                        onChange: (e) => { handleTextChange(e.target.value) },
                        onBlur: (e) => { handleBlur(e.target.value) },
                        pattern: patern
                    })}
                />
                <label htmlFor={name} className={`transition-all duration-300 font-btn absolute uppercase pointer-events-none
             ${errors[name] ? "text-red" : "text-astro-gray"}
            top-1/2 -translate-y-1/2 text-astro-gray ${(activeText) ? "!-top-3 translate-y-0" : ""}`}>{placeholder}</label>
            </div>
            {errors[name] &&
                <span className="text-red small whitespace-nowrap mb-6 block">
                    {errors[name].message}
                </span>
            }
        </>
    )
}
