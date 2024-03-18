"use client";

import React, { useState } from "react";

interface SidebarProps {
  changeHL: () => void;
  changeLH: () => void;
  sort: any;
  setSort: any;
}

export const Sidebar: React.FC<SidebarProps> = ({
  changeHL,
  changeLH,
  sort,
  setSort,
}) => {
  const handleChangeHL = () => {
    setSort(changeHL);
  };

  const handleChangeLH = () => {
    setSort(changeLH);
  };

  return (
    <>
      <div className="sidebar bg-[#090909] w-full lg:w-72 lg:h-screen z-20 lg:fixed overflow-hidden shadow-division pt-28 lg:pt-0">
        <span
          className="w-[300px] h-[300px] xl:w-[700px] xl:h-[700px] rotate-4 absolute shadow-box
         lg:-translate-x-1/2 lg:translate-y-[60%] top- lg:top-auto right-0 lg:right-auto lg:bottom-0 lg:left-0"
        />
        <span className="w-[450px] h-[450px] xl:w-[520px] xl:h-[520px] rotate-45 absolute shadow-box -translate-x-1/2 translate-y-[60%] bottom-0 left-0" />
        <div className="relative w-full h-full grid-rows-5 z-10 mt-6">
          <div className="filter text-center rounded-r-2xl p-2 flex w-full items-center justify-center gap-x-4">
            <p className="text-filter text-xl text-zinc-400 font-semibold tracking-wider">
              Filtros
            </p>
            <svg
              width="60px"
              height="60px"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="rgb(161, 161, 170)"
              className="svg-filter rounded-t-2xl p-2"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.5 2h-1v5h1V2zm6.1 5H6.4L6 6.45v-1L6.4 5h3.2l.4.5v1l-.4.5zm-5 3H1.4L1 9.5v-1l.4-.5h3.2l.4.5v1l-.4.5zm3.9-8h-1v2h1V2zm-1 6h1v6h-1V8zm-4 3h-1v3h1v-3zm7.9 0h3.19l.4-.5v-.95l-.4-.5H11.4l-.4.5v.95l.4.5zm2.1-9h-1v6h1V2zm-1 10h1v2h-1v-2z"
              />
            </svg>
          </div>
          <div className="flex justify-center items-center w-full p-8 gap-x-4">
            <div className="inline-flex items-center border-b border-slate-500/30 px-4 pb-1">
              <label
                className="relative flex items-center p-3 rounded-full cursor-pointer"
                htmlFor="ripple-on"
                data-ripple-dark="true"
              >
                <input
                  id="ripple-on"
                  type="radio"
                  name="filter"
                  onFocus={handleChangeLH}
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-gray-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-zinc-800 checked:bg-zinc-800 checked:before:bg-zinc-800 hover:before:opacity-10"
                />
                <span className="absolute text-zinc-300 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="1"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
              <label
                className="mt-px font-light text-gray-400 cursor-pointer select-none"
                htmlFor="ripple-on"
              >
                Menor preço
              </label>
            </div>
          </div>

          <div className="flex justify-center items-center w-full p-8 pt-0 gap-x-4">
            <div className="inline-flex items-center border-b border-slate-500/30 px-4 pb-1">
              <label
                className="relative flex items-center p-3 rounded-full cursor-pointer"
                htmlFor="ripple-on2"
                data-ripple-dark="true"
              >
                <input
                  id="ripple-on2"
                  type="radio"
                  name="filter"
                  onFocus={handleChangeHL}
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-gray-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-zinc-800 checked:bg-zinc-800 checked:before:bg-zinc-800 hover:before:opacity-10"
                />
                <span className="absolute text-zinc-300 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="1"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
              <label
                className="mt-px font-light text-gray-400 cursor-pointer select-none"
                htmlFor="ripple-on2"
              >
                Maior Preço
              </label>
            </div>
          </div>
            
        </div>
      </div>
    </>
  );
};
