import LogoLoader from '@/public/logo-gris.png';
import Image from 'next/image';

export default function Loader({ textLoader = "Loading..." }) {
    
    return (
        <div id="loaderModal" className="fixed top left-0 z-[100] h-screen w-full bg-white flex items-center">
            <div className='absolute top-4 left-0 w-full'>
                <div className="container">
                    <div className="h-[80px] w-full flex justify-between items-center">
                        <Image src={LogoLoader} className="max-w-full" alt="logo stregis loader" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="flex justify-center">
                    <h1 className={`text-astro-gray loader`} data-text={`${textLoader}`} ></h1>
                </div>
            </div>
        </div>
    )
}