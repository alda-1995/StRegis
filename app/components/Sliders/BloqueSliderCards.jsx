import CardEvento from "@/app/components/Cards/CardEvento";
import BtnNavigation from "@/app/components/Button/BtnNavigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/react';
import 'swiper/css/navigation';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function BloqueSliderCards({ listCards, openModal = () => {} }) {
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)
    const bulletsRef = useRef(null);
    const [swiper, setSwiper] = useState();
    const isLg = useMediaQuery({ query: '(min-width: 1024px)' });
    const cardsMin = (isLg) ? 2 : 1;
    let delay = 0;

    useEffect(() => {
        if (swiper) {
            swiper.params.pagination.el = bulletsRef.current
            swiper.init()
        }
    }, [swiper])

    return (
        <div className="w-full">
            <Swiper
                onSwiper={setSwiper}
                modules={[Navigation, Pagination]}
                className='w-full !overflow-visible'
                spaceBetween={16}
                slidesPerView={1}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                pagination={{
                    el: bulletsRef?.current,
                    type: "fraction",
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 16
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 24
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 24
                    },
                    1280: {
                        slidesPerView: 2,
                        spaceBetween: 40
                    },
                }}
            >

                {
                    listCards.map((item, index) => {
                        if (index !== 0)
                        delay += 0.3;
                        return (
                            <SwiperSlide className='!h-auto !flex !items-stretch' key={index}>
                                <CardEvento openModal={openModal} key={`card-evento-${index}`} delay={delay} properties="bg-white" data={item} />
                            </SwiperSlide>)
                    })
                }
            </Swiper>
            {
                listCards.length > cardsMin && (
                    <BtnNavigation
                        bulletsRef={bulletsRef}
                        refNext={navigationNextRef} refPrev={navigationPrevRef} />
                )
            }
        </div>
    )
}