import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
  const { brandName, imageUrl } = brand;

  return (
    <div>
      <Link to={`/products/${brandName}`}>
        <div className="card  shadow-xl image-full">
          <figure className=" h-[8vh]">
            <img className="w-full" src={imageUrl} alt={brandName} />
          </figure>
          <div className="card-body  flex-col justify-end">
            <div className=" flex justify-center ">
              <h2 className="card-title uppercase text-white  text-4xl">
                {brandName}
              </h2>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BrandCard;
