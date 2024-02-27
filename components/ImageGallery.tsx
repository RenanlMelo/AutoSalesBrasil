"use client";

import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";
register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "./components.css";

interface iAppProps {
  images: any;
}

export default function ImageGallery({ images }: iAppProps) {
  const [bigImage, setBigImage] = useState(images[0]);

  const handleChangeImage = (image: any) => {
    setBigImage(image);
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <>
      <div className="flex flex-col xl:col-span-3 mb-8">
        <div className="bg-gray-100 hidden lg:block">
            <Image
              src={urlFor(bigImage).url()}
              alt="Photo"
              width={750}
              height={750}
              className="h-full w-full object-cover object-center"
            />

          </div>
        <div>
          <Swiper
            slidesPerView={1}
            navigation={true}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
            }}
            grabCursor={true}
            pagination={true}
            className="carousel mt-10"
          >
            {images.map((image: any, idx: any) => (
              <SwiperSlide key={idx} className="bg-gray-300 w-full mb-4">
                <Image
                  src={urlFor(image).url()}
                  width={1530}
                  height={900}
                  alt="Foto"
                  className="aspect-[1.5/1] object-cover object-center cursor-pointer lg:hover:scale-110 hover:z-50 duration-300"
                  onClick={() => handleChangeImage(image)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
