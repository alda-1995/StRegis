'use client'
import Btn from "@/app/components/Button/Btn";
export default function BtnPrimary({ data, styleType = "default", disabled = false, correo = "", className = "", action = () => { } }) {
    const { texto, tipo, url, pagina, archivo } = data

    const styleBtn = {
        borderGrayRounded: "border-astro-gray border-[0.75px] text-king-red rounded-b",
        borderGrayRoundedWhite: "bg-white border-astro-gray border-[0.75px] text-king-red rounded-b",
        notBorderGrayRounded: `border-astro-gray border-t-[0.75px] md:rounded-b
        border-l-[0.75px] md:border-r-0 border-r-[0.75px] md:border-b-[0.75px] text-king-red`,
        borderWhite: "border-[0.75px] border-white text-white hover:bg-king-red hover:text-white hover:border-king-red",
        default: "border-[0.75px] border-king-red bg-king-red text-white md:bg-transparent md:text-king-red hover:bg-king-red hover:text-white",
        normal: "border-[0.75px] border-red-light text-king-red hover:bg-king-red hover:text-white",
        borderGray: "border-astro-gray border-[0.75px] text-astro-gray",
    };

    const properties = `
    btn
    py-3
    px-6 md:px-8
    duration-300
    transition-all
    font-btn
    h-[44px] md:h-[50px]
    min-w-[150px] lg:min-w-[200px]
    inline-flex 
    justify-center
    items-center
    text-center
    disabled:opacity-[0.8]
    disabled:pointer-events-none
    relative
    uppercase
    `;

    return (
        <>
            <Btn action={action}
                correo={correo}
                properties={`${properties} ${className} ${styleBtn[styleType]}`}
                href={url} url={pagina} archivo={archivo} type={tipo} disabled={disabled}>
                {texto}
            </Btn>
        </>
    )
}