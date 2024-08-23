import LinkCnll from "@/app/components/Button/LinkCnll";
import LinkFooter from "@/app/components/Button/LinkFooter";
import Link from "next/link"
import useSWR from "swr";
import { inicioQuery } from '@/app/api/api';
import { useEffect, useState } from "react";
import React from "react";

export default function ListFooterEs({ pathname = "", urlHome = "", openModal = () => { } }) {
    const { data, error, isLoading } = useSWR('inicio', inicioQuery);
    const [listRestaurantes, setListRestaurantes] = useState([]);
    const [listClass, setListClass] = useState([]);
    const [listExperiencia, setListExperiencia] = useState([]);

    useEffect(() => {
        if (isLoading) return
        setListRestaurantes(data.page.inicio.bloqueRestaurantes.listaDeRestaurantes);
        setListClass(data.page.inicio.bloqueClasesDegustaciones.listaDeClasesYDegustacion);
        setListExperiencia(data.page.inicio.bloqueExperiencias.listasDeExperiencias);
    }, [isLoading]);

    const handleModalOpen = (files) => {
        console.log(files)
        if (!files) {
            return;
        }
        const filesData = files.map(({ archivoMenu, nombre }, index) => (
            {
                "urlFile": archivoMenu.mediaItemUrl,
                "nombre": nombre
            }
        ));
        console.log(filesData)
        openModal(filesData);
    };

    const handleModalOpenTwo = (files) => {
        if (!files) {
            return;
        }
        const filesData = files.map(({ archivo, nombre }, index) => (
            {
                "urlFile": archivo.mediaItemUrl,
                "nombre": nombre
            }
        ));
        openModal(filesData);
    };
    return (
        <>
            {(!isLoading && data) && <>
                <div className={`border-t-[0.75px] border-t-astro-gray py-6 md:py-28 ${(pathname == "/es/contact/" ? "hidden md:block" : "")} `}>
                    <div className="container">
                        <div className="flex md:hidden justify-center text-center">
                            <Link href="/es/contact" className=" inline-block py-2 text-king-red font-btn uppercase">Contacto</Link>
                        </div>
                        <div className="hidden md:grid md:grid-cols-3 md:gap-8">
                            <div className="flex flex-col items-start">
                                <LinkFooter urlHome={urlHome} text="restaurantes" to="restaurants" properties="mb-4" />
                                {
                                    (listRestaurantes && listRestaurantes.length > 0) && (
                                        <ul className="list-none flex flex-col mb-8 gap-2">
                                            {
                                                listRestaurantes.map(({ title, datosRestaurantes: { url, listaDeMenus } }, index) => {
                                                    return (
                                                        <React.Fragment key={`rest-${index}`}>
                                                            {
                                                                (url) ? (
                                                                    <li key={`link-rest-${index}`}>
                                                                        <Link href={url} rel="noopener noreferrer" target="_blank" className="link-footer">
                                                                            {title}
                                                                        </Link>
                                                                    </li>
                                                                ) : (
                                                                    <>
                                                                        {
                                                                            (listaDeMenus && listaDeMenus.length === 1) && (
                                                                                <li key={`menu-button-${index}`}>
                                                                                    <Link href={listaDeMenus[0].archivoMenu.mediaItemUrl} className="link-footer" rel="noopener noreferrer" target="_blank">
                                                                                        {title}
                                                                                    </Link>
                                                                                </li>
                                                                            )
                                                                        }
                                                                        {
                                                                            (listaDeMenus && listaDeMenus.length > 1) && (
                                                                                <li key={`menu-button-${index}`}>
                                                                                    <button type="button" onClick={() => handleModalOpen(listaDeMenus)} className="link-footer">{title}</button>
                                                                                </li>
                                                                            )
                                                                        }
                                                                    </>
                                                                )
                                                            }
                                                        </React.Fragment>
                                                    );
                                                })
                                            }
                                        </ul>
                                    )
                                }
                            </div>
                            <div className="flex flex-col items-start">
                                <LinkFooter urlHome={urlHome} text="clases y degustaciones" to="classes-and-tastings" properties="mb-4" />
                                {
                                    (listClass && listClass.length > 0) && (
                                        <ul className="list-none flex flex-col mb-8 gap-2">
                                            {
                                                listClass.map(({ title, datosClases: { datosModal } }, index) => {
                                                    if (datosModal.correo) {
                                                        return (
                                                            <li key={`link-class-${index}`}>
                                                                <Link href={`mailto:${datosModal.correo}`} rel="noopener noreferrer" target="_blank" className="link-footer">
                                                                    {title}
                                                                </Link>
                                                            </li>
                                                        )
                                                    }
                                                })
                                            }
                                        </ul>
                                    )
                                }
                            </div>
                            <div className="flex flex-col items-start">
                                <LinkFooter urlHome={urlHome} text="experiencias" to="experiences" properties="mb-4" />
                                {
                                    listExperiencia.length > 0 && (
                                        <ul className="list-none flex flex-col mb-8 gap-2">
                                            {
                                                listExperiencia.map(({ titulo, url, listaDeArchivos }, index) => {
                                                    if (url) {
                                                        return (
                                                            <React.Fragment key={`link-expr-${index}`}>
                                                                <li >
                                                                    {
                                                                        (url) ? (
                                                                            <Link href={url} rel="noopener noreferrer" target="_blank" className="link-footer">
                                                                                {titulo}
                                                                            </Link>
                                                                        ) : <>
                                                                            {
                                                                                (listaDeArchivos && listaDeArchivos.length === 1) && (
                                                                                    <Link href={listaDeArchivos[0].archivo.mediaItemUrl} className="link-footer" rel="noopener noreferrer" target="_blank">
                                                                                        {title}
                                                                                    </Link>
                                                                                )
                                                                            }
                                                                            {
                                                                                (listaDeArchivos && listaDeArchivos.length > 1) && (
                                                                                    <button type="button" onClick={() => { handleModalOpenTwo(listaDeArchivos) }} className="link-footer">{title}</button>
                                                                                )
                                                                            }
                                                                        </>
                                                                    }
                                                                </li>
                                                            </React.Fragment>
                                                        )
                                                    }
                                                })
                                            }
                                        </ul>
                                    )
                                }
                            </div>
                        </div>
                        <div className="hidden md:grid md:grid-cols-3 md:gap-8">
                            <div className="flex flex-col items-start">
                                <LinkFooter urlHome={urlHome} text="eventos especiales" to="special-events" properties="mb-8" />
                                <LinkFooter urlHome={urlHome} text="rituales" to="rituals" />
                            </div>
                            <div className="flex flex-col items-start">
                                <LinkFooter urlHome={urlHome} text="actividades semanales" to="weekly-activities" properties="mb-8" />
                                <LinkFooter urlHome={urlHome} text="Club infantil" to="children-club" />
                            </div>
                            <div className="flex flex-col items-start">
                                <LinkFooter urlHome={urlHome} text="spa" to="spa" properties="mb-8" />
                                <Link href={"/es/contact"} className="link-main-footer link-hover-line red-king">Contacto</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t-[0.75px] border-t-astro-gray py-6">
                    <div className="container">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 text-center md:text-left">
                            <div className="flex flex-col items-center md:items-start py-2">
                                <Link href={"/es/terminos-condiciones"} className="link-footer">Términos y condiciones</Link>
                            </div>
                            <div className="flex flex-col items-center md:items-start py-2">
                                <Link href={"/es/aviso-privacidad"} className="link-footer">Aviso de Privacidad</Link>
                            </div>
                            <div className="flex justify-center md:justify-start py-2">
                                <LinkCnll />
                            </div>
                        </div>
                    </div>
                </div>
            </>
            }
        </>
    )
}