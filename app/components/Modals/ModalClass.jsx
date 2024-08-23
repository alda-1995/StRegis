import BtnPrimary from "@/app/components/Button/BtnPrimary";
import { closeModal } from "@/app/utils/animacionesGsap";
import LoaderImage from '@/app/components/LoaderImage';
import { usePathname } from 'next/navigation';
import { exitsLocale } from '@/app/utils/listMenu'
export default function ModalClass({ refModal, data }) {
    const pathname = usePathname();
    const txtBtn1 = (exitsLocale(pathname, 'es')) ? 'Reservar' : "Email Booking";
    const { titulo, descripcion, correo, imagen, detalles, textoInformativo } = data;
    const handleClose = () => {
        closeModal(refModal.current);
    };
    return (
        <div ref={refModal} className="fixed sm:flex sm:justify-center sm:items-center top-0 left-0 h-screen w-full opacity-0 z-[-1] overflow-y-scroll sm:overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-full z-0 bg-black opacity-30" onClick={handleClose}></div>
            <div className="bg-white sm:rounded-lg sm:border-astro-gray sm:border-[0.8px] max-w-[900px] w-full px-4 pt-24 pb-24 md:p-8 relative z-10 sm:min-h-[80vh] sm:max-h-[80vh] sm:overflow-y-auto">
                <button type="button" onClick={handleClose} className="absolute top-8 right-8 z-10">
                    <svg className="w-7 h-6" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 17.5c0-.927-.916-2.313-1.844-3.475-1.192-1.5-2.617-2.809-4.251-3.808C11.68 9.47 10.195 8.75 9 8.75c1.195 0 2.681-.719 3.905-1.468 1.634-1 3.059-2.308 4.251-3.806C18.084 2.313 19 .925 19 0" stroke="#646464" />
                        <path d="M1 0c0 .927.916 2.313 1.844 3.475 1.192 1.5 2.617 2.809 4.251 3.807C8.32 8.032 9.805 8.75 11 8.75c-1.195 0-2.681.719-3.905 1.467-1.634 1-3.059 2.31-4.251 3.807C1.916 15.188 1 16.575 1 17.5" stroke="#646464" />
                    </svg>
                </button>
                <div className="flex flex-col w-full">
                    {
                        titulo && (
                            <h4 className="text-black mb-4 md:mb-6">{titulo}</h4>
                        )
                    }
                    {
                        descripcion && (
                            <div className="w-full md:w-[50%]">
                                <p className="parrafo text-gray">{descripcion}</p>
                            </div>
                        )
                    }
                    <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 mt-6">
                        <div className="flex flex-col">
                            {
                                imagen && (
                                    <LoaderImage image={imagen} className={"max-w-full"} />
                                )
                            }
                        </div>
                        <div className="flex flex-col sm:items-start">
                            {
                                detalles && (
                                    <div className="info-wysing" dangerouslySetInnerHTML={{ __html: detalles }} />
                                )
                            }
                            {
                                textoInformativo && (
                                    <p className="text-gray parrafo mb-6" dangerouslySetInnerHTML={{ __html: textoInformativo }} />
                                )
                            }
                            {
                                correo && (
                                    <BtnPrimary className="w-full md:w-auto" correo={correo} data={{ texto: txtBtn1, tipo: "email" }}></BtnPrimary>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}