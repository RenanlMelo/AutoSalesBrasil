import Image from "next/image";
import { client } from "../lib/sanity";
import { imageProduct } from "../interface";
import Footer from "@/app/components/Footer";
import ServicosText from "@/app/components/ServicosText";

async function getData(): Promise<imageProduct> {
  const query = `*[_type == "product"][0] {
      _id,
      "imageUrl": imagens[0].asset->url,
  }`;

  const data = await client.fetch(query);

  // Return a Promise that resolves to the data
  return new Promise((resolve) => {
    resolve({
      ...data,
      imageUrl: {
        url: data.imageUrl,
      },
    });
  });
}

export default async function ServicosPage() {
  const imageProduct = await getData();

  return (
    <>
      <div className="relative">
        <Image
          src={imageProduct.imageUrl.url}
          alt="Product image"
          className="w-screen h-screen object-cover lg:h-full lg:w-full z-0"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-black bg-opacity-80" />
        <div className="flex flex-col items-center justify-center absolute top-24 left-24">
          <p className="text-slate-300 text-4xl border-b-2 px-2 pb-2 border-red-700 font-bold tracking-tight">
            Nossos Serviços
          </p>
          <p className="text-slate-300 font-extralight text-lg">
            Clique abaixo para mais informações
          </p>
        </div>
        <ServicosText />
      </div>
      <Footer />
    </>
  );
}
