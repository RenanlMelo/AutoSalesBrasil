import Image from "next/image";
import React from "react";

export default function Sidebar() {
  return (
    <>
      <div className="z-[80] fixed top-0 right-0 flex justify-center items-center flex-col">
        <div className="shadow-2xl backdrop-blur-xl bg-white/50 py-6 w-56 font-semibold">
          <p className="text-xl py-3 w-full text-center hover:shadow-sidebaritems duration-150 ease-in-out">Sobre</p>
          <p className="text-xl py-3 w-full text-center hover:shadow-sidebaritems duration-150 ease-in-out">Destaques</p>
          <p className="text-xl py-3 w-full text-center hover:shadow-sidebaritems duration-150 ease-in-out">Nossa Equipe</p>
        </div>
        <div className="bg-[#303030] rounded-b-lg">
          <Image src="/arrow.svg" alt="Seta" />
        </div>
      </div>
    </>
  );
}
