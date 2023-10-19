import { useLoaderData } from "react-router-dom";

const Details = () => {
  const singleData = useLoaderData();
  console.log(singleData);
  return (
    <div className="pt-32 min-h-screen ">
      <div className="container px-2 mx-auto  "></div>
    </div>
  );
};

export default Details;
