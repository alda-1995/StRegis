import { Link as LinkScroll } from 'react-scroll';
import Link from "next/link"
export default function ListNavbar({ listMenu, pathname, urlHome }) {
    return (
        <>
            {
                listMenu.map(({ text, to }, index) => {
                    if (pathname === urlHome) {
                        return (
                            <LinkScroll
                                key={`${index}-link-menu`}
                                to={to}
                                spy={true}
                                hashSpy={true}
                                smooth={true}
                                isDynamic={true}
                                offset={-80}
                                className={`menu__link link-hover-line red-king`}
                            >
                                {text}
                            </LinkScroll>
                        )
                    } else {
                        return (<Link href={`${urlHome}#${to}`} key={`${index}-link-section`} className="menu__link">
                            {text}
                        </Link>)
                    }
                })
            }
        </>
    )
}