"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
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
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  const [loading, setLoading] = useState<string | null>(null);

  const handleImageClick = (productId: string) => {
    setLoading(productId);
  };

  return (
    <>
      <Swiper
        slidesPerView={1}
        navigation={true}
        pagination={true}
        spaceBetween={50}
        loop={true}
        breakpoints={{
          1280: {
            slidesPerView: 3,
          },
        }}
        className="carousel"
      >
        {products.map((product: simplifiedProduct) => (
          <SwiperSlide
            key={product._id}
            className="my-10 shadow-anuncios rounded-lg"
          >
            <div className="shadow-anuncios rounded-lg bg-zinc-900">
              <Link href={`/product/${product.slug}`}>
                <div
                  onClick={() => handleImageClick(product._id)}
                  className="aspect-video  overflow-hidden flex justify-center items-center w-full group-hover:opacity-75 relative"
                >
                  {loading === product._id && (
                    <div className="bg-black/60 z-[100] w-full h-full absolute flex justify-center items-center">
                      <span className="w-16 h-16 block bg-transparent border-transparent border-2 border-t-zinc-200 rounded-[50%] animate-loading"></span>
                    </div>
                  )}
                  <Image
                    src={product.imageUrl}
                    alt="Product image"
                    className="object-coverscale-100 hover:scale-110 duration-500 ease-in-out bg-center bg-cover "
                    width={1200}
                    height={800}
                  />
                </div>
                <div className="mt-4 pb-6 flex justify-between rounded-lg">
                  <div className="pl-8 pt-4 pb-6">
                    <h3 className="text-md md:text-xl text-gray-300">
                      {product.modelo}
                    </h3>
                    <p className="mt-1 absolute text-md md:text-lg text-gray-400">
                      {product.categoria}
                    </p>
                  </div>
                  <p className="text-lg md:text-xl font-medium pr-8 py-4 text-[#1eab72]">
                    {formatPrice(product.preco)}
                  </p>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
