import { useLoaderData, useParams } from "react-router-dom";
import CarCards from "./Cards/CarCards";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Products = () => {
  const [adds, setAdds] = useState([]);
  const { brandName } = useParams();

  const cars = useLoaderData();

  const singleBrand = cars.filter((car) =>
    car?.brand.toLowerCase().includes(brandName.toLowerCase())
  );
  useEffect(() => {
    fetch(
      "https://gear-iq-server-eyyubjt7l-saidul-arefins-projects.vercel.app/adds"
    )
      .then((res) => res.json())
      .then((data) => setAdds(data));
  }, []);

  const singleBrandAdd = adds.filter((add) =>
    add?.name.toLowerCase().includes(brandName.toLowerCase())
  );

  const addImgs = singleBrandAdd[0]?.imageUrls;

  return (
    <div className="pt-12  my-20 min-h-screen">
      <div className="container px-2 mx-auto ">
        <div className="mb-20">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {addImgs?.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  className="h-full mx-auto rounded-3xl w-4/5 lg:w-1/2 "
                  src={img}
                  alt="Album"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <h2 className="uppercase border-gray-500 text-center border-b-2 mb-5 pb-2 text-3xl">
          Cars Available based on {brandName} brand
        </h2>
        <div>
          {singleBrand.length > 0 ? (
            <div className="gap-4 grid md:grid-cols-2">
              {singleBrand?.map((car) => (
                <CarCards key={car._id} car={car}></CarCards>
              ))}
            </div>
          ) : (
            <div className="text-center space-y-6 my-20">
              <h2 className="font-bold uppercase text-4xl text-red-500">
                Sorry ....
              </h2>
              <p className="font-bold text-3xl">
                NO Cars Available For now!!!!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
