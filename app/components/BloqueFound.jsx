import ImgFound from '@/public/found.png';
import Image from 'next/image';
import BtnPrimary from "@/app/components/Button/BtnPrimary";

export default function BloqueFound({ }) {
    return (
        <div className="bg-white relative z-[999] min-h-screen flex items-center">
            <div className="container">
                <div className="flex flex-col items-center text-center max-w-xl mx-auto">
                    <div className='mb-8 max-w-[300px]'>
                        <Image src={ImgFound} alt='img not found' className='max-w-full' />
                    </div>
                    <h4 className='text-astro-gray mb-6'>Page not found</h4>
                    <BtnPrimary styleType="borderGray" data={{ texto: "Go to the home", tipo: "page", pagina: "/" }}></BtnPrimary>
                </div>
            </div>
        </div>
    )
}