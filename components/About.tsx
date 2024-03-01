export default function About() {
  return (
    <>
      <div className="w-full">
        <section className="mx-auto max-w-8xl mt-12 md:mt-32">
          <div className="mb-4 w-full flex px-0 md:px-16 xl:px-32 2xl:px-60">
            <h1 className="mx-10 border-b-4 text-center md:text-left border-red-700 font-bold text-[#505050] text-[1.5rem] sm:text-2xl md:mb-8 md:text-[1.9rem] lg:text-4xl xl:text-5xl tracking-normal xl:tracking-tight">
              <span className="text-green-600 tracking-tighter text-[1.6rem] sm:text-[1.9rem] xl:tracking-tight md:text-[2.2rem] lg:text-5xl xl:text-6xl">
                Conectando
              </span>{" "}
              vendedores e compradores
            </h1>
          </div>
          <div className="flex justify-center items-center sm:items-stretch flex-col lg:flex-row px-0 xl:px-32 2xl:px-60">
            <div className="w-full lg:bg-transparent bg-[#0B0227] lg:w-1/2 flex justify-center lg:justify-end ">
              <img
                src="/logo.png"
                className="w-2/3 mx-6 md:mx-0 lg:w-full  aspect-square"
              ></img>
            </div>
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
                dores de cabeça e burocracias.
              </p>
              <p className="text-[#404040] text-lg font-light mx-12 pb-6 indent-10 leading-7 text-justify">
                Assim, proporcionamos à você: Economia de tempo, uma experiência
                personalizada e singular, com uma relação de transparência e
                confiança. Convidamos você a vivenciar a diferença oferecida
                pela Auto Sales Brasil. <br />
              </p>
              <p className="text-[#404040] text-lg font-light px-12 pt-4 mb-8 leading-7 text-center mx-auto">
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
