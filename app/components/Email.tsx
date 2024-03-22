"use client"; 
import React from "react";
import { EmailBox } from "./EmailBox";

export const Email = () => {

  return (
    <>
      <div
        className="relative lg:bg-fixed w-full bg-cover bg-no-repeat bg-center flex justify-center items-center"
        style={{ backgroundImage: `url('/imagem.jpg')` }}
      >
        <span className="absolute inset-0 bg-black bg-opacity-60" />
        <EmailBox />
      </div>
    </>
  );
};
