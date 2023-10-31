import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

type imagenes = {
  id: number;
  imgUrl: string;
};

const noticias: Array<imagenes> = [
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
  // const listRef = useRef<HTMLUListElement | null>(null);
  // const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //     const listNode = listRef.current;
  //     const imgNode = listNode?.querySelectorAll("li > img")[currentIndex];
  //     console.log(imgNode)

  //     if (imgNode) {
  //         imgNode.scrollIntoView({
  //             behavior: "smooth"
  //         });
  //     }

  // }, [currentIndex]);

  // const goToSlide = (slideIndex: number) => {
  //     setCurrentIndex(slideIndex);
  // }

  // return (
  //     <div className="main-container">
  //         <div className="slider-container">
  //             <div className="container-images">
  //                 <ul ref={listRef}>
  //                     {
  //                         noticias.map((item) => {
  //                             return <li key={item.id}>
  //                                 <img className='imagen-noticia' src={item.imgUrl} />
  //                             </li>
  //                         })
  //                     }
  //                 </ul>
  //             </div>
  //             <div className="dots-container">
  //                 {
  //                     noticias.map((_, idx) => (
  //                         <div key={idx}
  //                             className={`dot-container-item ${idx === currentIndex ? "active" : ""}`}
  //                             onClick={() => goToSlide(idx)}>
  //                             &#9865;
  //                         </div>))
  //                 }
  //             </div>
  //         </div>
  //     </div >
  // )
};

export { Carousel };
