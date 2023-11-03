import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Imagen } from "../../Interface/General";

type Noticias = {
    noticias: Array<Imagen>;
}

const Carousel = ({noticias}: Noticias) => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                allowTouchMove={true}
                autoplay={{
                    delay: 2000,
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
                            <SwiperSlide key={Math.random()}>
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
