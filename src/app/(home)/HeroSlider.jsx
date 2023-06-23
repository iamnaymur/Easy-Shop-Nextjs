"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/bundle";
import { Autoplay, EffectFade, Navigation } from "swiper";
import mainSlider from "@/hooks/mainSlider";
import SingleHeroSlider from "./SingleHeroSlider";
const HeroSlider = () => {
  return (
    <div className="main-slider">
      <Swiper
        slidesPerView={1}
        loop
        navigation
        autoplay
        effect="fade"
        modules={[Navigation, EffectFade, Autoplay]}
      >
        {mainSlider.map((slider) => (
          <SwiperSlide key={slider.id}>
            <SingleHeroSlider slider={slider} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
