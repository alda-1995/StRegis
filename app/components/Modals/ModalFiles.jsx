import BtnFile from "@/app/components/Button/BtnFile";
import { closeModal } from "@/app/utils/animacionesGsap";
import { usePathname } from 'next/navigation'
import { exitsLocale } from '@/app/utils/listMenu'

export default function ModalFiles({ refModal, listFiles }) {
    const pathname = usePathname();
    const textTitle = (exitsLocale(pathname, "es")) ? 'Selecciona el que deseas visualizar' : 'Select to view';
    const handleClose = () => {
        closeModal(refModal.current);
    };
    return (
        <div ref={refModal} className="bg-white sm:bg-transparent fixed sm:flex sm:justify-center sm:items-center top-0 left-0 h-screen w-full opacity-0 z-[-1] overflow-y-scroll sm:overflow-hidden">
            <div className="hidden sm:block absolute left-0 top-0 h-full w-full z-0 bg-black opacity-30" onClick={handleClose}></div>
            <div className="bg-white sm:rounded-lg sm:border-astro-gray sm:border-[0.8px] max-w-[800px] w-full px-4 py-20 md:px-8 relative z-10 sm:max-h-[80vh] sm:overflow-y-auto">
                <button type="button" onClick={handleClose} className="absolute top-8 right-8 z-10">
                    <svg className="w-7 h-6" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 17.5c0-.927-.916-2.313-1.844-3.475-1.192-1.5-2.617-2.809-4.251-3.808C11.68 9.47 10.195 8.75 9 8.75c1.195 0 2.681-.719 3.905-1.468 1.634-1 3.059-2.308 4.251-3.806C18.084 2.313 19 .925 19 0" stroke="#646464" />
                        <path d="M1 0c0 .927.916 2.313 1.844 3.475 1.192 1.5 2.617 2.809 4.251 3.807C8.32 8.032 9.805 8.75 11 8.75c-1.195 0-2.681.719-3.905 1.467-1.634 1-3.059 2.31-4.251 3.807C1.916 15.188 1 16.575 1 17.5" stroke="#646464" />
                    </svg>
                </button>
                <div className="flex justify-center text-center mb-6 md:mb-12">
                    <h4 className="text-black">{textTitle}</h4>
                </div>
                <div className="flex flex-col w-full">
                    {
                        listFiles && (
                            <div className="flex flex-wrap justify-center">
                                {
                                    listFiles.map(({ urlFile, nombre }, index) => (
                                        <div className="w-full sm:w-1/4">
                                            <BtnFile key={`btn-file-${index}`} texto={nombre} linkArchivo={urlFile} />
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}