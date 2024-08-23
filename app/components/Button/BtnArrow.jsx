import Link from "next/link"
export default function BtnArrow({ email = "", phone = "", text = "", type = "" }) {
    const properties = `
    duration-300
    font-btn
    inline-flex 
    items-center
    disabled:opacity-[0.8]
    disabled:pointer-events-none
    relative
    text-black
    uppercase
    hover:text-king-red
    group
    `;
    return (
        {
            "phone": (
                <Link href={`tel:${phone}`} className={`${properties}`}>
                    <div className="mr-4 group-hover:translate-x-2 duration-300 transition-all">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6.25c0 .928.916 2.313 1.844 3.475 1.192 1.5 2.617 2.809 4.251 3.808C27.32 14.28 28.805 15 30 15m0 0c-1.195 0-2.681.719-3.905 1.468-1.634 1-3.059 2.308-4.251 3.806C20.916 21.437 20 22.825 20 23.75M30 15H0" stroke="#FF674C" />
                        </svg>
                    </div>
                    {text}
                </Link>
            ),
            "email": (
                <Link href={`mailto:${email}`} className={`${properties}`}>
                    <div className="mr-4 group-hover:translate-x-2 duration-300 transition-all">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6.25c0 .928.916 2.313 1.844 3.475 1.192 1.5 2.617 2.809 4.251 3.808C27.32 14.28 28.805 15 30 15m0 0c-1.195 0-2.681.719-3.905 1.468-1.634 1-3.059 2.308-4.251 3.806C20.916 21.437 20 22.825 20 23.75M30 15H0" stroke="#FF674C" />
                        </svg>
                    </div>
                    {text}
                </Link>
            ),
        }[type]
    )
}