import Link from "next/link";
import Image from "next/image";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import Footer from "@/app/components/Footer";
import AnunciosImages from "../components/AnunciosImages";
import "../components/components.css";

async function getData() {
  const query = `*[_type == "product"] {
    _id,
    modelo,
    preco,
    "slug": slug.current,
    "categoria": categoria->nome,
    "imageUrl": imagens[0].asset->url,
}`;

  const data = await client.fetch(query);

  return data;
}

export default async function anunciosPage() {
  const data: simplifiedProduct[] = await getData();

  return (
    <>
      <div className="bg-[#f8f8ff]">
        <div className="filter left-0 top-40 text-center fixed bg-[#0B0227] rounded-r-2xl p-2 z-[90]">
          <p className="text-filter text-lg text-zinc-200 font-semibold tracking-wider">Filtros</p>
          <svg
            width="70px"
            height="70px"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ddd"
            className="svg-filter rounded-t-2xl p-2"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.5 2h-1v5h1V2zm6.1 5H6.4L6 6.45v-1L6.4 5h3.2l.4.5v1l-.4.5zm-5 3H1.4L1 9.5v-1l.4-.5h3.2l.4.5v1l-.4.5zm3.9-8h-1v2h1V2zm-1 6h1v6h-1V8zm-4 3h-1v3h1v-3zm7.9 0h3.19l.4-.5v-.95l-.4-.5H11.4l-.4.5v.95l.4.5zm2.1-9h-1v6h1V2zm-1 10h1v2h-1v-2z"
            />
          </svg>
        </div>

        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-full lg:px-24 shadow-carousel">
          <div className="flex justify-between items-center">
            <h2 className="text-4xl border-b-2 px-2 pb-2 ml-8 mb-6 border-red-700 font-bold tracking-tight text-[#505050]">
              Carros Disponíveis
            </h2>
          </div>

          <AnunciosImages products={data} />
        </div>
      </div>
      <Footer />
    </>
  );
}
