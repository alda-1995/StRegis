'use client';
import { useState } from 'react';
import InputMask from "react-input-mask"
import { Controller } from 'react-hook-form'

export default function InputPhone({ placeholder, errors, name, control, textRequired = ""}) {
    const [activeText, setActiveText] = useState(false); 
    function handleTextChange(text) {
        setActiveText((text == "") ? false : true);
    }
    function handleFocus() {
        setActiveText(true);
    }   
    function handleBlur(text) {
        if(!text){
            setActiveText(false);
        }
    }
    return (
        <>
            <div className={`flex flex-col relative w-full ${errors[name] ? "mb-1" : "mb-6"}`}>
                <Controller
                    control={control}
                    name="phone"
                    defaultValue={false}
                    rules={{
                        required: `${textRequired}`,
                        minLength: {
                            value: 12,
                            message: "Invalid phone"
                        }
                    }}
                    render={({ field }) => <InputMask
                        mask="999 999 9999"
                        inputMode="numeric"
                        maskChar={null}
                        type="text"
                        className={`w-full py-2 font-btn outline-none border-b-[0.8px] bg-transparent  ${errors[name] ? "border-b-red" : "border-b-astro-gray"}`}
                        value={field.value}
                        onChange={(e) => {
                            field.onChange(e);
                            handleTextChange(e.target.value);
                        }}
                        onBlur={(e) => {
                            handleBlur(e.target.value);
                        }}
                        onFocus={(e) => {
                            handleFocus();
                        }}
                    />
                    }
                />
                <label htmlFor={name} className={`transition-all duration-300 font-btn absolute uppercase pointer-events-none
                ${errors[name] ? "text-red" : "text-astro-gray"}
                top-1/2 -translate-y-1/2 text-astro-gray ${(activeText) ? "!-top-3 translate-y-0" : "" }`}>{placeholder	}</label>
            </div>
            {errors[name] &&
                <span className="text-red small whitespace-nowrap mb-6 block">
                    {errors[name].message}
                </span>
            }
        </>
    )
}