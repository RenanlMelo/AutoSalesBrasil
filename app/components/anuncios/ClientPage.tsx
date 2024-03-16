"use client";

import React, { useEffect, useState } from "react";
import { Sidebar } from "./SideBar";
import AnunciosImages from "./AnunciosImages";


interface ClientPageProps {
  products: any;
}

export const ClientPage: React.FC<ClientPageProps> = ({ products }) => {
  const [sort, setSort] = useState("");

  const changeHL = () => {
    setSort("HL")
  };
  
  const changeLH = () => {
    setSort("LH")
  };

  const updateSort = (newSort: string) => {
    setSort(newSort);
  };

  useEffect(() => {
    console.log(sort);
  }, [sort]);
  
  return (
    <>
      <div className="bg-[#101010] mt-32">
        <Sidebar
          changeHL={changeHL}
          changeLH={changeLH}
          sort={sort}
          setSort={setSort}
        />

        <div className="max-w-2xl px-4 py-16 ml-72 sm:px-6 sm:py-24 lg:max-w-full lg:px-24 shadow-carousel flex justify-center flex-col items-center">
          <div className="flex justify-start items-start w-full">
            <h2 className="text-4xl text-center border-b-2 px-2 pb-2 ml-8 mb-6 border-[#1864c7] font-bold tracking-tight text-[#c8c8cc]">
              Carros Disponíveis
            </h2>
          </div>

          <AnunciosImages products={products} sort={sort} updateSort={updateSort} />
        </div>
      </div>
    </>
  );
};
