import About from "@/app/components/About";
import Newest from "@/app/components/Newest";
import Footer from "@/app/components/Footer";
import Team from "@/app/components/Team";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar isFixed={true} />
      <Newest />
      <About />
      <Team />
      <Footer />
    </>
  );
}
