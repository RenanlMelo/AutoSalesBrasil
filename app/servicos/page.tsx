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
      <div
        className="relative bg-fixed w-full h-[624px] md:h-[500px] lg:h-[1024px] bg-cover bg-center"
        style={{ backgroundImage: `url(${imageProduct.imageUrl.url})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-80" />

        <ServicosText />
      </div>
      <Footer />
    </>
  );
}
