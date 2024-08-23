import BtnPrimary from "@/app/components/Button/BtnPrimary";
import { animationOpacityOneUp } from '@/app/utils/animacionesGsap';
import { useEffect, useRef } from 'react'

export default function CardEvento({ data, properties = "", openModal = () => { }, animationHover = false, index = 0, delay = 0, onClick = () => { } }) {
    const { titulo, texto, fecha, supertitulo, imagen, boton } = data;
    const files = boton?.listaDeArchivos;
    const cardElement = useRef(null);
    useEffect(() => {
        animationOpacityOneUp(cardElement.current, delay);
    }, []);

    const handleClick = () => {
        onClick(index);
    };

    const handleModalOpen = () => {
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
        <div ref={cardElement} onClick={handleClick} className={`cursor-pointer opacity-0 translate-y-6 card-evento mb-2 w-full flex flex-col transition-all duration-500 rounded hover:shadow-3xl ${properties}`}>
            <div className={`border-astro-gray flex-1 border-r-[0.75px] transition-transform duration-500 group
            ${(!boton || (boton.tipo === "file" && !files)) ? 'border-b-[0.75px] rounded-b' : ''}
            border-t-[0.75px] border-l-[0.75px] rounded-t p-3 lg:p-4`}>
                {
                    imagen && (
                        <div className="overflow-hidden">
                            <div style={{ backgroundImage: `url(${imagen.sourceUrl})` }}
                                className="h-[150px] md:h-[200px] lg:h-[250px] w-full group-hover:scale-110 rounded bg-cover bg-center bg-no-repeat duration-300 transition-all"></div>
                        </div>
                    )
                }
                {
                    fecha && (
                        <p className={`fecha-evento text-king-red small mt-2 sm:mt-4 ${(animationHover) ? 'xl:hidden' : ''}`}>{fecha}</p>
                    )
                }
                {
                    supertitulo && (
                        <p className="text-king-red small mt-2 sm:mt-4">{supertitulo}</p>
                    )
                }
                {
                    titulo && (
                        <h4 className="text-black-red mt-2 sm:mt-3">{titulo}</h4>
                    )
                }
                {
                    texto && (
                        <p className={`texto-evento text-gray parrafo mt-3 ${(animationHover) ? 'xl:hidden' : ''}`}>{texto}</p>
                    )
                }
            </div>
            {(boton && boton.tipo === "file" && (files && files.length === 1)) && (
                <BtnPrimary styleType={"borderGrayRounded"} data={{ texto: boton.texto, tipo: boton.tipo, archivo: boton.listaDeArchivos[0].archivo }}></BtnPrimary>
            )}
            {(boton && boton.tipo === "file" && (files && files.length > 1)) && (
                <BtnPrimary styleType={"borderGrayRounded"} data={{ texto: boton.texto, tipo: "btn" }} action={handleModalOpen}></BtnPrimary>
            )}
             {(boton && boton.tipo !== "file" ) && (
                <BtnPrimary correo={boton.correo} styleType={"borderGrayRounded"} data={boton}></BtnPrimary>
            )}
        </div>
    )
}