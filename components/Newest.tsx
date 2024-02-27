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
    <div className="bg-[#f8f8ff]">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-full lg:px-24 shadow-carousel">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl border-b-2 px-2 pb-2 mb-6 border-red-700 font-bold tracking-tight text-[#505050]">
            Destaques
          </h2>
          <Link
            className="text-red-700 text-xl flex items-center gap-x-1 hover:underline"
            href="/anuncios"
          >
            Veja todos
          </Link>
        </div>

        <div className="h-full py-4">
          <NewestImages products={products} />
        </div>
      </div>
    </div>
  );
}
