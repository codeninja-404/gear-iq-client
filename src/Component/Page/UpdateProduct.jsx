import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const singleData = useLoaderData();

  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");
  const [rating, setRating] = useState("");
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.imageUrl.value;
    const name = form.name.value;
    const price = form.price.value;

    const update = { image, name, price, brand, type, rating };

    fetch(`https://gear-iq-server-q3uokvjfu-saidul-arefins-projects.vercel.app/cars/${singleData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Updated item successfully!");
      });
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  };
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };
  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };
  return (
    <div className="pt-32 min-h-screen ">
      <div className="container px-2 mx-auto  ">
        <h2 className="uppercase mb-5 text-center border-b-4 border-gray-600 font-bold text-red-500 text-4xl">
          Update Information for : {singleData.name}
        </h2>
        <form onSubmit={handleUpdate}>
          <div className="md:flex gap-4">
            <div className="md:w-1/2">
              <label className="label">Image URL</label>
              <input
                type="text"
                name="imageUrl"
                defaultValue={singleData.image}
                placeholder="Image URL"
                className="w-full input input-bordered"
                required
              />
            </div>
            <div className="md:w-1/2">
              <label className="label">Car Name</label>
              <input
                type="text"
                name="name"
                defaultValue={singleData.name}
                placeholder="Car Name"
                className="w-full input input-bordered"
                required
              />
            </div>
          </div>
          <div className="md:flex  gap-4">
            <div
              className="md:w-1/4
            "
            >
              <label className="label">Brand Name:</label>
              <select
                className="w-full input input-bordered"
                onChange={handleBrandChange}
                required
              >
                <option value="">{singleData.brand}....</option>
                <option value="toyota">Toyota</option>
                <option value="ford">Ford</option>
                <option value="honda">Honda</option>
                <option value="bmw">BMW</option>
                <option value="audi">Audi</option>
                <option value="tesla">Tesla</option>
              </select>
            </div>
            <div
              className="md:w-1/4
            "
            >
              <label className="label">Car Type:</label>
              <select
                className="w-full input input-bordered"
                onChange={handleTypeChange}
                required
              >
                <option value="">{singleData.type}...</option>
                <option value="suv">Suv</option>
                <option value="sports">Sports</option>
                <option value="family">Family</option>
              </select>
            </div>
            <div
              className="md:w-1/4
            "
            >
              <label className="label">Price:</label>
              <input
                type="number"
                name="price"
                defaultValue={singleData.price}
                placeholder="Car Price"
                className="w-full input input-bordered"
                required
              />
            </div>
            <div
              className="md:w-1/4
            "
            >
              <label className="label">Rating:</label>
              <select
                className="w-full input input-bordered"
                onChange={handleRatingChange}
                required
              >
                <option value="">{singleData.rating}...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
          <div></div>

          <div className="my-4 text-center">
            <input
              className="btn bg-green-400 text-xl font-bold btn-wide "
              type="submit"
              value="Update Product"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
