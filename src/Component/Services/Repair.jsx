import repair from "../../assets/repair.jpg";
import wallet from "../../assets/wallet.png";
import oil from "../../assets/eco-fuel.png";
import quality from "../../assets/quality.png";

const Repair = () => {
  return (
    <div className="mt-20">
      <h2 className="uppercase dark:text-white text-center border-b-2 border-gray-500 mb-5 pb-2 text-3xl">
        repair services
      </h2>
      <div>
        <h2 className=" text-center dark:text-white  mb-5 pb-2 ">
          Car repair services are essential for maintaining and fixing vehicles.
          Skilled mechanics diagnose and repair issues, ensuring the safety and
          reliability of your vehicle. From routine maintenance like oil changes
          and brake inspections to complex engine and transmission repairs,
          these services cover a wide range of problems. They use advanced
          diagnostics and quality parts to efficiently restore your vehicle to
          optimal condition. Timely repairs not only enhance your vehicle's
          performance but also extend its lifespan, saving you money in the long
          run.
        </h2>
      </div>
      <figure className="">
        <img className=" " src={repair} />
      </figure>
      <div>
        <div className="my-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* c1 */}
          <div className="card flex flex-row items-center justify-between ">
            <figure className="border-2 rounded-full shadow-xl p-10 ">
              <img src={wallet} alt="wallet" className="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-red-500 uppercase">affordable</h2>
              <p className="dark:text-white">
                Cost-effective auto repair services for budget-conscious
                customers, offering quality work at reasonable rates, ensuring
                your vehicle's reliability without breaking the bank.
              </p>
            </div>
          </div>
          {/* c2 */}
          <div className="card flex flex-row items-center justify-between ">
            <figure className="border-2 rounded-full shadow-xl p-10 ">
              <img src={oil} alt="oil" className="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-red-500 uppercase">Oil changes</h2>
              <p className="dark:text-white">
                Swift and reliable oil change service, ensuring optimal engine
                performance and longevity. Skilled technicians, top-grade oil,
                and competitive pricing for a hassle-free and essential car
                maintenance task.
              </p>
            </div>
          </div>
          {/* c3 */}
          <div className="card flex flex-row items-center justify-between ">
            <figure className="border-2 rounded-full shadow-xl p-10 ">
              <img src={quality} alt="quality" className="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-red-500 uppercase">
                commitment to quality
              </h2>
              <p className="dark:text-white">
                Dedicated to unwavering quality standards, we prioritize
                excellence in all we do. Our commitment to quality is the
                cornerstone of our success, delivering exceptional products and
                services to our customers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-sm my-4 btn-warning font-bold">
          Book an appoinment
        </button>
      </div>
    </div>
  );
};

export default Repair;
