const ShopppingCartCard = ({ cart }) => {
  const handleRemove = () => {
    fetch(`http://localhost:5000/cart/${cart._id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <div className="card h-[20vh] my-4 bg-base-100 shadow-xl image-full">
        <figure className=" h-[20vh]">
          <img className="w-full" src={cart.image} alt="car" />
        </figure>
        <div className="card-body">
          <div className=" flex justify-between">
            <h2 className="card-title text-4xl uppercase text-gray-200">
              {cart.name}
            </h2>
            <h2 className="card-title uppercase text-yellow-400">
              $ {cart.price}
            </h2>
          </div>

          <div className="card-actions justify-end">
            <button
              onClick={handleRemove}
              className="btn btn-sm btn-outline text-red-400 "
            >
              remove from cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopppingCartCard;
