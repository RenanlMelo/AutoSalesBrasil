import Link from "next/link";
import { client } from "@/app/lib/sanity";
import { simplifiedProduct } from "@/app/interface";
import NewestImages from "./NewestImages";

async function getData() {
  const query = `*[_type == "product" && _updatedAt < now()] | order(_publishedAt asc) [0...5] {
    _id,
      modelo,
      preco,
      "slug": slug.current,
      "categoria": categoria->nome,
      "imageUrl": imagens[0].asset->url,
  }
  `;

  const data = await client.fetch(query);

  return data;
}

export default async function Newest() {
  const products: simplifiedProduct[] = await getData();

  return (
    <div className="bg-[#101010] mt-24 shadow-division">
      <div className="mx-auto py-16 px-6 md:px-16 sm:py-24 lg:px-32 shadow-carousel relative overflow-hidden">
        <span className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] rotate-45 absolute shadow-box translate-y-1/2 -translate-x-1/2 bottom-0 left-0" />
        <span className="w-[100px] h-[100px] md:w-[250px] md:h-[250px] rotate-45 absolute shadow-box translate-y-1/2 -translate-x-1/2 bottom-0 left-0" />
        <span className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] rotate-45 absolute shadow-box translate-y-1/2 translate-x-1/2 bottom-0 right-0" />
        <span className="w-[100px] h-[100px] md:w-[250px] md:h-[250px] rotate-45 absolute shadow-box translate-y-1/2 translate-x-1/2 bottom-0 right-0" />
        <div className="block md:flex justify-between items-center relative">
          <h1 className="text-xl lg:text-2xl 2xl:text-4xl text-center w-fit md:text-left border-b-2 px-2 pb-2 mb-6 border-[#1864c7] font-bold tracking-tight text-[#8e8e8e]">
            Recentes
          </h1>
          <Link
            className="text-[#1864c7] text-base lg:text-lg 2xl:text-xl text-right md:static absolute right-0 hover:underline"
            href="/anuncios"
          >
            Veja todos
          </Link>
        </div>

        <div className="p-0 md:py-4">
          <NewestImages products={products} />
        </div>
      </div>
    </div>
  );
}
