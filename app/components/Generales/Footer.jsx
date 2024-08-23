'use client'
import { usePathname } from 'next/navigation'
import ListFooterEn from '@/app/components/Generales/ListFooterEn';
import ListFooterEs from '@/app/components/Generales/ListFooterEs';
import { exitsLocale } from '@/app/utils/listMenu'

export default function Footer({ openModal = () => {} }) {
    const pathname = usePathname();

    const isLangEs = (exitsLocale(pathname, "es")) ? true : false;
    const urlHome = (exitsLocale(pathname, "es")) ? '/es/' : '/';
    return (
        <>
            <footer className="bg-gray-opacity w-full" id="footer">
                {
                    isLangEs ? (
                        <ListFooterEs pathname={pathname} urlHome={urlHome} openModal={openModal} />
                    ) : (
                        <ListFooterEn openModal={openModal} pathname={pathname} urlHome={urlHome} />
                    )
                }
            </footer>
        </>
    )
}