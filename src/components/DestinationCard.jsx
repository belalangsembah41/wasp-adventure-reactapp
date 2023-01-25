import React from "react";
import { AiFillStar } from "react-icons/ai";
import { MdPlace } from "react-icons/md";

const DestinationCard = ({ imgBox, title, Location }) => {
  return (
    <>
      <div className="p-5 bg-[#DAE2B6] rounded-lg m-5 max-w-[380px]">
        <div className="w-full max-w-md shadow-lg">
          <img
            src={imgBox}
            className="w-full h-full object-cover overflow-hidden rounded-md"
          />
        </div>
        <div className="flex justify-between items-baseline mt-3">
          <div>
            <h1 className="text-xl font-semibold">{title}</h1>
            <h3 className="flex items-center font-semibold">
              <MdPlace className="mr-2" /> {Location}
            </h3>
          </div>
          <div className="flex">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>
        <p className="mt-3 px-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          voluptatibus natus fugiat explicabo ut incidunt aut dolore rerum
          impedit! Dolores est odit eos. Pariatur suscipit deserunt libero, illo
          facere eum!
        </p>
        <button className="bg-[#47503C] text-white tracking-widest py-1.5 mt-4 rounded-lg text-md block w-full border-none outline-none">
          See More
        </button>
      </div>
    </>
  );
};

export default DestinationCard;
