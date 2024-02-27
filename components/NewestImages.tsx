"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { simplifiedProduct } from "@/app/interface";

import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";
register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "./components.css";

interface iAppProps {
  products: any;
}

export default function NewestImages({ products }: iAppProps) {

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <>
      <Swiper
        slidesPerView={1}
        navigation={true}
        pagination={true}
        loop={true}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
        }}
        grabCursor={true}
        className="carousel"
      >
        {products.map((product: simplifiedProduct) => (
          <SwiperSlide
            key={product._id}
            className="m-10 shadow-anuncios rounded-lg"
          >
            <div className="group-relative overflow-hidden shadow-anuncios rounded-lg">
              <div className="aspect-[1.7/1] w-full overflow-hidden bg-gray-200 group-hover:opacity-75 lg:h-80">
                <Link href={`/product/${product.slug}`}>
                  <Image
                    src={product.imageUrl}
                    alt="Product image"
                    className="w-full h-full object-cover lg:h-full lg:w-full scale-100 hover:scale-110 duration-500 ease-in-out"
                    width={700}
                    height={270}
                  />
                </Link>
              </div>
              <div className="mt-4 pb-2 flex justify-between">
                <div className="px-8 pt-4 pb-6">
                  <h3 className="text-xl text-gray-700">
                    <Link href={`/product/${product.slug}`}>
                      {product.modelo}
                    </Link>
                  </h3>
                  <p className="mt-1 text-lg text-gray-500">
                    {product.categoria}
                  </p>
                </div>
                <p className="text-xl font-medium pr-8 pt-4 text-gray-900">
                  {formatPrice(product.preco)}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
