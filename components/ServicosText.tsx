"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function servicosText() {
  const [showText, setShowText] = useState(false);

  const openInfo = () => {
    setShowText(true);
    document.body.style.overflow = "hidden";
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
    document.body.style.overflow = "hidden";
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
    document.body.style.overflow = "hidden";
  };

  const closeInfo3 = () => {
    setTimeout(() => {
      setShowText3(false);
      document.body.style.overflow = "visible";
    }, 300);
  };

  return (
    <>
      <div className="absolute top-0 h-screen w-full">
        {(showText || showText2 || showText3) && (
            <div className="fixed bg-black opacity-50 inset-0 z-[60]" />
          )}

        <div className="flex flex-col items-center justify-center z-50 absolute w-full h-screen top-0">
          <div className="flex justify-evenly w-full">
            <div //1
              className="cursor-pointer text-slate-300 z-10 w-1/4 text-3xl font-bold text-center p-7 rounded-3xl backdrop-blur-md shadow-servicos bg-white/10 flex items-center justify-center gap-10 hover:shadow-servicosHover duration-200"
              onClick={openInfo}
            >
              <h1>Compra</h1>
              <Image className="w-16" alt="Compra" src="./car4.png" />
            </div>

            <div //2
              className="cursor-pointer text-slate-300 z-10 w-1/4 text-3xl font-bold text-center p-7 rounded-3xl backdrop-blur-md shadow-servicos bg-white/10 flex items-center justify-center gap-10 hover:shadow-servicosHover duration-200"
              onClick={openInfo2}
            >
              <h1>Venda</h1>
              <Image className="w-20" alt="Venda" src="./sell.png" />
            </div>

            <div
              className="cursor-pointer text-slate-300 z-10 w-1/4 text-3xl font-bold text-center p-7 rounded-3xl backdrop-blur-md shadow-servicos bg-white/10 flex items-center justify-center gap-10 hover:shadow-servicosHover duration-200"
              onClick={openInfo3}
            >
              <h1>Plano Content</h1>
              <Image className="w-16" alt="Plano Content" src="./plan2.png" />
            </div>
          </div>

          <a
            href="https://wa.me/5515992485445"
            className="w-1/3 absolute bottom-24 text-xl bg-white/10 text-slate-300 text-center px-8 py-6 rounded-2xl backdrop-blur-md shadow-servicos hover:shadow-whatsappHover hover:text-green-500 hover:scale-105 duration-200 ease-in-out"
          >
            Entre em contato conosco via whatsapp!
          </a>
        </div>
      </div>

      <AnimatePresence>
        {showText && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeInfo}
            className="w-full h-full flex justify-center items-center fixed inset-0 z-[70] top-0 backdrop-blur-sm"
          >
            <motion.div className="relative z-[70]">
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={closeInfo}
                src="./close.svg"
                alt="Fechar"
                className="absolute top-4 right-4 bg-slate-700/70 p-2 rounded-full hover:bg-slate-600/30 hover:scale-110 duration-200"
              />
              <motion.ul className="text-xl text-slate-300 h-96 font-light leading-10 list-disc bg-[#121215] z-[70] p-20 rounded-xl  max-w-5xl flex flex-col justify-center items-start text-justify">
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
                  Será que o carro está em boas condições?
                </motion.li>
                <motion.li
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Será que é golpe?
                </motion.li>
                <motion.li
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Não sei de mecânica, posso estar entrando em uma furada?
                </motion.li>
                <motion.li
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Não tenho tempo para visitar e nem negociar, e agora?
                </motion.li>
                <motion.li
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Se você se identificou com qualquer uma dessas perguntas, este
                  serviço é para você.
                </motion.li>
                <motion.p
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ delay: 0.3 }}
                  className="w-full text-center mt-4"
                >
                  Entre em contato no botão{" "}
                  <strong className="font-bold">abaixo</strong>, será um prazer
                  te ajudar!
                </motion.p>
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
                className="absolute top-4 right-4 bg-slate-700/70 p-2 rounded-full hover:bg-slate-600/30 hover:scale-110 duration-200"
              />
              <motion.ul className="text-xl text-slate-300 h-96 font-light leading-10 list-disc bg-[#121215] z-[70] p-20 rounded-xl  max-w-5xl flex flex-col justify-center items-start text-justify">
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
                  Entre em contato pelo botão <strong className="font-bold">abaixo</strong> para podermos lhe ajudar.
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
                className="absolute top-4 right-4 bg-slate-700/70 p-2 rounded-full hover:bg-slate-600/30 hover:scale-110 duration-200"
              />
              <motion.ul className="text-xl text-slate-300 h-96 font-light leading-10 list-disc bg-[#121215] z-[70] py-10 px-20 rounded-xl max-w-5xl flex flex-col justify-center items-start text-justify">
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
              </motion.ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
