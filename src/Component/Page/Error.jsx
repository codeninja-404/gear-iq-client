import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container dark:bg-black mx-auto px-2">
      <div className="text-center my-32">
        <h2 className="font-bold  text-7xl text-red-500">404</h2>
        <p className="text-2xl md:text-3xl uppercase my-4">page not found!!</p>
        <Link to="/" className="btn mt-6 bg-green-500 text-white font-bold"> go home</Link>
      </div>
    </div>
  );
};

export default Error;
