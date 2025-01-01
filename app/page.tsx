import Categories from "@/components/sections/Categories";
import Clients from "@/components/sections/Clients";
import FeatueredProducts from "@/components/sections/FeatueredProducts";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";

export default function Home() {
  return (
    <div className="max-w-7xl m-auto overflow-hidden">
      <Hero />
      <Clients />
      <FeatueredProducts limit={4} />
      <Categories />
      <Gallery />
      <Products />
    </div>
  );
}
