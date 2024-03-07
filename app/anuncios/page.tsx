import { client } from "../lib/sanity";
import AnunciosImages from "../components/anuncios/AnunciosImages";
import "../components/components.css";
import { Sidebar } from "../components/anuncios/SideBar";
import Navbar from "../components/Navbar";
import { ClientPage } from "../components/anuncios/ClientPage";

async function getData() {
  let query = `*[_type == "product"] {
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
  const data = await getData();

  return (
    <>
      <Navbar isFixed={true} />
      <ClientPage products={data} />
    </>
  );
}
