import React from "react";

const TestimonialCard = () => {
  return (
    <div className="bg-[#DAE2B6] p-5 pt-16 m-4 flex flex-col items-center justify-center rounded-md relative">
      <div className="absolute top-0 right-0 left-0 w-full h-28 bg-[#A6BB8D] -z-[-1] rounded-t-md"></div>
      <div className="w-20 h-20 rounded-full bg-red-300 z-10">
        <img src="" />
      </div>
      <div className="flex flex-col items-center mt-4">
        <h3 className="text-xl font-semibold">James</h3>
        <p className="text-center mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat odio
          vero blanditiis incidunt repellat obcaecati?
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
