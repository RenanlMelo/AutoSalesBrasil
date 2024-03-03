import Link from "next/link";
import Image from "next/image";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import Footer from "@/app/components/Footer";

async function getData() {
  const query = `*[_type == "product"] {
    _id,
    modelo,
    preco,
    "slug": slug.current,
    "categoria": categoria->nome,
    "imageUrl": imagens[0].asset->url,
}`;

  const data = await client .fetch(query);

  return data;
}

export default async function anunciosPage() {
  const data: simplifiedProduct[] = await getData();

  const formatPrice = (price: number) => {
    return price.toLocaleString("pr-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  return (
    <>
      <div className="bg-[#f8f8ff]">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-full lg:px-24 shadow-carousel">
          <div className="flex justify-between items-center">
            <h2 className="text-4xl border-b-2 px-2 pb-2 mb-6 border-red-700 font-bold tracking-tight text-[#505050]">
              Carros Disponíveis
            </h2>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-3 xl:gap-x-8">
            {data.map((product) => (
              <div key={product._id} className="group-relative overflow-hidden shadow-anuncios rounded-lg">
                <div className="aspect-[1.7/1] w-full overflow-hidden bg-gray-200 group-hover:opacity-75 lg:h-80">
                  <Link href={`/product/${product.slug}`}>
                    <Image
                      src={product.imageUrl}
                      alt="Product image"
                      className="w-full h-full object-cover lg:h-full lg:w-full scale-100 hover:scale-110 duration-500 ease-in-out"
                      width={400}
                      height={350}
                    />
                  </Link>
                </div>

                <div className="mt-4 pb-2 flex justify-between">
                  <div className="px-8 pt-4 pb-6">
                    <h3 className="text-lg text-gray-700">
                      <Link href={`/product/${product.slug}`}>
                        {product.modelo}
                      </Link>
                    </h3>
                    <p className="mt-1 text-md text-gray-500">
                      {product.categoria}
                    </p>
                  </div>
                  <p className="text-lg font-medium pr-8 pt-4 text-gray-900">
                    {formatPrice(product.preco)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
