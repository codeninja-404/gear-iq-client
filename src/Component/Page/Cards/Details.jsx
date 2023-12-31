import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Details = () => {
  const singleCar = useLoaderData();
  const [added, setAdded] = useState(false);
  const handleAddToCart = () => {
    if (!added) {
      fetch("https://gear-iq-server-93e3a7go2-saidul-arefins-projects.vercel.app/cart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(singleCar),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success("Added to cart successfully!");
            setAdded(true);
          }
        });
    }
  };

  return (
    <div className="pt-32 min-h-screen">
      <div className="container px-2 mx-auto mb-20 ">
        <div className="card border-2  shadow-xl">
          <div className="card-body">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="card-title uppercase text-red-500 font-bold">
                  {singleCar.name}{" "}
                </h2>
                <button
                  onClick={handleAddToCart}
                  className="btn btn-sm btn-success  text-white font-bold"
                >
                  Add To Cart
                </button>
              </div>
              <p className=" font-bold mb-3 text-green-500">
                $ {singleCar.price}{" "}
              </p>
              <p className="break-words dark:text-white ">{singleCar.description}</p>
            </div>
          </div>
          <figure className="h-[20vh] md:h-[40vh] ">
            <img className="w-full " src={singleCar.image} alt="car" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Details;
