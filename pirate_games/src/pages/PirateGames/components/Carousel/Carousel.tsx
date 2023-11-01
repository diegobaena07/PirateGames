import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Imagen } from "../../../../interfaces/General";

const noticias: Array<Imagen> = [
    {
        id: 1,
        imgUrl: "./img/black banner.jpg",
    },
    {
        id: 2,
        imgUrl: "./img/DBZ Budokai Tenkaichi 4 banner.jpg",
    },
    {
        id: 3,
        imgUrl: "./img/Dios de la guerra 3 banner.jpg",
    },
    {
        id: 4,
        imgUrl: "./img/Efootball 2024 banner.jpg",
    },
];

const Carousel = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                allowTouchMove={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    noticias.map((item) => {
                        return (
                            <SwiperSlide className="">
                                <img className='imagen-noticia' src={item.imgUrl} />
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
        </>
    );
};

export { Carousel };
