import { useLoaderData } from "react-router-dom";
import Banner from "../Header/Banner";
import BrandCard from "./Cards/BrandCard";

const Home = () => {
  const brands = useLoaderData();

  return (
    <div className="min-h-screen">
      <Banner></Banner>
      <div className="container px-2 my-20 mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {brands.map((brand) => (
          <BrandCard key={brand.id} brand={brand}></BrandCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
