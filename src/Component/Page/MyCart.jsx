import { useLoaderData } from "react-router-dom";
import ShopppingCartCard from "./Cards/ShopppingCartCard";

const MyCart = () => {
  const shoppingCart = useLoaderData();

  return (
    <div className="pt-32 min-h-screen">
      <div className="container px-2 mx-auto mb-10 ">
        <h2 className="uppercase mb-5 text-center border-b-4 border-gray-600 font-bold text-red-500 text-4xl">
          My cart
        </h2>
        {shoppingCart.map((cart) => (
          <ShopppingCartCard key={cart._id} cart={cart}></ShopppingCartCard>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
