import { useLoaderData } from "react-router-dom";
import Banner from "../Header/Banner";
import BrandCard from "./Cards/BrandCard";
import Services from "../Services/Services";
import Repair from "../Services/Repair";

const Home = () => {
  const brands = useLoaderData();

  return (
    <div className="min-h-screen">
      <Banner></Banner>
      <div className="container px-2 my-20 mx-auto">
        <h2 className="uppercase text-center border-b-2 border-gray-500 mb-5 pb-2 text-3xl">
          Brands Available
        </h2>
        <div className=" grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {
          brands?.map((brand) => (
            <BrandCard key={brand.id} brand={brand}></BrandCard>
          ))
          }
        </div>
        <div>
         <Services></Services>
         <Repair></Repair>
        </div>
      </div>
    </div>
  );
};

export default Home;
