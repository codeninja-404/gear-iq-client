import { useLoaderData, useParams } from "react-router-dom";
import CarCards from "./Cards/CarCards";

const Products = () => {
  const { brandName } = useParams();
  console.log(brandName.toLowerCase());
  const cars = useLoaderData();

  const singleBrand = cars.filter((car) =>
    car?.brand.toLowerCase().includes(brandName.toLowerCase())
  );

  //   console.log(cars);
  return (
    <div className="pt-12  my-20 min-h-screen">
      <div className="container px-2 mx-auto gap-4 grid md:grid-cols-2">
        {singleBrand.map((car) => (
          <CarCards key={car._id} car={car}></CarCards>
        ))}
      </div>
    </div>
  );
};

export default Products;
