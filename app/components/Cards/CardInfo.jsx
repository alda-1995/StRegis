import BtnPrimary from "@/app/components/Button/BtnPrimary";
import { animationOpacityOneUp } from '@/app/utils/animacionesGsap';
import { useEffect, useRef } from 'react';

export default function CardInfo({ titulo = '', imagen, properties = "", categorys = "", openModal = () => { },
    descripcion = '', horarios = '', url = null, listFiles = null, txtBtn1 = '', txtBtn2 = '', delay = 0 }) {

    const cardElement = useRef(null);
    const firstCategorie = (categorys.length > 0) ? categorys[0].name : null;
    useEffect(() => {
        animationOpacityOneUp(cardElement.current, delay);
    }, []);

    console.log(listFiles)

    const handleModalOpen = () => {
        if (!listFiles) {
            return;
        }
        const filesData = listFiles.map(({ archivoMenu, nombre }, index) => (
            {
                "urlFile": archivoMenu.mediaItemUrl,
                "nombre": nombre
            }
        ));
        openModal(filesData);
    };
    return (
        <div ref={cardElement} className={`opacity-0 translate-y-6 flex flex-col transition-all duration-500 rounded hover:shadow-3xl ${properties}`}>
            <div className={`relative border-astro-gray flex-1 ${(!url && !listFiles) ? 'border-b-[0.75px]' : ''} border-r-[0.75px] border-t-[0.75px] border-l-[0.75px] group rounded-t p-3 lg:p-4 sm:pb-12 ${(!url || !listFiles) ? 'pb-[56px] md:pb-[62px]' : ''}`}>
                {
                    firstCategorie && (
                        <div className="absolute border-[0.75px] border-astro-gray top-6 right-6 pointer-events-none uppercase z-10 small bg-green text-white rounded py-2 px-2">
                            {firstCategorie}
                        </div>
                    )
                }
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
            <div className={`grid grid-cols-1 ${(url && listFiles) ? 'md:grid-cols-2' : ''}`}>
                {
                    (listFiles && listFiles.length === 1) && (
                        <BtnPrimary styleType={`${(url) ? 'notBorderGrayRounded' : 'borderGrayRounded'}`}
                            className={`${(url) ? 'md:!rounded-br-none' : ''} !px-2 !min-w-0`}
                            data={{ texto: txtBtn1, tipo: "file", archivo: listFiles[0].archivoMenu }}/>
                    )
                }
                {
                    (listFiles && listFiles.length > 1) && (
                        <BtnPrimary styleType={`${(url) ? 'notBorderGrayRounded' : 'borderGrayRounded'}`}
                            className={`${(url) ? 'md:!rounded-br-none' : ''} !px-2 !min-w-0`}
                            data={{ texto: txtBtn1, tipo: "btn" }} action={handleModalOpen} />
                    )
                }
                {
                    url && (
                        <BtnPrimary
                            className={`${(listFiles) ? 'md:!rounded-bl-none' : ''} !px-2 !min-w-0`}
                            styleType={"borderGrayRounded"}
                            data={{ texto: txtBtn2, tipo: "url", url: url }} />
                    )
                }
            </div>
        </div>
    )
}