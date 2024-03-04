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
      <div className=" md:relative">
        <Image
          src={imageProduct.imageUrl.url}
          alt="Product image"
          className="object-cover h-full w-full z-0"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-black bg-opacity-80" />
        
        <ServicosText />
      </div>
      <Footer />
    </>
  );
}
