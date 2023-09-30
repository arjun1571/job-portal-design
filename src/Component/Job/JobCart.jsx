import React from "react";
import prifile from "../../assets/Ellipse 618.png";

const JobCart = () => {
  return (
    <div className="md:flex justify-between border my-3 md:p-10 p-4 bg-[#FFFFFF]">
      <div>
        <div className="flex items-center">
          <img src={prifile} alt="" className="h-20 w-20" />
          <div className="md:mx-4 mx-2">
            <h1 className="text-2xl font-bold text-[#242424]">Headline of the job</h1>
            <div className="flex justify-between my-2">
              <p className="">ABGroup</p>
              <p className="mx-5">ABGroup</p>
              <p className="">ABGroup</p>
            </div>
          </div>
        </div>
        <div>
          <p className="md:mx-5 my-5">
            AB Group Building is a renowned construction company that
            specializes in delivering exceptional building solutions. With a
            strong focus on quality craftsmanship and client... Read More
          </p>
        </div>
      </div>
      <div>
        <p>Posted: 1 Week ago</p>
        <div className="mt-14 flex">
        <button className="border flex-none px-5 py-2">View</button>
        <button className="border  flex-none mx-3 px-5 py-2">Apply job</button>
        </div>
      </div>
    </div>
  );
};

export default JobCart;
