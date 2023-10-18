import { useState } from "react";

const AddProducts = () => {
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");
  const [rating, setRating] = useState("");
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.imageUrl.value;
    const name = form.name.value;
    const price = form.price.value;
    const description = form.description.value;
    console.log(image, name, brand, type, rating, price, description);
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
        <h2>Contact Form</h2>
        <form onSubmit={handleAddProduct}>
          <div className="md:flex gap-4">
            <div className="md:w-1/2">
              <label className="label">Image URL</label>
              <input
                type="text"
                name="imageUrl"
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
                placeholder="Car Name"
                className="w-full input input-bordered"
                required
              />
            </div>
          </div>
          <div className="md:flex gap-4">
            <div
              className="md:w-1/4
            "
            >
              <label className="label">Brand Name:</label>
              <select
                className="w-full input input-bordered"
                id="gender"
                onChange={handleBrandChange}
                required
              >
                <option value="">Select a Brand...</option>
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
                id="gender"
                onChange={handleTypeChange}
                required
              >
                <option value="">Select a Type...</option>
                <option value="suv">Suv</option>
                <option value="sports">Sports</option>
                <option value="family">Family</option>
              </select>
            </div>
            <div
              className="md:-1/4
            "
            >
              <label className="label">Price:</label>
              <input
                type="number"
                name="price"
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
                id="gender"
                onChange={handleRatingChange}
                required
              >
                <option value="">Select Rating...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
          <div>
            <div className="">
              <label className="label">Car Description:</label>
              <textarea
                type="text"
                name="description"
                placeholder="Car Description"
                className="w-full h-20 py-2 input input-bordered"
                required
              />
            </div>
          </div>

          <div className="my-4 text-center">
            <input
              className="btn bg-green-400 text-xl font-bold btn-wide "
              type="submit"
              value="Add Product"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
