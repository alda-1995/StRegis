import BtnPrimary from "@/app/components/Button/BtnPrimary";
import { animationOpacityOneUp } from '@/app/utils/animacionesGsap';
import { useEffect, useRef } from 'react'

export default function CardClases({ titulo = '', imagen, properties = "", dataModal = null,
    descripcion = '', horarios = '', txtBtn1 = '', txtBtn2 = '', handleModal = () => {}, delay = 0 }) {

    const handleModalData = () => {
        handleModal(dataModal);
    };

    const cardElement = useRef(null);
    useEffect(() => {
        animationOpacityOneUp(cardElement.current, delay);
    }, []);

    return (
        <div ref={cardElement} className={`opacity-0 translate-y-6 flex flex-col transition-all duration-500 rounded hover:shadow-3xl ${properties} ${properties}`}>
            <div className={`border-astro-gray flex-1 border-r-[0.75px] border-t-[0.75px] group border-l-[0.75px] rounded-t p-3 lg:p-4 sm:pb-12 ${(!dataModal.correo) ? 'pb-[56px] md:pb-[62px]' : ''}`}>
                {
                    imagen && (
                        <div className="overflow-hidden">
                            <div style={{ backgroundImage: `url(${imagen.sourceUrl})` }}
                            className="h-[150px] lg:h-[220px] w-full rounded bg-cover bg-center bg-no-repeat duration-300 group-hover:scale-110"></div>
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
            <div className={`grid grid-cols-1 ${(dataModal.correo) ? 'md:grid-cols-2' : ''}`}>
                {
                    dataModal && (
                        <BtnPrimary styleType={`${(dataModal.correo) ? 'notBorderGrayRounded' : 'borderGrayRounded'}`}
                            className={`md:!rounded-br-none !px-2 !min-w-0`}
                            action={handleModalData}
                            data={{ texto: txtBtn1, tipo: "btn" }} />
                    )
                }
                {
                    dataModal.correo && (
                        <BtnPrimary
                            className={`md:!rounded-bl-none !px-2 !min-w-0`}
                            styleType={"borderGrayRounded"}
                            correo={dataModal.correo}
                            data={{ texto: txtBtn2, tipo: "email" }} />
                    )
                }
            </div>
        </div>
    )
}