import bg from "../../assets/banner-bg.jpg";

const Banner = () => {
  return (
    <div className=" ">
      <div
        className="hero "
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className=" text-gray-300 mt-20 py-5 lg:mt-28 text-5xl font-bold">
              Welcome to <span className="text-yellow-400">Gear</span><span className="text-red-500">IQ</span>
            </h1>
            <p className=" mb-14 text-gray-300 lg:mb-24">
            GearIQ, your premier car dealership, stands out for its dedication to providing top-notch automotive solutions. With a diverse range of quality vehicles and a customer-centric approach, we ensure a seamless buying experience. Our knowledgeable team and transparent pricing make GearIQ the go-to destination for those seeking a trusted automotive partner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
