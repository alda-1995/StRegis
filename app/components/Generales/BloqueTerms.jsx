import ImgCollage from '@/public/collage-directorio.png'
import Image from 'next/image';
export default function BloqueTerms({ data }) {
    const { titulo, contenido } = data;
    return (
        <div className="min-h-screen w-full bg-cream-medium">
            <div className="relative pt-[80px] xl:pt-[130px] min-h-screen">
                <div className="py-12 sm:py-20 relative z-10">
                    <div className="container">
                        <p className="text-gray mb-4 md:mb-5 font-btn uppercase">Legal</p>
                        {
                            titulo && (
                                <h2 className="text-black mb-8">{titulo}</h2>
                            )
                        }
                        <div className="md:w-[80%] lg:w-[50%] mx-auto">
                            {
                                contenido && (
                                    <div className="info-wysing-terms" dangerouslySetInnerHTML={{ __html: contenido }} />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-16 sm:py-20 lg:py-28">
                <div className="container">
                    <div className="flex justify-center">
                        <Image src={ImgCollage} className="max-w-[150px]" alt="img collage" />
                    </div>
                </div>
            </div>
        </div>
    )
}