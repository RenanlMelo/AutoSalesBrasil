"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import Image from "next/image";
import "./components.css";

export default function Footer() {
  const [show, setShow] = useState(false);

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

  const [email, setEmail] = useState("");
  const [subscribeRes, setSubscribeRes] = useState("");

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
      const checkEmailResponse = await axios.post(
        "http://localhost:9001/users/check-email",
        {
          email,
        }
      );

      if (checkEmailResponse.status === 200) {
        const response = await axios.post("http://localhost:9001/users", {
          email,
        });

        if (response.data.message === "Assinatura concluída com sucesso!") {
          setSubscribeRes(response.data.message);
          setTimeout(() => {
            setSubscribeRes("");
          }, 3000);
        }
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
    <footer
      id="footer"
      className="bg-[#040407] w-full flex flex-col-reverse lg:flex-row justify-between items-center bg-center px-16 lg:px-28 pt-24 lg:pt-32 relative"
    >
      <Image
        src="arrow.svg"
        alt="Retornar ao topo do site"
        width={50}
        height={50}
        className="bg-zinc-600 cursor-pointer rounded-full p-2 w-16 md:w-20 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-180 hover:bg-zinc-700/80 scale-[85%] hover:scale-100 duration-200  z-[100]"
        onMouseOver={showMessage}
        onMouseLeave={hideMessage}
        onClick={scrollToTop}
      ></Image>
      <AnimatePresence>
        {show && (
          <motion.span
            initial={{ y: 40, x: "50%", opacity: 0 }}
            animate={{ y: 40, x: "-50%", opacity: 1 }}
            exit={{ y: 40, x: "50%", opacity: 0 }}
            id="message"
            className="absolute top-0 left-1/2 -translate-x-1/2 text-xl text-zinc-400/70"
          >
            Retornar ao topo
          </motion.span>
        )}
      </AnimatePresence>
      <div className="w-full h-full flex flex-col">
        <div className="flex justify-between flex-col lg:flex-row gap-x-12">
          <div className="mb-12 lg:mb-0">
            <span className="text-lg md:text-2xl text-zinc-400 ">
              Entre em contato conosco via{" "}
              <strong className="text-[#25D366]">Whatsapp</strong> e anuncie
              imediatamente!
            </span>
            <div className="flex flex-col items-center justify-center h-full lg:max-w-md">
              <p className="text-zinc-400 mt-16 lg:mt-0 md:text-justify font-light mb-3 text-sm md:text-base">
                Deseja receber conteúdos exclusivos e novos anúncios? Insira seu
                E-mail abaixo!
              </p>
              <form className="w-full relative">
                <div className="input-group realtive">
                  <input
                    type="email"
                    id="inputFooter"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mb-2 mt-6 rounded-lg text-zinc-400 bg-transparent border-zinc-500"
                  />
                  <label id="footerLabel">E-mail</label>
                </div>
                <button
                  type="submit"
                  onClick={handleButtonClick}
                  className="bg-indigo-900 w-full cursor-pointer text-zinc-400 text-md md:text-lg font-semibold p-2 rounded-lg scale-100 hover:scale-105 hover:bg-indigo-950 duration-200"
                >
                  Enviar
                </button>
                {subscribeRes && (
                  <div className="text-lg absolute translate-y-[125%] w-full text-center bottom-0 text-zinc-400">
                    {subscribeRes}
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className="flex flex-col-reverse justify-between lg:justify-end  items-start h-full w-full lg:w-auto gap-y-10">
            <div className="mr-0 xl:mr-16 h-full">
              <p className="text-md md:text-xl text-zinc-300 mb-2 text-center">
                Horário de atendimento
              </p>
              <p className="text-sm md:text-md text-zinc-400 whitespace-nowrap">
                Segunda à sexta: 08:00 - 18:00
              </p>
              <p className="text-sm md:text-md text-zinc-400 whitespace-nowrap">
                Sábado e domingo: 10:00 - 18:00
              </p>
            </div>

            <div className="flex flex-col justify-center items-start xl:items-center h-full">
              <p className="text-lg md:text-xl text-zinc-300 mb-3">
                Redes Sociais
              </p>
              <a
                href="https://www.instagram.com/autosalesbrasil/"
                className="social-link flex justify-center items-center hover:text-[#150447]"
              >
                <svg
                  fill="#ccc"
                  width="60px"
                  height="60px"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  className="social-icon mr-2 bg-zinc-700/40 p-3 rounded-lg duration-300 scale-75 md:scale-100"
                >
                  <title>instagram</title>
                  <path d="M25.805 7.996c0 0 0 0.001 0 0.001 0 0.994-0.806 1.799-1.799 1.799s-1.799-0.806-1.799-1.799c0-0.994 0.806-1.799 1.799-1.799v0c0.993 0.001 1.798 0.805 1.799 1.798v0zM16 20.999c-2.761 0-4.999-2.238-4.999-4.999s2.238-4.999 4.999-4.999c2.761 0 4.999 2.238 4.999 4.999v0c0 0 0 0.001 0 0.001 0 2.76-2.237 4.997-4.997 4.997-0 0-0.001 0-0.001 0h0zM16 8.3c0 0 0 0-0 0-4.253 0-7.7 3.448-7.7 7.7s3.448 7.7 7.7 7.7c4.253 0 7.7-3.448 7.7-7.7v0c0-0 0-0 0-0.001 0-4.252-3.447-7.7-7.7-7.7-0 0-0 0-0.001 0h0zM16 3.704c4.003 0 4.48 0.020 6.061 0.089 1.003 0.012 1.957 0.202 2.84 0.538l-0.057-0.019c1.314 0.512 2.334 1.532 2.835 2.812l0.012 0.034c0.316 0.826 0.504 1.781 0.516 2.778l0 0.005c0.071 1.582 0.087 2.057 0.087 6.061s-0.019 4.48-0.092 6.061c-0.019 1.004-0.21 1.958-0.545 2.841l0.019-0.058c-0.258 0.676-0.64 1.252-1.123 1.726l-0.001 0.001c-0.473 0.484-1.049 0.866-1.692 1.109l-0.032 0.011c-0.829 0.316-1.787 0.504-2.788 0.516l-0.005 0c-1.592 0.071-2.061 0.087-6.072 0.087-4.013 0-4.481-0.019-6.072-0.092-1.008-0.019-1.966-0.21-2.853-0.545l0.059 0.019c-0.676-0.254-1.252-0.637-1.722-1.122l-0.001-0.001c-0.489-0.47-0.873-1.047-1.114-1.693l-0.010-0.031c-0.315-0.828-0.506-1.785-0.525-2.785l-0-0.008c-0.056-1.575-0.076-2.061-0.076-6.053 0-3.994 0.020-4.481 0.076-6.075 0.019-1.007 0.209-1.964 0.544-2.85l-0.019 0.059c0.247-0.679 0.632-1.257 1.123-1.724l0.002-0.002c0.468-0.492 1.045-0.875 1.692-1.112l0.031-0.010c0.823-0.318 1.774-0.509 2.768-0.526l0.007-0c1.593-0.056 2.062-0.075 6.072-0.075zM16 1.004c-4.074 0-4.582 0.019-6.182 0.090-1.315 0.028-2.562 0.282-3.716 0.723l0.076-0.025c-1.040 0.397-1.926 0.986-2.656 1.728l-0.001 0.001c-0.745 0.73-1.333 1.617-1.713 2.607l-0.017 0.050c-0.416 1.078-0.67 2.326-0.697 3.628l-0 0.012c-0.075 1.6-0.090 2.108-0.090 6.182s0.019 4.582 0.090 6.182c0.028 1.315 0.282 2.562 0.723 3.716l-0.025-0.076c0.796 2.021 2.365 3.59 4.334 4.368l0.052 0.018c1.078 0.415 2.326 0.669 3.628 0.697l0.012 0c1.6 0.075 2.108 0.090 6.182 0.090s4.582-0.019 6.182-0.090c1.315-0.029 2.562-0.282 3.716-0.723l-0.076 0.026c2.021-0.796 3.59-2.365 4.368-4.334l0.018-0.052c0.416-1.078 0.669-2.326 0.697-3.628l0-0.012c0.075-1.6 0.090-2.108 0.090-6.182s-0.019-4.582-0.090-6.182c-0.029-1.315-0.282-2.562-0.723-3.716l0.026 0.076c-0.398-1.040-0.986-1.926-1.729-2.656l-0.001-0.001c-0.73-0.745-1.617-1.333-2.607-1.713l-0.050-0.017c-1.078-0.416-2.326-0.67-3.628-0.697l-0.012-0c-1.6-0.075-2.108-0.090-6.182-0.090z"></path>
                </svg>
                <p className="text-md md:text-lg text-zinc-400 text-center">
                  @autosalesbrasil
                </p>
              </a>

              <a
                className="phone-link flex justify-center items-center mt-2"
                href="https://wa.me/5515992485445"
              >
                <svg
                  fill="#ccc"
                  width="60px"
                  height="60px"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  className="phone-icon mr-2 hover:bg-zinc-700/60 bg-zinc-700/40 p-3 rounded-lg duration-300 scale-75 md:scale-100"
                >
                  <title>whatsapp</title>
                  <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path>
                </svg>
                <p className="text-md md:text-lg text-zinc-400 text-center">
                  (15) 99248-5445
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className=" text-2xl text-zinc-400 border-t border-zinc-600 py-8 mt-10 md:mt-20 w-full flex flex-col md:flex-row gap-y-6 md:gap-y-0 justify-center items-center gap-x-6">
          <Image
            src="/logo3.png"
            alt="logo"
            width={120}
            height={120}
            className="w-24 rounded-full shadow-logoFooter font-krona"
          />
          <div className="flex flex-col items-center">
            <span className="name font-semibold text-lg md:text-2xl text-zinc-200">
              Auto Sales Brasil
            </span>
            <span className="w-full bg-zinc-600 h-px shadow-line" />
            <span className="w-2/3 mt-2 bg-zinc-600 h-px shadow-line" />
          </div>
        </div>
        <div className="text-xs md:text-sm text-zinc-300 border-t border-zinc-600 pt-8 pb-12 ">
          Copyright © 2024 Renan Melo
        </div>
      </div>
    </footer>
  );
}
