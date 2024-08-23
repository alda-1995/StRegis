import { Link as LinkScroll } from 'react-scroll';
import Link from "next/link"
export default function ListNavbarMobile({ listMenu, pathname, urlHome, handleClose = () => {} }) {
    return (
        <>
            {
                listMenu.map(({ text, to }, index) => {
                    if (pathname === urlHome) {
                        return (
                            <li key={`link-menu-scroll-${index}`}>
                                <LinkScroll
                                    onClick={handleClose}
                                    key={index}
                                    activeClass="active"
                                    to={to}
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="link-menu-mobile link-animation-menu"
                                >
                                    {text}
                                </LinkScroll>
                            </li>
                        )
                    } else {
                        return (<Link onClick={handleClose} href={`${urlHome}#${to}`}  key={`${index}-link-section-mobile`} className="link-menu-mobile link-animation-menu">
                            {text}
                        </Link>)
                    }
                })
            }
        </>
    )
}