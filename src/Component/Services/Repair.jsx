import repair from "../../assets/repair.jpg";

const Repair = () => {
  return (
    <div className="mt-20">
      <h2 className="uppercase dark:text-white text-center border-b-2 border-gray-500 mb-5 pb-2 text-3xl">
        repair services
      </h2>
      <div>
      <h2 className=" text-center dark:text-white  mb-5 pb-2 ">
      Car repair services are essential for maintaining and fixing vehicles. Skilled mechanics diagnose and repair issues, ensuring the safety and reliability of your vehicle. From routine maintenance like oil changes and brake inspections to complex engine and transmission repairs, these services cover a wide range of problems. They use advanced diagnostics and quality parts to efficiently restore your vehicle to optimal condition. Timely repairs not only enhance your vehicle's performance but also extend its lifespan, saving you money in the long run.
      </h2>
      </div>
      <figure className="">
        <img className=" " src={repair} />
      </figure>
      <div className="text-center">
        <button className="btn btn-sm my-4 btn-warning font-bold">Book an appoinment</button>
      </div>
    </div>
  );
};

export default Repair;
