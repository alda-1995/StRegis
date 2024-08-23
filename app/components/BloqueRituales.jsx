import BloqueSliderCards from "@/app/components/Sliders/BloqueSliderCards";
import { useEffect, useRef } from 'react'
import { animationOpacityUp } from '@/app/utils/animacionesGsap';

export default function BloqueRituales({ data }) {
    const { supertitulo, titulo, texto, listaCards } = data;

    const supertitleRef = useRef(null)
    const titleRef = useRef(null)
    const textRef = useRef(null)
    useEffect(() => {
        animationOpacityUp(supertitleRef.current);
        animationOpacityUp(titleRef.current);
        animationOpacityUp(textRef.current);
    }, []);
    return (
        <div className="bg-white w-full pb-16 sm:pb-20 lg:pb-28 overflow-x-hidden" name="rituals">
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
                {
                    listaCards && (
                        <div className="mt-8 sm:mt-12 lg:px-16 2xl:px-32">
                            <BloqueSliderCards listCards={listaCards} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}