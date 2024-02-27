export default function About() {
  return (
    <>
      <div className="w-full">
        <section className="mx-auto px-8 max-w-8xl md:px-16 xl:px-32 2xl:px-60 mt-32">
          <div className="mb-4 w-full flex ">
            <h1 className="w-fit border-b-4 border-red-700 text-sm font-bold text-[#505050] text-[1.5rem] sm:text-2xl md:mb-8 md:text-[1.9rem] lg:text-4xl xl:text-5xl tracking-normal xl:tracking-tight">
              <span className="text-green-500 text-[1rem] sm:text-[1.9rem] xl:tracking-tight md:text-[2.2rem] lg:text-5xl xl:text-6xl">
                Conectando
              </span>{" "}
              vendedores e compradores
            </h1>
          </div>
          <div className="flex justify-center">
            <img src="/logo.png" className="w-1/3  aspect-square"></img>
            <div className="w-full flex flex-col justify-center items-start border-r shadow-about border-zinc-400">
              <p className="text-[#404040] text-lg font-light m-12 pb-6 mb-0 indent-10 leading-7 text-justify">
                A{" "}
                <span className="font-semibold text-[#505050]">
                  Auto Sales Brasil
                </span>{" "}
                é o resultado da paixão de dois sócios pelo universo automotivo.
                Com o intuito de auxiliar nossos clientes, cuidamos da{" "}
                <span className="font-semibold text-[#505050]">
                  compra e venda do seu veículo
                </span>
                , descomplicando todo o processo deste momento, minimizando
                dores de cabeça e burocracias. Assim, proporcionamos à você:
                Economia de tempo, uma experiência personalizada e singular, com
                uma relação de transparência e confiança. Convidamos você a
                vivenciar a diferença oferecida pela Auto Sales Brasil. <br />
              </p>
              <p className="text-[#404040] text-lg font-light px-12 pt-4 mb-4 leading-7 text-center mx-auto">
                Entre em
                <span> </span>
                <a
                  href="#footer"
                  className="font-semibold underline hover:text-red-700"
                >
                  contato
                </a>{" "}
                <span> </span>
                conosco e experimente uma abordagem única.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
