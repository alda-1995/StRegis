import BtnPrimary from "@/app/components/Button/BtnPrimary";
import BloqueSliderCards from "@/app/components/Sliders/BloqueSliderCards";
import { useEffect, useRef } from 'react'
import { animationOpacityUp } from '@/app/utils/animacionesGsap';


export default function BloqueSpa({ data, openModal = () => {}}) {
    const { supertitulo, titulo, texto, listaDeServicios, boton1, boton2 } = data;
    const supertitleRef = useRef(null)
    const titleRef = useRef(null)
    const textRef = useRef(null)
    const botonRef = useRef(null)
    const boton1Ref = useRef(null)
    useEffect(() => {
        animationOpacityUp(supertitleRef.current);
        animationOpacityUp(titleRef.current);
        animationOpacityUp(textRef.current);
        animationOpacityUp(botonRef.current);
        animationOpacityUp(boton1Ref.current);
    }, []);
    return (
        <div className="w-full pb-16 sm:pb-20 lg:pb-28 overflow-x-hidden" name="spa">
            <div className="container">
                {
                    supertitulo && (
                        <p ref={supertitleRef} className="text-gray mb-4 sm:mb-6 md:max-w-[80%] uppercase">{supertitulo}</p>
                    )
                }
                {
                    titulo && (
                        <h2 ref={titleRef} className="text-black md:max-w-[80%] 2xl:max-w-[60%]">{titulo}</h2>
                    )
                }
                <div className='flex flex-col sm:flex-row mt-4 sm:mt-8'>
                    <div className='sm:w-[50%]' ref={textRef}>
                        {
                            texto && (
                                <h5 className="text-gray">{texto}</h5>
                            )
                        }
                    </div>
                    <div className='sm:pl-8 sm:w-[50%] md:flex md:justify-end' ref={botonRef}>
                        {
                            boton1 && (
                                <BtnPrimary correo={boton1.correo} className="w-full md:w-auto mt-4 sm:mt-0" data={boton1} />
                            )
                        }
                    </div>
                </div>
                {
                    listaDeServicios && (
                        <div className="mt-8 sm:mt-12 lg:px-16 2xl:px-32">
                            <BloqueSliderCards openModal={openModal} listCards={listaDeServicios} />
                        </div>
                    )
                }
                {
                    boton2 && (
                        <div className='mt-8 sm:mt-12 sm:flex sm:justify-center' ref={boton1Ref}>
                            <BtnPrimary correo={boton2.correo} className="w-full sm:w-auto" data={boton2} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}