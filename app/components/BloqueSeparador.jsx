import Image from "next/image"
import ImgCollage from '@/public/collage-directorio.png'

export default function BloqueSeparador({}){
    return(
        <div className="bg-white py-16 sm:py-20 lg:py-28">
            <div className="container">
                <div className="flex justify-center">
                    <Image src={ImgCollage} className="max-w-[150px]" alt="img collage" />
                </div>
            </div>
        </div>
    )
}