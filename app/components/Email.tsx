import React from "react";

export const Email = () => {
  return (
    <>
      <div
        className="relative bg-fixed w-full  bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url('/imagem.jpg')` }}
      >
        <span className="absolute inset-0 bg-black bg-opacity-60" />
        <form className="w-1/3 bg-black/40 backdrop-blur-md rounded-xl p-8 relative my-40">
          <h1 className="text-zinc-400 text-2xl">
            Deseja receber conteúdos exclusivos e novos anúncios? Insira seu
            E-mail abaixo!
          </h1>
          <div className="input-group relative mt-12">
            <input
              id="inputEmail"
              type="text"
              className="w-full rounded-lg bg-black/40 border text-lg text-zinc-400 border-zinc-500"
            />
            <label id="emailLabel">E-mail</label>
          </div>
          <button
            type="submit"
            className="w-full mt-6 p-3 rounded-lg bg-transparent border text-lg text-zinc-400 border-zinc-500 scale-95 hover:scale-100 duration-200 hover:bg-zinc-950 hover:border-[#1864c7] hover:text-[#1864c7] hover:shadow-send"
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};
