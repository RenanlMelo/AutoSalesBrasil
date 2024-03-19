import React from "react";

export const Email = () => {
  return (
    <>
      <div
        className="relative lg:bg-fixed w-full bg-cover bg-no-repeat bg-center flex justify-center items-center"
        style={{ backgroundImage: `url('/imagem.jpg')` }}
      >
        <span className="absolute inset-0 bg-black bg-opacity-60" />
        <form className="lg:w-1/3 lg:bg-black/40 lg:backdrop-blur-md rounded-xl p-8 relative lg:my-40">
          <h1 className="text-zinc-400 text-base sm:text-lg lg:text-2xl">
            Deseja receber conteúdos exclusivos e novos anúncios? Insira seu
            E-mail abaixo!
          </h1>
          <div className="input-group relative mt-4 sm:mt-8 lg:mt-12">
            <input
              id="inputEmail"
              type="text"
              className="w-full rounded-lg p-2 sm:p-4 bg-black/40 border text-base lg:text-lg text-[#8e8e8e] border-zinc-500"
            />
            <label id="emailLabel" className="text-[#8e8e8e]">E-mail</label>
          </div>
          <button
            type="submit"
            className="w-full mb-3 lg:mb-0 mt-4 sm:mt-6 p-3 rounded-lg lg:bg-transparent border text-md lg:text-lg lg:text-zinc-400 lg:border-zinc-500 scale-95 lg:hover:scale-100 duration-200 lg:hover:bg-zinc-950 lg:hover:border-[#1864c7] lg:hover:text-[#1864c7] lg:hover:shadow-send bg-zinc-950 border-[#1864c7] text-[#1864c7] lg:shadow-none shadow-send"
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};
