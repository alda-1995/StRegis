import BtnSecondary from '@/app/components/Button/BtnSecondary';
import { useEffect, useRef } from 'react'
import { animationOpacityUpBanner } from '@/app/utils/animacionesGsap';

export default function BloqueBanner({ data }) {
    const { titulo, texto, imagenFondo, boton } = data;
    const titleRef = useRef(null)
    const textRef = useRef(null)
    const botonRef = useRef(null)
    useEffect(() => {
        animationOpacityUpBanner(titleRef.current, 2);
        animationOpacityUpBanner(textRef.current, 2.5);
        animationOpacityUpBanner(botonRef.current, 3);
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
                <div className='absolute md:right-8 lg:right-12 xl:right-24 2xl:right-28 left-1/2 md:left-[unset] md:translate-x-[none] -translate-x-1/2 opacity-60 bottom-6 z-[2] flex flex-col items-center text-center'>
                    <svg className='icon-down1' width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 1.21c-.742 0-1.85.844-2.78 1.699a14.597 14.597 0 0 0-3.046 3.915C7.575 7.953 7 9.32 7 10.421c0-1.1-.575-2.47-1.174-3.597A14.654 14.654 0 0 0 2.781 2.91C1.85 2.054.74 1.21 0 1.21" stroke="#fff" />
                    </svg>
                    <svg className='icon-down1 icon-down2' width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 1.21c-.742 0-1.85.844-2.78 1.699a14.597 14.597 0 0 0-3.046 3.915C7.575 7.953 7 9.32 7 10.421c0-1.1-.575-2.47-1.174-3.597A14.654 14.654 0 0 0 2.781 2.91C1.85 2.054.74 1.21 0 1.21" stroke="#fff" />
                    </svg>
                    <p className='font-footer text-white uppercase mt-4'>Scrolldown</p>
                </div>
                <div className="py-12 sm:py-20 relative z-10">
                    <div className="container">
                        <div className='flex flex-col md:max-w-[80%] xl:max-w-[70%]'>
                            {
                                titulo && (
                                    <h1 ref={titleRef} className="text-white" dangerouslySetInnerHTML={{ __html: titulo }} />
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
                                        <BtnSecondary className="w-full sm:w-auto" data={boton} styleType={"borderWhite"} />
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