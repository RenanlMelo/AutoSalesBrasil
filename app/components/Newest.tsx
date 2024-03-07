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
    <div className="bg-[#100C12] mt-32">
      <div className="mx-auto py-16 px-6 md:px-16 sm:py-24 lg:px-24 shadow-carousel">
        <div className="block md:flex justify-between items-center relative">
          <h2 className="text-2xl md:text-4xl text-center md:text-left border-b-2 px-2 pb-2 mb-6 border-[#006039] font-bold tracking-tight text-[#c8c8cc]">
            Destaques
          </h2>
          <Link
            className="text-[#1eab72] text-md md:text-xl text-right md:static absolute right-0 hover:underline"
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
