import LoaderImage from '@/app/components/LoaderImage';
import { useEffect, useRef } from 'react'
import { animationOpacityUp, animationBlock } from '@/app/utils/animacionesGsap';
import BtnSecondary from '@/app/components/Button/BtnSecondary';

export default function BloqueClub({ data }) {
    const { supertitulo, titulo, texto, imagen1, imagen2, imagen3, fecha, imagenFinal, boton } = data;
    const blockRef = useRef(null)
    const supertitleRef = useRef(null)
    const titleRef = useRef(null)
    const textRef = useRef(null)
    const img1Ref = useRef(null)
    const img2Ref = useRef(null)
    const img3Ref = useRef(null)
    const botonRef = useRef(null)
    useEffect(() => {
        animationOpacityUp(supertitleRef.current);
        animationOpacityUp(titleRef.current);
        animationOpacityUp(textRef.current);
        animationOpacityUp(img1Ref.current);
        animationOpacityUp(img2Ref.current, 0.2);
        animationOpacityUp(img3Ref.current, 0.4);
        animationBlock(blockRef.current, "#f1f1f2");
        animationOpacityUp(botonRef.current);
    }, []);
    return (
        <div className="w-full py-16 sm:py-20 lg:py-28" name="children-club" ref={blockRef}>
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
                <div className="grid grid-cols-12 grid-rows-5 gap-2">
                    {
                        imagen1 && (
                            <div ref={img1Ref} className="col-span-8 row-span-5 md:col-span-6 md:row-span-5">
                                <LoaderImage image={imagen1} className={"max-w-full h-full"} />
                            </div>
                        )
                    }
                    {
                        imagen2 && (
                            <div ref={img2Ref} className="col-span-4 row-span-5 col-start-9 md:col-span-3 md:row-span-5 md:col-start-7">
                                <LoaderImage image={imagen2} className={"max-w-full h-full"} />
                            </div>
                        )
                    }
                    {
                        imagen3 && (
                            <div ref={img3Ref} className="col-span-3 row-span-5 col-start-10 hidden lg:block">
                                <LoaderImage image={imagen3} className={"max-w-full h-full"} />
                            </div>
                        )
                    }
                </div>
                <div className='flex flex-col sm:flex-row mt-4 sm:mt-8'>
                    <div className='lg:w-[50%]' ref={textRef}>
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
                        {
                            boton && (
                                <div className='mt-8 md:mt-10' ref={botonRef}>
                                    <BtnSecondary typeIcon={"downloadRed"} className="w-full md:w-auto" data={boton} />
                                </div>
                            )
                        }
                    </div>
                </div>
                {
                    imagenFinal && (
                        <div className="flex justify-center mt-32">
                            <LoaderImage image={imagenFinal} className={"max-w-[180px]"} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}