"use client";

import React, { useRef } from "react";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Product } from "@/types";
import PrimaryProductCard from "./PrimaryProductCard";
import "swiper/css";
import "swiper/css/navigation";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import TitleWrapper from "./TitleWrapper";

type Props = {
  title: string;
  products: Product[];
};
function SwiperContainer({ title, products }: Props) {
  const swiperRef: any = useRef<typeof Swiper | any>(null);

  return (
    <div className="space-y-5 container">
      <div className="flex justify-between items-center">
        <TitleWrapper title={title} />
        <div>
          <button
            onClick={() => {
              if (swiperRef) {
                swiperRef?.current.slidePrev();
              }
            }}
            className="text-secondary/70 disabled:text-secondary/20"
          >
            <LiaAngleLeftSolid size={24} />
          </button>
          <button
            onClick={() => {
              if (swiperRef) {
                swiperRef?.current?.slideNext();
              }
            }}
            className="text-secondary/70 disabled:text-secondary/20"
          >
            <LiaAngleRightSolid size={24} />
          </button>
        </div>
      </div>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={20}
        breakpoints={{
          100: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {products.map((product: Product, index) => {
          return (
            <SwiperSlide key={index}>
              <PrimaryProductCard product={product} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default SwiperContainer;
