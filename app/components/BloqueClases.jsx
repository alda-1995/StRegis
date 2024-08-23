import CardClases from "@/app/components/Cards/CardClases";
import { useEffect, useRef } from 'react'
import { animationOpacityUp, animationBlock } from '@/app/utils/animacionesGsap';
import { useMediaQuery } from 'react-responsive';
import { usePathname } from 'next/navigation';
import { exitsLocale } from '@/app/utils/listMenu';

export default function BloqueClases({ data, openModal = () => { } }) {
    const pathname = usePathname();
    const txtBtn1 = (exitsLocale(pathname, 'es')) ? 'Obtén detalles' : "Get Details";
    const txtBtn2 = (exitsLocale(pathname, 'es')) ? "Reservar Ahora" : "Book now";
    const { supertitulo, titulo, texto, listaDeClasesYDegustacion } = data;
    const supertitleRef = useRef(null)
    const titleRef = useRef(null)
    const textRef = useRef(null)
    const blockRef = useRef(null)
    useEffect(() => {
        animationOpacityUp(supertitleRef.current);
        animationOpacityUp(titleRef.current);
        animationOpacityUp(textRef.current);
        animationBlock(blockRef.current, "#ffffff");
    }, []);

    const isLg = useMediaQuery({ query: '(min-width: 1024px)' });
    const numDelayReset = (isLg) ? 3 : 2;
    let delay = 0;
    let contador = 0;
    return (
        <div className="w-full py-16 sm:py-20 lg:py-28" name="classes-and-tastings" ref={blockRef}>
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
                    (listaDeClasesYDegustacion && listaDeClasesYDegustacion.length > 0) && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4 xl:gap-10 mt-8 sm:mt-12">
                            {
                                listaDeClasesYDegustacion.map(({ title, datosClases }, index) => {
                                    if (contador >= numDelayReset) {
                                        delay = 0;
                                        contador = 0;
                                    }
                                    else
                                        delay += 0.3;
                                    contador++;
                                    return (
                                        <CardClases
                                            titulo={title}
                                            descripcion={datosClases.descripcion}
                                            imagen={datosClases.imagen}
                                            key={`card-clases-${index}`}
                                            url={datosClases.url}
                                            txtBtn1={txtBtn1}
                                            txtBtn2={txtBtn2}
                                            properties="bg-white"
                                            dataModal={datosClases.datosModal}
                                            handleModal={openModal}
                                            delay={delay}
                                        />)
                                })
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}