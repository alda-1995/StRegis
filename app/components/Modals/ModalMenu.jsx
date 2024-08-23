import { closeMenu } from "@/app/utils/animacionesGsap";
import Link from "next/link"
import logoShort from "@/public/logo-short.png";
import Image from "next/image";
import BtnWhatsapp from "@/app/components/Button/BtnWhatsapp";
import { usePathname } from 'next/navigation'
import { exitsLocale } from '@/app/utils/listMenu'
import { menuEng, menuEsp } from '@/app/utils/listMenu';
import ListNavbarMobile from "@/app/components/Generales/ListNavbarMobile";

export default function ModalMenu({ refModal, phone = "" }) {
    const pathname = usePathname();
    const handleClose = () => {
        closeMenu(refModal.current);
    };
    const listMenuNav = (exitsLocale(pathname, "es")) ? menuEsp : menuEng;
    const urlHome = (exitsLocale(pathname, "es")) ? '/es/' : '/';
    const urlContact = (exitsLocale(pathname, "es")) ? '/es/contacto/' : '/contact/';
    const textContact = (exitsLocale(pathname, "es")) ? 'Contacto' : 'Get in Touch';

    return (
        <div ref={refModal} className="fixed top-0 left-0 h-screen w-full bg-white z-[-1] translate-x-full overflow-y-scroll">
            <div className="container">
                <div className="flex justify-between items-center h-[80px]">
                    <Link href={urlHome} className="inline-block max-w-[50px] lg:max-w-[150px]">
                        <Image src={logoShort} className="max-w-full" alt="logo stregis mobile" />
                    </Link>
                    <button type="button" onClick={handleClose} className="h-[50px] w-[50px] bg-king-red flex justify-center items-center">
                        <svg className="w-7 h-6" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 17.5c0-.927-.916-2.313-1.844-3.475-1.192-1.5-2.617-2.809-4.251-3.808C11.68 9.47 10.195 8.75 9 8.75c1.195 0 2.681-.719 3.905-1.468 1.634-1 3.059-2.308 4.251-3.806C18.084 2.313 19 .925 19 0" stroke="#ffffff" />
                            <path d="M1 0c0 .927.916 2.313 1.844 3.475 1.192 1.5 2.617 2.809 4.251 3.807C8.32 8.032 9.805 8.75 11 8.75c-1.195 0-2.681.719-3.905 1.467-1.634 1-3.059 2.31-4.251 3.807C1.916 15.188 1 16.575 1 17.5" stroke="#ffffff" />
                        </svg>
                    </button>
                </div>
                <ul className="flex flex-col items-center text-center gap-5 mt-6">
                    <ListNavbarMobile handleClose={handleClose} listMenu={listMenuNav} pathname={pathname} urlHome={urlHome} />
                    <li>
                        <Link onClick={handleClose} href={urlContact} className="link-menu-mobile link-animation-menu">{textContact}</Link>
                    </li>
                    <li>
                        {
                            phone && (
                                <BtnWhatsapp numberPhone={phone} properties="max-w-[40px] link-animation-menu" typeIcon={"redWhatsapp"} />
                            )
                        }
                    </li>
                </ul>
            </div>
        </div>
    )
}