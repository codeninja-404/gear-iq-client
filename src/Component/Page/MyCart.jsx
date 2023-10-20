import { useLoaderData } from "react-router-dom";
import ShopppingCartCard from "./Cards/ShopppingCartCard";
import { useState } from "react";

const MyCart = () => {
  const loadedCart = useLoaderData();
  const [shoppingCart, setShoppingCart] = useState(loadedCart);

  return (
    <div className="pt-32 min-h-screen">
      <div className="container px-2 mx-auto mb-10 ">
        <h2 className="uppercase mb-5 text-center border-b-4 border-gray-600 font-bold text-red-500 text-4xl">
          My cart
        </h2>
        {shoppingCart.length > 0 ? (
          <div>
            {" "}
            {shoppingCart.map((cart) => (
              <ShopppingCartCard
                key={cart._id}
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
                cart={cart}
              ></ShopppingCartCard>
            ))}
          </div>
        ) : (
          <div className="text-center space-y-6 my-20">
            <p className="font-bold text-3xl">No product added to the cart..</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCart;
