import BtnPrimary from "@/app/components/Button/BtnPrimary";
import { animationOpacityOneUp } from '@/app/utils/animacionesGsap';
import { useEffect, useRef } from 'react'

export default function CardExperiencia({ titulo = '', imagen, properties = "", openModal = () => {},
    descripcion = '', horarios = '', url = null, email = "", tipoBoton = "", listFiles = null, txtBtn1 = '', txtBtn2 = '', delay = 0 }) {

    const cardElement = useRef(null);
    useEffect(() => {
        animationOpacityOneUp(cardElement.current, delay);
    }, []);


    const handleModalOpen = () => {
        if (!listFiles) {
            return;
        }
        const filesData = listFiles.map(({ archivo, nombre }, index) => (
            {
                "urlFile": archivo.mediaItemUrl,
                "nombre": nombre
            }
        ));
        openModal(filesData);
    };

    return (
        <div ref={cardElement} className={`opacity-0 translate-y-6 flex flex-col transition-all duration-500 rounded hover:shadow-3xl ${properties} ${properties}`}>
            <div className={`border-astro-gray flex-1 group border-r-[0.75px] border-t-[0.75px] border-l-[0.75px] rounded-t p-3 lg:p-4 sm:pb-12 ${(!url || !listFiles) ? 'pb-[56px] md:pb-[62px]' : ''}`}>
                {
                    imagen && (
                        <div className="overflow-hidden">
                            <div style={{ backgroundImage: `url(${imagen.sourceUrl})` }}
                                className="h-[150px] lg:h-[220px] w-full rounded bg-cover bg-center bg-no-repeat duration-300 transition-all group-hover:scale-110"></div>
                        </div>
                    )
                }
                {
                    titulo && (
                        <h4 className="text-black-red mt-2 sm:mt-4">{titulo}</h4>
                    )
                }
                {
                    descripcion && (
                        <p className="text-gray mt-1 sm:mt-4 parrafo line-clamp-3">{descripcion}</p>
                    )
                }
                {
                    horarios && (
                        <p dangerouslySetInnerHTML={{ __html: horarios }} className="text-astro-gray mt-1 sm:mt-4 parrafo" />
                    )
                }
            </div>
            <div className={`grid grid-cols-1 ${((url || email) && listFiles) ? 'md:grid-cols-2' : ''}`}>
                {
                    (listFiles && listFiles.length === 1) && (
                        <BtnPrimary styleType={`${(url || email) ? 'notBorderGrayRounded' : 'borderGrayRounded'}`}
                            className={`${(url) ? 'md:!rounded-br-none' : ''} !px-2 !min-w-0`}
                            data={{ texto: txtBtn1, tipo: "file", archivo: listFiles[0].archivo }} />
                    )
                }
                {
                    (listFiles && listFiles.length > 1) && (
                        <BtnPrimary styleType={`${(url || email) ? 'notBorderGrayRounded' : 'borderGrayRounded'}`}
                            className={`${(url) ? 'md:!rounded-br-none' : ''} !px-2 !min-w-0`}
                            data={{ texto: txtBtn1, tipo: "btn" }} action={handleModalOpen} />
                    )
                }
                {
                    {
                        "url": (
                            <BtnPrimary
                                className={`${(listFiles) ? 'md:!rounded-bl-none' : ''} !px-2 !min-w-0`}
                                styleType={"borderGrayRounded"}
                                data={{ texto: txtBtn2, tipo: "url", url: url }} />
                        ),
                        "email": (
                            <BtnPrimary
                                className={`${(listFiles) ? 'md:!rounded-bl-none' : ''} !px-2 !min-w-0`}
                                styleType={"borderGrayRounded"}
                                correo={email}
                                data={{ texto: txtBtn2, tipo: "email" }} />
                        ),
                    }[tipoBoton]
                }
            </div>
        </div>
    )
}