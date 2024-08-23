import BtnPrimary from '@/app/components/Button/BtnPrimary';
import { useEffect, useRef } from 'react'
import { animationOpacityUpBanner } from '@/app/utils/animacionesGsap';

export default function BannerGracias({ data }) {
    const { titulo, texto, imagenFondo, boton } = data;
    const titleRef = useRef(null)
    const textRef = useRef(null)
    const botonRef = useRef(null)
    useEffect(() => {
        animationOpacityUpBanner(titleRef.current, );
        animationOpacityUpBanner(textRef.current, 0.5);
        animationOpacityUpBanner(botonRef.current, 1);
    }, []);
    return (
        <div className="w-full bg-white" name="inicio">
            <div className="relative pt-[80px] xl:pt-[130px] min-h-screen">
                <div className="pt-[80px] xl:pt-[130px] absolute top-0 left-0 h-full w-full">
                    {
                        imagenFondo && (
                            <div className="left-0 h-full w-full 
                            bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${imagenFondo.sourceUrl})` }}></div>
                        )
                    }
                </div>
                <div className="py-12 sm:py-20 relative z-10">
                    <div className="container">
                        <div className='flex flex-col md:max-w-[80%] xl:max-w-[70%]'>
                            {
                                titulo && (
                                    <h1 ref={titleRef} className="text-white">{titulo}</h1>
                                )
                            }
                            {
                                texto && (
                                    <h3 ref={textRef} className="text-white mt-6 sm:mt-8">{texto}</h3>
                                )
                            }
                            {
                                boton && (
                                    <div className='mt-12 lg:mt-8' ref={botonRef}>
                                        <BtnPrimary className="w-full sm:w-auto" data={boton} styleType={"borderWhite"} />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}