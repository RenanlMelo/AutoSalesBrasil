"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ServicosText({ image1, image2, image3 }: any) {
  const [showText, setShowText] = useState(false);

  const openInfo = () => {
    setShowText(true);
  };

  const closeInfo = () => {
    setTimeout(() => {
      setShowText(false);
      document.body.style.overflow = "visible";
    }, 300);
  };

  const [showText2, setShowText2] = useState(false);

  const openInfo2 = () => {
    setShowText2(true);
  };

  const closeInfo2 = () => {
    setTimeout(() => {
      setShowText2(false);
      document.body.style.overflow = "visible";
    }, 300);
  };

  const [showText3, setShowText3] = useState(false);

  const openInfo3 = () => {
    setShowText3(true);
  };

  const closeInfo3 = () => {
    setTimeout(() => {
      setShowText3(false);
      document.body.style.overflow = "visible";
    }, 300);
  };

  return (
    <>
      <div className="w-full shadow-about">
        {(showText || showText2 || showText3) && (
          <div className="fixed bg-black opacity-50 inset-0 z-[60]" />
        )}

        <div className="p-32 pb-52 relative">
          <div className="w-full flex justify-center items-center flex-col">
            <div className="border-b-2 px-2 pb-2 border-[#1864c7] w-fit">
              <p className="text-[#8e8e8e] w-full text-xl lg:text-2xl 2xl:text-4xl font-bold tracking-tight text-center">
                Nossos Serviços
              </p>
            </div>
            <p className="text-[#8e8e8e] font-semibold text-sm lg:text-base 2xl:text-lg">
              Clique nos items para mais informações!
            </p>
          </div>
          <div className="flex justify-evenly items-center py-16 rounded-xl bg-[#101010] w-4/6 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 shadow-[10px_0_30px_0_rgba(250,250,250,1))]">
            <div //1º Serviço
              className="cursor-pointer rounded-2xl overflow-hidden text-zinc-300 z-10 py-6 w-full xl:w-1/4 lg:text-xl 2xl:text-2xl font-bold flex flex-col items-center justify-center gap-x-10 bg-zinc-900 hover:scale-105 duration-200"
              onClick={openInfo}
            >
              <div className="px-8 py-3 flex justify-center items-center h-1/3 ">
                <h1>Compra</h1>
              </div>
            </div>

            <div //2º Serviço
              className="cursor-pointer rounded-2xl overflow-hidden text-zinc-300 z-10 py-6 w-full xl:w-1/4 lg:text-xl 2xl:text-2xl font-bold flex flex-col items-center justify-center gap-x-10 bg-zinc-900 hover:scale-105 duration-200"
              onClick={openInfo2}
            >
              <div className="px-8 py-3 flex justify-center items-center h-1/3 ">
                <h1>Venda</h1>
              </div>
            </div>

            <div //3º Serviço
              className="cursor-pointer rounded-2xl overflow-hidden text-zinc-300 z-10 py-6 w-full xl:w-1/4 lg:text-xl 2xl:text-2xl font-bold flex flex-col items-center justify-center gap-x-10 bg-zinc-900 hover:scale-105 duration-200"
              onClick={openInfo3}
            >
              <div className="px-8 py-3 flex justify-center items-center h-1/3 ">
                <h1>Plano Content</h1>
              </div>
            </div>
          </div>
          <div className="absolute right-0">
            <a
              href="https://wa.me/5515992485445"
              className="mb-36 md:mb-0 w-auto text-lg text-zinc-300 border px-6 py-4 rounded-xl hover:text-[#25D366] hover:border-[#25D366] hover:scale-105 duration-200"
            >
              Entre em contato conosco via whatsapp!
            </a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showText && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeInfo}
            className="w-full h-full flex justify-center items-center relative md:fixed inset-0 z-[70] backdrop-blur-sm md:mb-0"
          >
            <motion.div className="relative z-[70] h-full md:h-auto">
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={closeInfo}
                src="./close.svg"
                alt="Fechar"
                className="absolute cursor-pointer top-4 right-4 bg-zinc-700/70 p-2 rounded-full hover:bg-zinc-600/30 hover:scale-110 duration-200"
              />
              <motion.ul className="text-base 2xl:text-xl text-zinc-400 h-auto font-light leading-10 list-disc bg-[#121215] z-[70] p-20 rounded-xl  max-w-5xl flex flex-col justify-center items-start text-justify">
                <motion.li
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Vai comprar o seu tão sonhado carro premium, mas não sabe por
                  onde começar?
                </motion.li>
                <motion.li
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Vai comprar o seu tão sonhado carro premium, mas não sabe por
                  onde começar? Será que o carro está em boas condições?
                </motion.li>
                <motion.li
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Vai comprar o seu tão sonhado carro premium, mas não sabe por
                  onde começar? Será que o carro está em boas condições? Será
                  que é golpe?
                </motion.li>
                <motion.li
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Vai comprar o seu tão sonhado carro premium, mas não sabe por
                  onde começar? Será que o carro está em boas condições? Será
                  que é golpe? Não sei de mecânica, posso estar entrando em uma
                  furada?
                </motion.li>
                <motion.li
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Vai comprar o seu tão sonhado carro premium, mas não sabe por
                  onde começar? Será que o carro está em boas condições? Será
                  que é golpe? Não sei de mecânica, posso estar entrando em uma
                  furada? Não tenho tempo para visitar e nem negociar, e agora?
                </motion.li>
                <motion.li
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Vai comprar o seu tão sonhado carro premium, mas não sabe por
                  onde começar? Será que o carro está em boas condições? Será
                  que é golpe? Não sei de mecânica, posso estar entrando em uma
                  furada? Não tenho tempo para visitar e nem negociar, e agora?
                  Se você se identificou com qualquer uma dessas perguntas, este
                  serviço é para você.
                </motion.li>
                <motion.p
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ delay: 0.3 }}
                  className="w-full text-center mt-4"
                ></motion.p>
              </motion.ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showText2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeInfo2}
            className="w-full h-full flex justify-center items-center fixed inset-0 z-[70] top-0 backdrop-blur-sm shadow-servicos"
          >
            <motion.div className="relative z-[70]">
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={closeInfo2}
                src="./close.svg"
                alt="Fechar"
                className="absolute cursor-pointer top-4 right-4 bg-zinc-700/70 p-2 rounded-full hover:bg-zinc-600/30 hover:scale-110 duration-200"
              />
              <motion.ul className="text-base 2xl:text-xl text-zinc-400 h-96 font-light leading-10 list-disc bg-[#121215] z-[70] p-20 rounded-xl  max-w-5xl flex flex-col justify-center items-start text-justify">
                <motion.li
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Chegou o momento de passar o seu veículo para frente e buscar
                  novas experiências premium no mundo automotivo. Mas como fazer
                  isso?
                </motion.li>
                <motion.li
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Não sabe o valor do seu veículo?
                </motion.li>
                <motion.li
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Não tem tempo para anunciar, negociar e apresentar o carro?
                </motion.li>
                <motion.li
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Tem medo de cair em golpes?
                </motion.li>
                <motion.li
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Cuidamos de toda esta parte burocrática para você!
                </motion.li>
                <motion.p
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ delay: 0.3 }}
                  className="w-full text-center mt-4"
                >
                  Entre em contato pelo botão{" "}
                  <strong className="font-bold">abaixo</strong> para podermos
                  lhe ajudar.
                </motion.p>
              </motion.ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showText3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeInfo3}
            className="w-full h-full flex justify-center items-center fixed inset-0 z-[70] top-0 backdrop-blur-sm shadow-servicos"
          >
            <motion.div className="relative z-[70]">
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={closeInfo3}
                src="./close.svg"
                alt="Fechar"
                className="absolute cursor-pointer top-4 right-4 bg-zinc-700/70 p-2 rounded-full hover:bg-zinc-600/30 hover:scale-110 duration-200"
              />
              <motion.ul className="text-base 2xl:text-xl text-zinc-400 h-96 font-light leading-10 list-disc bg-[#121215] z-[70] py-10 px-20 rounded-xl max-w-5xl flex flex-col justify-center items-start text-justify">
                <motion.li
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  É fundamental ter boas fotos para gerar alcance e interesse no
                  anúncio do seu veículo, e nós vamos te ajudar com isso caso
                  você não tenha tempo para produzir o conteúdo ou não saiba
                  como tirar as fotos e editá-las.
                </motion.li>
                <motion.li
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Selecionamos o local onde iremos produzir um conteúdo que irá
                  destacar o seu veículo dos demais anunciados, logo depois
                  estas imagens irão receber uma edição as tornando ainda mais
                  exclusivas e por fim serão utilizadas para o seu anúncio.
                </motion.li>
                <motion.p
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ delay: 0.3 }}
                  className="w-full text-center mt-4"
                >
                  Entre em contato pelo botão{" "}
                  <strong className="font-bold">abaixo</strong>, para que
                  possamos ajudá-lo.
                </motion.p>
              </motion.ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full">
        <div className="w-full py-40 px-32">
          <h2 className="text-4xl text-[#8e8e8e] font-bold px-3 mb-10">
            Compra
          </h2>
          <ul className="text-lg text-[#8e8e8e] flex gap-y-2 flex-col">
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
            <li className="my-2 px-2 text-xl text-[#8e8e8e] border-b border-[#8e8e8e] w-fit">
              Entre em contato conosco via
              <strong className="font-bold"> whatsapp</strong>, será um prazer
              te ajudar!
            </li>
          </ul>
          <div className=" w-11/12 h-px border-b border-[#8e8e8e50] mt-32 mx-auto" />
        </div>
        <div className="w-full my-16 py-16 px-32">
          <h2 className="text-4xl text-[#8e8e8e] font-bold px-3 mb-10">
            Compra
          </h2>
          <ul className="text-lg text-[#8e8e8e] flex gap-y-2 flex-col">
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
            <li className="my-2 px-2 text-xl text-[#8e8e8e] border-b border-[#8e8e8e] w-fit">
              Entre em contato conosco via
              <strong className="font-bold"> whatsapp</strong>, será um prazer
              te ajudar!
            </li>
          </ul>
          <div className=" w-11/12 h-px border-b border-[#8e8e8e50] mt-32 mx-auto" />
        </div>
        <div className="w-full my-16 py-16 px-32">
          <h2 className="text-4xl text-[#8e8e8e] font-bold px-3 mb-10">
            Compra
          </h2>
          <ul className="text-lg text-[#8e8e8e] flex gap-y-2 flex-col">
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
            <li className="my-2 px-2 text-xl text-[#8e8e8e] border-b border-[#8e8e8e] w-fit">
              Entre em contato conosco via
              <strong className="font-bold"> whatsapp</strong>, será um prazer
              te ajudar!
            </li>
          </ul>
          <div className=" w-11/12 h-px border-b border-[#8e8e8e50] mt-32 mx-auto" />
        </div>
        <div className="w-full my-16 py-16 px-32">
          <h2 className="text-4xl text-[#8e8e8e] font-bold px-3 mb-10">
            Compra
          </h2>
          <ul className="text-lg text-[#8e8e8e] flex gap-y-2 flex-col">
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
            <li className="my-2 px-2 text-xl text-[#8e8e8e] border-b border-[#8e8e8e] w-fit">
              Entre em contato conosco via
              <strong className="font-bold"> whatsapp</strong>, será um prazer
              te ajudar!
            </li>
          </ul>
          <div className=" w-11/12 h-px border-b border-[#8e8e8e50] mt-32 mx-auto" />
        </div>
      </div>
    </>
  );
}
