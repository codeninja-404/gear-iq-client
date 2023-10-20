import React from "react";

const Loading = () => {
  return (
    <div className="pt-32 min-h-screen ">
      <div className="container px-2 mx-auto mb-20 ">
        <div className="flex h-[50vh]   justify-center">
          <span className=" text-gray-950 loading loading-dots loading-lg"></span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
