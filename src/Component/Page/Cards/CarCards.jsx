
import Star from "../../Star/Star";

const CarCards = ({ car }) => {
  const { brand, image, name, type, price, rating } = car;
  console.log(car);
  return (
    <div>
      <div className="card lg:card-side border border-gray-500 shadow-xl">
        <figure className="lg:w-1/2 ">
          <img className="h-full" src={image} alt="Album" />
        </figure>
        <div className="card-body  lg:w-1/2">
          <h2 className="card-title uppercase font-extrabold border-b-2 border-gray-500">
            {brand}
          </h2>
          <div className="flex justify-between">
            <p className="uppercase text-blue-700 font-bold">{name}</p>
            <p className="uppercase text-red-500 border-l-2 pl-2 border-gray-500 font-bold">
              {type}
            </p>
          </div>
          <div className="flex">
            <p className="font-bold">$ {price}</p>
            <Star rating={rating}></Star>
          </div>
          <div className=" flex gap-2 ">
            <button className="btn btn-success btn-sm text-xs w-1/2">
              Details
            </button>
            <button className="btn btn-warning text-xs btn-sm w-1/2">
              Update Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCards;
