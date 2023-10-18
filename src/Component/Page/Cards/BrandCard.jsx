

const BrandCard = ({ brand }) => {
  const { brandName, imageUrl } = brand;

  return (
    <div>
      <div className="card  bg-base-100 shadow-xl image-full">
        <figure>
          <img src={imageUrl} alt={brandName} />
        </figure>
        <div className="card-body  flex-col justify-end">
          <div className=" flex justify-center ">
            <h2 className="card-title uppercase text-white  text-4xl">
              {brandName}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
