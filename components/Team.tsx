import Image from "next/image";
import React from "react";

export default function Team() {
  return (
    <div className="w-full flex flex-col justify-center text-[#ddd] items-center bg-[#202032] py-24 px-10">
      <h1 className="text-2xl lg:text-4xl font-bold mb-8 border-b px-2 pb-2 border-slate-500 ">
        Nossa Equipe
      </h1>
      <div className="grid gap-x-40 gap-y-20 w-full grid-rows-[2] grid-cols-1 xl:grid-cols-2 xl:grid-rows-1 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl my-6">
        <div className="flex justify-start items-start text-start flex-col col-span-1 row-start-1 w-full h-fit">
          <Image
            src="./fotoGustavo.jpg"
            alt="Gustavo"
            className="w-[200px] md:w-[270px] mx-auto mb-10 rounded-full"
          />
          <h3 className="p-2 text-lg md:text-2xl font-bold text-[#6e97e3]">
            Gustavo Coloniesi
          </h3>
          <p className="p-2 text-md md:text-xl font-semibold text-[#80a0dc]">
            Experiente em veículos de categoria premium
          </p>
          <p className="p-2 text-xs md:text-base text-justify indent-10 leading-7 font-light border-t border-slate-600">
            Desde a infância, seu coração bate mais forte por carros, o que
            alimenta uma paixão duradoura pelo universo automobilístico. Em
            2018, mergulhou ainda mais nesse fascinante mundo, adquirindo
            conhecimentos técnicos e acumulando experiências valiosas. Agora,
            compartilha-as com você em busca de auxiliar na concretização da sua
            venda ou na realização do seu sonho de adquirir um veículo premium.
            Uma jornada automobilística especial, guiada por quem entende e
            valoriza cada detalhe.
          </p>
        </div>

        <div className="flex justify-start items-start text-start flex-col h-full col-span-1 row-start-2 xl:row-start-1 w-full">
          <Image
            src="./fotoBruno.jpg"
            alt="Bruno"
            className="w-[200px] md:w-[270px] mx-auto mb-10 rounded-full"
          />
          <h3 className="p-2 text-xl md:text-2xl font-bold text-[#6e97e3]">
            Bruno Reis
          </h3>
          <p className="p-2 text-md md:text-xl text-justify font-semibold text-[#80a0dc]">
            Responsável por Finanças & Gestão.
          </p>
          <p className="p-2 text-xs md:text-base text-justify indent-10 leading-7 font-light border-t border-slate-600">
            Co-fundador da Auto Sales Brasil, Bruno é um apaixonado por veículos
            desde os seus primeiros passos. Movido pela paixão e guiado por uma
            visão empreendedora, combinou sua fascinação por carros com um
            profundo interesse em finanças e gestão. Inspirado por ícones do
            mundo dos negócios, ele se comprometeu e compromete-se a se
            aprimorar constantemente. "Nossa missão vai além de simplesmente
            vender veículos, é sobre construir uma relação com amigos clientes,
            apaixonados tanto por qualidade quanto por confiabilidade."
          </p>
        </div>
      </div>
    </div>
  );
}
