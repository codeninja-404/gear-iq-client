
import travel from "../../assets/travel.jpg";
import luxury from "../../assets/luxury.jpg";
import business from "../../assets/business.jpg";

const Services = () => {
  return (
    <div className="mt-20">
      <h2 className="uppercase text-center border-b-2 border-gray-500 mb-5 pb-2 text-3xl">
        Rental services
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"> 
        {/* card 1 */}
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
            <img src={travel} />
          </figure>

          <div className="card-body ">
            <h2 className=" text-center text-3xl py-2 rounded-full border-green-500 border-2">TRAVEL RENTAL</h2>
            <p>Travel rental car services are tailored for individuals exploring new destinations. Travelers can choose from a variety of vehicles, such as compact cars or SUVs, to suit their journeys. These services provide convenience, enabling tourists to navigate unfamiliar areas comfortably while often offering options like GPS, insurance, and roadside assistance.</p>

            <button className="btn bg-green-500 text-white hover:text-black btn-sm ">
              Book now !
            </button>
          </div>
        </div>
        {/* card 2 */}
        <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
            <img src={business} />
          </figure>

          <div className="card-body ">
            <h2 className=" text-center text-3xl py-2 rounded-full border-red-500 border-2">BUSINESS RENTAL</h2>
            <p>Business rental car services offer companies a fleet of vehicles to meet their corporate transportation needs. These services provide a range of vehicles, including sedans, vans, and luxury cars, with customizable rental plans. Ideal for meetings, events, or employee travel, business car rentals ensure reliability and flexibility for corporate clients.</p>

            <button className="btn bg-blue-500 text-white hover:text-black btn-sm ">
              Book now !
            </button>
          </div>
        </div>
        {/* card 3 */}
        <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
            <img src={luxury} />
          </figure>

          <div className="card-body ">
            <h2 className=" text-center text-3xl py-2 rounded-full border-green-500 border-2">LUXURY RENTAL</h2>
            <p>Luxury rental car services offer the ultimate in elegance and performance. They provide a fleet of high-end vehicles, from luxurious sedans to exotic sports cars, for discerning clients. With top-notch features and impeccable service, customers enjoy a taste of opulence while traveling for special occasions, business trips, or leisure.</p>

            <button className="btn bg-black text-white hover:text-black btn-sm ">
              Book now !
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
