"use client";

import { Link } from "react-scroll";

export default function ServicosText() {
  return (
    <>
      <div className="w-full shadow-about">
        <div className="py-12 px-12 xl:py-32 xl:px-32 pb-24 shadow-[0_10px_30px_0_rgba(0,0,0,.6)] relative gap-y-16 xl:gap-y-24 flex flex-col">
          <div className="w-full flex justify-center items-center flex-col">
            <div className="border-b-2 px-2 pb-2 border-[#1864c7] w-fit">
              <p className="text-[#8e8e8e] w-full text-2xl 2xl:text-4xl font-bold tracking-tight text-center">
                Nossos Serviços
              </p>
            </div>
            <p className="text-[#8e8e8e] font-semibold text-lg text-center lg:text-base 2xl:text-lg">
              Clique nos items para mais informações!
            </p>
          </div>
          <div className="flex flex-col xl:flex-row justify-evenly items-center gap-y-6 rounded-xl bg-[#101010] w-full shadow-[10px_0_30px_0_rgba(250,250,250,1))]">
            <Link activeClass="active" smooth spy duration={800} to={"compra"} className="w-full xl:w-1/4">
              <div //1º Serviço
                className="shadow-[0_20px_20px_-10px_rgba(0,0,0,.6)] hover:shadow-[0_30px_30px_-10px_rgba(0,0,0,.6)] cursor-pointer rounded-2xl overflow-hidden text-zinc-300 z-10 py-3 xl:py-6 lg:text-xl 2xl:text-2xl font-bold flex flex-col items-center justify-center gap-x-10 bg-zinc-900 hover:bg-[#222228] duration-200"
              >
                <div className="px-8 py-3 flex justify-center items-center h-1/3 ">
                  <h1>Compra</h1>
                </div>
              </div>
            </Link>

            <Link activeClass="active" smooth spy duration={800} to={"venda"} className="w-full xl:w-1/4">
              <div //2º Serviço
                className="shadow-[0_20px_20px_-10px_rgba(0,0,0,.6)] hover:shadow-[0_30px_30px_-10px_rgba(0,0,0,.6)] cursor-pointer rounded-2xl overflow-hidden text-zinc-300 z-10 py-3 xl:py-6 after:lg:text-xl 2xl:text-2xl font-bold flex flex-col items-center justify-center gap-x-10 bg-zinc-900 hover:bg-[#222228] duration-200"
              >
                <div className="px-8 py-3 flex justify-center items-center h-1/3 ">
                  <h1>Venda</h1>
                </div>
              </div>
            </Link>

            <Link activeClass="active" smooth spy duration={800} to={"plano"} className="w-full xl:w-1/4">
              <div //3º Serviço
                className="shadow-[0_20px_20px_-10px_rgba(0,0,0,.6)] hover:shadow-[0_30px_30px_-10px_rgba(0,0,0,.6)] cursor-pointer rounded-2xl overflow-hidden text-zinc-300 z-10 py-3 xl:py-6 lg:text-xl 2xl:text-2xl font-bold flex flex-col items-center justify-center gap-x-10 bg-zinc-900 hover:bg-[#222228] duration-200"
              >
                <div className="px-8 py-3 flex justify-center items-center h-1/3 ">
                  <h1>Plano Content</h1>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center">
        <div
          id="compra"
          className="py-12 px-12 xl:px-32 mx-4 xl:mx-32 border-b border-[#8e8e8e50] max-w-4xl"
        >
          <h2 className="text-4xl text-[#8e8e8e] font-bold px-3 mb-10">
            Compra
          </h2>
          <ul className="text-lg text-[#8e8e8e] flex gap-y-2 flex-col list-disc">
            <li>
              Vai comprar o seu tão sonhado carro premium, mas não sabe por onde
              começar?
            </li>
            <li>Será que o carro está em boas condições?</li>
            <li>Não sei de mecânica, posso estar entrando em uma furada?</li>
            <li>Não tenho tempo para visitar e nem negociar, e agora?</li>
            <li>
              {" "}
              Se você se identificou com
              <strong className="font-bold"> qualquer uma </strong> dessas
              perguntas, este serviço é para você.
            </li>
          </ul>
          <div className="w-11/12 h-px mx-auto" />
        </div>

        <div
          id="venda"
          className="py-12 px-12 xl:px-32 mx-4 xl:mx-32 border-b border-[#8e8e8e50] max-w-4xl"
        >
          <h2 className="text-4xl text-[#8e8e8e] font-bold px-3 mb-10">
            Venda
          </h2>
          <ul className="text-lg text-[#8e8e8e] flex gap-y-2 flex-col list-disc">
            <li>
              Chegou o momento de passar o seu veículo para frente e buscar
              novas experiências premium no mundo automotivo. Mas como fazer
              isso?
            </li>
            <li>Não sabe o valor do seu veículo?</li>
            <li>Não tem tempo para anunciar, negociar e apresentar o carro?</li>
            <li>Tem medo de cair em golpes?</li>
            <li>Cuidamos de toda esta parte burocrática para você!</li>
          </ul>
          <div className="w-11/12 h-px mx-auto" />
        </div>

        <div
          id="plano"
          className="py-12 px-12 xl:px-32 mx-4 xl:mx-32 border-b border-[#8e8e8e50] max-w-4xl"
        >
          <h2 className="text-4xl text-[#8e8e8e] font-bold px-3 mb-10">
            Plano Content
          </h2>
          <ul className="text-lg text-[#8e8e8e] flex gap-y-2 flex-col list-disc">
            <li>
              É fundamental ter boas fotos para gerar alcance e interesse no
              anúncio do seu veículo, e nós vamos te ajudar com isso caso você
              não tenha tempo para produzir o conteúdo ou não saiba como tirar
              as fotos e editá-las.
            </li>
            <li>
              Selecionamos o local onde iremos produzir um conteúdo que irá
              destacar o seu veículo dos demais anunciados, logo depois estas
              imagens irão receber uma edição as tornando ainda mais exclusivas
              e por fim serão utilizadas para o seu anúncio.
            </li>
          </ul>
          <div className="w-11/12 h-px mx-auto" />
        </div>
      </div>
    </>
  );
}
