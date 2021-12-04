import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);

function BannerSwiper() {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={"auto"}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="mySwiper my-2"
    >
      <SwiperSlide className="px-2">
        <img className="rounded-lg" src="/images/banner-mobile1.webp" />
      </SwiperSlide>
      <SwiperSlide className="px-2">
        <img className="rounded-lg" src="/images/banner-mobile2.webp" />
      </SwiperSlide>
      <SwiperSlide className="px-2">
        <img className="rounded-lg" src="/images/banner-mobile3.webp" />
      </SwiperSlide>
    </Swiper>
  );
}

export default BannerSwiper;
