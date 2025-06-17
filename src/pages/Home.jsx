import Banner from "../components/sections/Banner";
import Stats from "../components/sections/Stats";
import Menu from "../components/sections/Menu";
import Gallery from "../components/sections/Gallery";
import Reviews from "../components/sections/Reviews";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <div className="py-10">
      <Banner />
      <Stats />
      <Menu />
      <Gallery />
      <Reviews />
      <About />
      <Contact />
    </div>
  );
}
