import Link from "next/link";
import React from "react";

export default async function ServicosResume() {
  return (
    <>
      <div className="w-full py-32 px-32">
        <div className="w-full flex flex-col justify-center items-center relative">
          <span className="text-2xl md:text-4xl w-full text-center md:text-left mb-20 font-bold tracking-tight text-[#8e8e8e]">
            <p className="border-b-2 border-[#1864c7] px-2 pb-2 w-fit">
              Serviços
            </p>
          </span>
          <div className="pb-16 absolute right-0 top-16">
            <Link href="/servicos" className="text-2xl p-3 border rounded-lg hover:shadow-send border-[#1864c7] text-[#1864c7] hover:scale-110 duration-200">
              Clique aqui para acessar nossa página com mais detalhes!
            </Link>
          </div>
          <div className="text-[#8e8e8e] flex flex-col justify-center items-start w-full">
            <h2 className="text-3xl border-b border-zinc-500 p-2">Compra</h2>
            <p className="text-lg max-w-2xl border-r border-zinc-500 p-4">
              Vai comprar o seu tão sonhado carro premium, mas não sabe por onde
              começar?
            </p>
          </div>
          <div className="text-[#8e8e8e] flex flex-col justify-center items-end w-full">
            <h2 className="text-3xl border-b border-zinc-500 p-2">Venda</h2>
            <p className="text-lg max-w-2xl border-l border-zinc-500 p-4">
              Chegou o momento de passar o seu veículo para frente e buscar
              novas experiências premium no mundo automotivo. Mas como fazer
              isso?
            </p>
          </div>
          <div className="text-[#8e8e8e] flex flex-col justify-center items-start w-full">
            <h2 className="text-3xl border-b border-zinc-500 p-2">
              Plano Content
            </h2>
            <p className="text-lg max-w-2xl border-r border-zinc-500 p-4">
              Vai vender seu veículo e gostaria de fotos exclusivas para chamar
              mais atenção?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
