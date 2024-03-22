"use client";
import axios from "axios";
import React, { useState } from "react";

export const EmailBox = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribeRes, setSubscribeRes] = useState("");

  const showMessage = () => {
    setShow(true);
  };

  const hideMessage = () => {
    setShow(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    if (!isValidEmail) {
      setSubscribeRes("Por favor, insira um endereço de E-mail válido.");
      setTimeout(() => {
        setSubscribeRes("");
      }, 3000);
      return;
    }

    try {
      const response = await axios.post(
        "https://back-end-omega-five.vercel.app/api/users",
        {
          email,
        }
      );

      if (response.status === 201) {
        setSubscribeRes(response.data.message);
        setTimeout(() => {
          setSubscribeRes("");
        }, 3000);
      } else if (response.status === 208) {
        setSubscribeRes("Este E-mail já está cadastrado.");
        console.log("Foi");

        setTimeout(() => {
          setSubscribeRes("");
        }, 3000);
      }
    } catch (error) {
      console.log(error);
      setSubscribeRes("Erro de conexão com o sistema");
      setTimeout(() => {
        setSubscribeRes("");
      }, 3000);
    }
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
  };

  return (
    <>
      <form className="lg:w-1/2 2xl:w-1/3 lg:bg-black/40 lg:backdrop-blur-md rounded-xl p-8 relative lg:my-40">
        <h1 className="text-zinc-400 text-sm lg:text-lg 2xl:text-2xl">
          Deseja receber conteúdos exclusivos e novos anúncios? Insira seu
          E-mail abaixo!
        </h1>
        <div className="input-group relative mt-4 sm:mt-8 lg:mt-12">
          <input
            id="inputEmail"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg p-2 sm:p-4 bg-black/40 border text-base 2xl:text-xl text-[#8e8e8e] border-zinc-500"
          />
          <label id="emailLabel" className="text-[#8e8e8e]">
            E-mail
          </label>
        </div>
        <button
          type="submit"
          onClick={handleButtonClick}
          className="w-full mb-3 lg:mb-0 mt-4 sm:mt-6 p-3 rounded-lg lg:bg-transparent border text-md lg:text-lg lg:text-zinc-400 lg:border-zinc-500 scale-95 lg:hover:scale-100 duration-200 lg:hover:bg-zinc-950 lg:hover:border-[#1864c7] lg:hover:text-[#1864c7] lg:hover:shadow-send bg-zinc-950 border-[#1864c7] text-[#1864c7] lg:shadow-none shadow-send"
        >
          Enviar
        </button>
        {subscribeRes && (
          <div className="text-lg absolute translate-y-[125%] w-full text-center bottom-0 text-zinc-400">
            {subscribeRes}
          </div>
        )}
      </form>
    </>
  );
};
