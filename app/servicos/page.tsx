import { client } from "../lib/sanity";
import { imageProduct } from "../interface";
import Footer from "@/app/components/Footer";
import Navbar from "../components/Navbar";
import ServicosText from "../components/ServicosText";
import Image from "next/image";

async function getData() {
  const query = `*[_type == "servicos"] | order(_createdAt desc) {
    _id,
      'image1': imagem1.asset->url,
      'image2': imagem2.asset->url,
      'image3': imagem3.asset->url,
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function ServicosPage() {
  const data = await getData();

  return (
    <>
      <Navbar isFixed={false} />
      <ServicosText />
      <Footer />
    </>
  );
}
