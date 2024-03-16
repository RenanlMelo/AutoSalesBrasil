import About from "@/app/components/About";
import Newest from "@/app/components/Newest";
import Footer from "@/app/components/Footer";
import Team from "@/app/components/Team";
import Navbar from "./components/Navbar";
import { Email } from "./components/Email";
import ServicosResume from "./components/ServicosResume";

export default function Home() {
  return (
    <>
      <Navbar isFixed={true} />
      <Newest />
      <ServicosResume />
      <Email />
      <Footer />
    </>
  );
}
