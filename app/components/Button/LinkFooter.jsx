import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Link as LinkScroll } from 'react-scroll';

export default function LinkFooter({ text = "", to = "", properties = "", urlHome = "" }) {
    const pathname = usePathname();
    return (
        <>
            {
                (pathname == urlHome) ? (
                    <LinkScroll
                        to={to}
                        spy={true}
                        hashSpy={true}
                        smooth={true}
                        isDynamic={true}
                        offset={-80}
                        className={`link-main-footer link-hover-line red-king ${properties}`}
                    >
                        {text}
                    </LinkScroll>
                ) : (
                    <Link href={`${urlHome}#${to}`} className={`link-main-footer link-hover-line red-king ${properties}`}>
                        {text}
                    </Link>
                )
            }
        </>
    )
}