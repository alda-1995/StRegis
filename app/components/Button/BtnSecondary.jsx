import Btn from "@/app/components/Button/Btn";

export default function BtnSecondary({ data, styleType = "default",
    typeIcon = "default", disabled = false, className = "", action = () => { } }) {
    const { texto, tipo, url, pagina, archivo } = data

    const styleBtn = {
        borderWhite: "border-white bg-white text-gray md:text-white md:bg-transparent hover:bg-white hover:text-gray",
        default: "border-red-light text-white bg-king-red md:bg-transparent md:text-king-red hover:bg-king-red hover:text-white"
    };

    const properties = `
    btn
    py-3
    px-6 md:px-8
    transition-all
    duration-300
    font-btn
    h-[44px] md:h-[50px]
    min-w-[150px] lg:min-w-[200px]
    inline-flex 
    justify-center
    text-center
    items-center
    disabled:opacity-[0.8]
    disabled:pointer-events-none
    relative
    border-[0.75px]
    uppercase
    group
    `;

    const iconBtn = {
        "default": (
            <svg width="24" height="24" className="h-[20px] w-[20px] transition-all duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#m699yrkf0a)">
                    <path className="fill-gray md:fill-white group-hover:fill-gray" d="M5.58 24.16a.564.564 0 0 1-.58-.58.564.564 0 0 1 .58-.58h12.75a.564.564 0 0 1 .58.58.564.564 0 0 1-.58.58H5.58z" fill="#fff" />
                    <path className="stroke-gray md:stroke-white group-hover:stroke-gray" d="M19 11.79c-.742 0-1.85.843-2.78 1.698a14.595 14.595 0 0 0-3.046 3.915C12.575 18.532 12 19.9 12 21m0 0c0-1.1-.575-2.47-1.174-3.597a14.652 14.652 0 0 0-3.045-3.915C6.85 12.633 5.74 11.79 5 11.79M12 21V0" stroke="#fff" />
                </g>
                <defs>
                    <clipPath id="m699yrkf0a">
                        <path fill="#fff" d="M0 0h24v24H0z" />
                    </clipPath>
                </defs>
            </svg>
        ),
        "downloadRed": (
            <svg width="24" height="24" className="h-[20px] w-[20px] transition-all duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#j1j00m9dba)">
                    <path className="fill-white md:fill-king-red group-hover:fill-white" d="M5.58 24.16a.564.564 0 0 1-.58-.58.564.564 0 0 1 .58-.58h12.75a.564.564 0 0 1 .58.58.564.564 0 0 1-.58.58H5.58z" fill="#FF674C" />
                    <path className="stroke-white md:stroke-king-red group-hover:stroke-white" d="M19 11.79c-.742 0-1.85.843-2.78 1.698a14.595 14.595 0 0 0-3.046 3.915C12.575 18.532 12 19.9 12 21m0 0c0-1.1-.575-2.47-1.174-3.597a14.652 14.652 0 0 0-3.045-3.915C6.85 12.633 5.74 11.79 5 11.79M12 21V0" stroke="#FF674C" />
                </g>
                <defs>
                    <clipPath id="j1j00m9dba">
                        <path fill="#fff" d="M0 0h24v24H0z" />
                    </clipPath>
                </defs>
            </svg>

        )
    }

    return (
        <>
            <Btn action={action}
                properties={`${properties} ${className} ${styleBtn[styleType]}`}
                href={url} url={pagina} archivo={archivo} type={tipo} disabled={disabled}>
                <div className="mr-2">
                    {iconBtn[typeIcon]}
                </div>
                {texto}
            </Btn>
        </>
    )
}