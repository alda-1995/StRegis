import BloqueSliderEventos from "@/app/components/Sliders/BloqueSliderEventos";
import { useEffect, useRef } from 'react'
import { animationOpacityUp } from '@/app/utils/animacionesGsap';

export default function BloqueEventos({ data, openModal = () => {} }) {
    const { supertitulo, titulo, texto, listaEventos } = data;
    const supertitleRef = useRef(null)
    const titleRef = useRef(null)
    const textRef = useRef(null)
    useEffect(() => {
        animationOpacityUp(supertitleRef.current);
        animationOpacityUp(titleRef.current);
        animationOpacityUp(textRef.current);
    }, []);
    return (
        <div className="bg-white w-full py-16 sm:py-20 lg:py-28" name="special-events">
            <div className="container">
                {
                    supertitulo && (
                        <p ref={supertitleRef} className="text-gray mb-4 sm:mb-6 uppercase md:max-w-[80%]">{supertitulo}</p>
                    )
                }
                {
                    titulo && (
                        <h2 ref={titleRef} className="text-black md:max-w-[80%] 2xl:max-w-[60%]">{titulo}</h2>
                    )
                }
                {
                    texto && (
                        <div ref={textRef} className="mt-4 sm:mt-8 sm:w-[70%] md:max-w-[50%] sm:mx-auto">
                            <h5 className="text-gray">{texto}</h5>
                        </div>
                    )
                }
            </div>
            {
                listaEventos && (
                    <div className="mt-8 sm:mt-12">
                        <BloqueSliderEventos openModal={openModal} listEventos={listaEventos} />
                    </div>
                )
            }
        </div>
    )
}