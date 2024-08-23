import CardInfo from "@/app/components/Cards/CardInfo";
import { useEffect, useRef } from 'react'
import { animationOpacityUp } from '@/app/utils/animacionesGsap';
import { useMediaQuery } from 'react-responsive';
import { usePathname } from 'next/navigation';
import { exitsLocale } from '@/app/utils/listMenu'

export default function BloqueRestaurantes({ data, openModal = () => {} }) {
    const pathname = usePathname();
    const txtBtn1 = (exitsLocale(pathname, 'es')) ? 'Abrir menú' : "Open menu";
    const txtBtn2 = (exitsLocale(pathname, 'es')) ? "Reservar Ahora" : "Book now";
    const { supertitulo, titulo, texto, listaDeRestaurantes } = data;

    const supertitleRef = useRef(null)
    const titleRef = useRef(null)
    const textRef = useRef(null)
    useEffect(() => {
        animationOpacityUp(supertitleRef.current);
        animationOpacityUp(titleRef.current);
        animationOpacityUp(textRef.current);
    }, []);

    const isLg = useMediaQuery({ query: '(min-width: 1024px)' });
    const numDelayReset = (isLg) ? 3 : 2;
    let delay = 0;
    let contador = 0;
    return (
        <div className="bg-white w-full pb-16 sm:pb-20 lg:pb-28" name="restaurants">
            <div className="container">
                <div className='flex flex-col'>
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
                        (listaDeRestaurantes && listaDeRestaurantes.length > 0) && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 xl:gap-10 gap-4 mt-8 sm:mt-12">
                                {
                                    listaDeRestaurantes.map(({ title, datosRestaurantes, restaurantescats }, index) => {
                                        if (contador >= numDelayReset){
                                            delay = 0;
                                            contador = 0;
                                        }
                                        else
                                            delay += 0.2;
                                        contador++;

                                        return (
                                            <CardInfo
                                                openModal={openModal}
                                                titulo={title}
                                                descripcion={datosRestaurantes.descripcion}
                                                imagen={datosRestaurantes.imagen}
                                                horarios={datosRestaurantes.horarios}
                                                key={`card-restaurante-${index}`}
                                                listFiles={datosRestaurantes.listaDeMenus}
                                                url={datosRestaurantes.url}
                                                categorys={restaurantescats.nodes}
                                                txtBtn1={txtBtn1}
                                                txtBtn2={txtBtn2}
                                                delay={delay}
                                            />
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}