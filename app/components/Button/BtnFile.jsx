import Link from "next/link"
export default function BtnFile({ linkArchivo, texto }) {
    return (
        <Link className="font-btn uppercase px-4 text-center justify-center text-green flex items-center h-[50px]" href={linkArchivo} rel="noopener noreferrer" target="_blank">
            {texto}
        </Link>
    )
}