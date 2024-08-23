import Link from "next/link"
import IconWhatsapp from '@/public/whatsapp.png';
import IconWhatsappRed from '@/public/whatsapp-red.png';
import Image from "next/image";

export default function BtnWhatsapp({ typeIcon = "default", properties = "", numberPhone = "" }) {
    const iconBtn = {
        "default": IconWhatsapp,
        "redWhatsapp": IconWhatsappRed
    }
    return (
        <>
            {
                numberPhone && (
                    <Link href={`https://api.whatsapp.com/send?phone=${numberPhone}`} rel="noopener noreferrer" target="_blank" className={`inline-block ${properties}`}>
                        <svg className="w-8 h-8 group transition-all duration-300"  width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="fill-astro-gray group-hover:fill-greenWhatsapp" d="m0 31.41 2.226-8.27A15.28 15.28 0 0 1 .62 12.555a15.31 15.31 0 0 1 5.739-9.05 15.381 15.381 0 0 1 20.073 1.297 15.287 15.287 0 0 1 1.56 20.004 15.357 15.357 0 0 1-8.997 5.841A15.389 15.389 0 0 1 8.36 29.181L0 31.411zm8.764-5.323.517.306a12.435 12.435 0 0 0 15.03-1.824 12.352 12.352 0 0 0 2.075-14.96 12.399 12.399 0 0 0-5.99-5.284 12.439 12.439 0 0 0-7.979-.542 12.411 12.411 0 0 0-6.653 4.425A12.357 12.357 0 0 0 3.2 15.763a12.215 12.215 0 0 0 1.814 6.416l.324.534-1.244 4.615 4.67-1.241z" fill="#00D95F" />
                            <path className="fill-astro-gray group-hover:fill-greenWhatsapp" fill-rule="evenodd" clip-rule="evenodd" d="M21.313 17.887a2.563 2.563 0 0 0-2.19-.499c-.57.236-.939 1.128-1.307 1.574a.543.543 0 0 1-.7.157 9.923 9.923 0 0 1-4.961-4.24.593.593 0 0 1 .079-.821c.41-.406.712-.908.876-1.46a3.174 3.174 0 0 0-.403-1.748 4.09 4.09 0 0 0-1.27-1.915 1.757 1.757 0 0 0-1.885.289 3.864 3.864 0 0 0-1.34 3.06c0 .324.042.646.122.96.204.756.516 1.478.929 2.143.298.509.622 1.002.973 1.477a14.925 14.925 0 0 0 4.215 3.898c.825.516 1.708.936 2.63 1.25a5.832 5.832 0 0 0 3.058.481 3.677 3.677 0 0 0 2.769-2.054c.151-.328.197-.694.131-1.049-.157-.726-1.13-1.154-1.726-1.503z" fill="#00D95F" />
                        </svg>
                    </Link>
                )
            }
        </>
    )
}