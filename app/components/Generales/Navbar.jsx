'use client'
import Image from "next/image"
import Link from "next/link"
import logoImg from "@/public/logo.svg";
import logoShort from "@/public/logo-short.png";
import BtnPrimary from "@/app/components/Button/BtnPrimary";
import BtnWhatsapp from "@/app/components/Button/BtnWhatsapp";
import BtnLang from "@/app/components/Button/BtnLang";
import { useEffect, useRef, useState } from "react"
import ModalMenu from "@/app/components/Modals/ModalMenu";
import { openMenu } from "@/app/utils/animacionesGsap";
import useSWR from "swr";
import { contactoQuery } from '@/app/api/api';
import telFix from '@/app/utils/index';
import { usePathname } from 'next/navigation';
import ListNavbar from "@/app/components/Generales/ListNavbar";
import { menuEng, menuEsp } from '@/app/utils/listMenu';

export default function Navbar() {
    const { data, error, isLoading } = useSWR('contacto', contactoQuery);
    const modalMenu = useRef(null)
    const [isScroll, setIsScroll] = useState(false);
    const pathname = usePathname();
    const urlHome = (isLangEs()) ? '/es/' : '/';
    const urlContact = (isLangEs()) ? '/es/contacto/' : '/contact/';
    const textContact = (isLangEs()) ? 'Contacto' : 'Get in Touch';
    const urlMain = (isLangEs()) ? '/es/' : '/';
    const listMenuNav = (isLangEs()) ? menuEsp : menuEng;
    
    function isLangEs() {
        return pathname.includes('es');
    };

    const handleOpenMenu = () => {
        openMenu(modalMenu.current);
    };
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 100) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        }
        window.addEventListener('scroll', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])
    return (
        <>
            <div className="bg-white top-0 left-0 w-full fixed z-[52] border-b-[0.8px] border-b-astro-gray">
                <div className="container">
                    <div className="h-[80px] w-full flex justify-between items-center">
                        <Link href={urlHome} className="inline-block max-w-[50px] lg:max-w-[150px]">
                            <Image src={logoShort} className="max-w-full lg:hidden" alt="logo stregis mobile" />
                            <Image src={logoImg} className="max-w-full hidden lg:block" alt="logo stregis" />
                        </Link>
                        <div className="flex items-center gap-3 lg:gap-10">
                            <BtnPrimary className="!px-2 !min-w-0 md:!min-w-[150px] lg:!min-w-[200px] md:px-8" styleType="normal" data={{ texto: textContact, tipo: "page", pagina: urlContact }}></BtnPrimary>
                            <button onClick={handleOpenMenu} type="button" className="bg-king-red h-[44px] w-[44px] flex justify-center items-center
                            border border-red-light xl:hidden
                            ">
                                <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} className="fill-red-light" viewBox="0 0 24 24"><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>
                            </button>
                            {(!isLoading && data) && <>
                                <BtnWhatsapp numberPhone={telFix(data.page.contacto.numeroDeWhatsapp)} />
                            </>
                            }
                            <BtnLang />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`bg-white top-[80px] left-0 w-full duration-300 
            transition-opacity hover:opacity-100 ${(isScroll) ? 'opacity-0' : ''}
            fixed z-50 border-t-0 border-[0.8px] border-astro-gray hidden xl:block`}>
                <div className="container">
                    <div className="h-[50px] gap-12 w-full flex items-center">
                        <ListNavbar listMenu={listMenuNav} pathname={pathname} urlHome={urlMain}  />
                    </div>
                </div>
            </div>
            {(!isLoading && data) && <>
                <ModalMenu refModal={modalMenu} phone={telFix(data.page.contacto.numeroDeWhatsapp)} />
            </>
            }
        </>
    )
}