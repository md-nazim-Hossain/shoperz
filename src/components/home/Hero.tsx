"use client";
import { Banner } from "@/types/types";
import React from "react";
import PrimaryButton from "../shared/Buttons/PrimaryButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { heroBannerData } from "@/data/bannerData";
import { Pagination, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import HtmlParser from "react-html-parser";

function Hero() {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      loop={true}
      autoplay
      slidesPerView={1}
      modules={[Pagination, Autoplay, A11y]}
      className="w-full h-[calc(100vh-172px)]"
    >
      {heroBannerData.map((banner: Banner, index: number) => {
        return (
          <SwiperSlide
            style={{
              backgroundImage: `linear-gradient(-225deg,${banner?.color[0]} 0%,${banner?.color[1]} 100%)`,
            }}
            className="w-full h-full overflow-hidden"
            key={index}
          >
            <div className="container h-full flex gap-5 flex-col lg:flex-row justify-between">
              <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
                <div className="w-full xl:w-3/5 ml-auto space-y-10">
                  <div className="parser">{HtmlParser(banner?.title)}</div>
                  <div className="flex justify-center lg:justify-start items-center">
                    <PrimaryButton title="Find Out More" />
                  </div>
                </div>
              </div>
              <div
                style={{
                  background: `url(${banner?.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "bottom center",
                }}
                className="w-full aspect-square lg:flex-1"
              ></div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Hero;
