import Link from "next/link"

export default function Btn({ children, disabled = false, submit = "button", action = () => { }, correo = "",
    url = false, href = "/", properties, type = "Btn", onEnter = () => { }, archivo = null }) {
    const linkArchivo = (archivo) ? archivo.mediaItemUrl : "";
    return (
        {
            "page": (
                <Link onMouseMoveCapture={onEnter} disabled={disabled} href={url} className={`${properties}`} >
                    {children}
                </Link>
            ),
            "url": (
                <Link onMouseMoveCapture={onEnter} disabled={disabled} href={href} className={`${properties}`} rel="noopener noreferrer" target="_blank">
                    {children}
                </Link>
            ),
            "file": (
                <Link onMouseMoveCapture={onEnter} disabled={disabled}
                    href={linkArchivo} className={`${properties}`} rel="noopener noreferrer" target="_blank">
                    {children}
                </Link>
            ),
            "btn": (
                <button onMouseMoveCapture={onEnter} disabled={disabled} className={`${properties}`} onClick={action} type="button">
                    {children}
                </button>
            ),
            "submit": (
                <button className={`${properties}`} type="submit" disabled={disabled}>
                    {children}
                </button>
            ),
            "email": (
                <Link href={`mailto:${correo}`} className={`${properties}`} rel="noopener noreferrer" target="_blank">
                    {children}
                </Link>
            ),
        }[type]
    )
}
