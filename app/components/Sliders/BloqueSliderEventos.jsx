import CardEvento from "@/app/components/Cards/CardEvento";
import BtnNavigation from "@/app/components/Button/BtnNavigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/react';
import 'swiper/css/navigation';
import { useEffect, useRef, useState } from 'react';

export default function BloqueSliderEventos({ listEventos, openModal = () => {} }) {
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)
    const bulletsRef = useRef(null);
    const [swiper, setSwiper] = useState()
    let delay = 0;

    useEffect(() => {
        if (swiper) {
            swiper.params.pagination.el = bulletsRef.current
            swiper.init()
        }
    }, [swiper])

    const handleSlideTo = (index) => {
        swiper.slideTo(index);
    };

    return (
        <div className="overflow-x-hidden">
            <div className="container xl:pr-[60%]">
                <Swiper
                    onSwiper={setSwiper}
                    modules={[Navigation, Pagination]}
                    className='w-full !overflow-visible swiper-eventos'
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
                            spaceBetween: 24,
                        },
                        1280: {
                            slidesPerView: 1,
                            spaceBetween: 40,
                        },
                    }}
                >

                    {
                        listEventos.map((item, index) => {
                            if (index !== 0)
                                delay += 0.2;
                            return (
                                <SwiperSlide key={index}>
                                    <CardEvento openModal={openModal} onClick={handleSlideTo} index={index} animationHover={true} delay={delay} key={`card-evento-${index}`} data={item} />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <BtnNavigation
                    bulletsRef={bulletsRef}
                    refNext={navigationNextRef} refPrev={navigationPrevRef} />
            </div>
        </div>
    )
}