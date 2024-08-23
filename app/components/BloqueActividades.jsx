import LoaderImage from '@/app/components/LoaderImage';
import BtnSecondary from '@/app/components/Button/BtnSecondary';
import { useEffect, useRef } from 'react'
import { animationOpacityUp } from '@/app/utils/animacionesGsap';

export default function BloqueActividades({ data }) {
    const { supertitulo, titulo, texto, imagen, fecha, boton } = data;
    const supertitleRef = useRef(null)
    const titleRef = useRef(null)
    const textRef = useRef(null)
    const imgRef = useRef(null)
    const botonRef = useRef(null)
    useEffect(() => {
        animationOpacityUp(supertitleRef.current);
        animationOpacityUp(titleRef.current);
        animationOpacityUp(textRef.current);
        animationOpacityUp(imgRef.current);
        animationOpacityUp(botonRef.current);
    }, []);
    return (
        <div className="bg-white w-full pb-16 sm:pb-20 lg:pb-28" name="weekly-activities">
            <div className="container">
                {
                    supertitulo && (
                        <p ref={supertitleRef} className="text-gray mb-4 sm:mb-6 uppercase md:max-w-[80%]">{supertitulo}</p>
                    )
                }
                {
                    titulo && (
                        <h2 ref={titleRef} className="text-black mb-4 sm:mb-6 md:max-w-[80%] 2xl:max-w-[60%]">{titulo}</h2>
                    )
                }
                {
                    imagen && (
                        <div className='w-full' ref={imgRef}>
                            <LoaderImage image={imagen} className={"max-w-full"} />
                        </div>
                    )
                }
                <div className='flex flex-col sm:flex-row mt-4 sm:mt-8'>
                    <div className='sm:w-[50%]' ref={textRef}>
                        {
                            fecha && (
                                <p className="text-king-red small">{fecha}</p>
                            )
                        }
                        {
                            texto && (
                                <h5 className="text-gray mt-4">{texto}</h5>
                            )
                        }
                    </div>
                    <div className='sm:pl-8 sm:w-[50%] md:flex md:justify-end'>
                        {
                            boton && (
                                <div className='mt-8 md:mt-0' ref={botonRef}>
                                    <BtnSecondary typeIcon={"downloadRed"} className="w-full md:w-auto" data={boton} />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}