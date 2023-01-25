import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-[#DAE2B6] container w-full max-w-screen-2xl mx-auto p-8 md:px-28 flex flex-col items-center md:items-start md:flex-row md:justify-between">
      <div className="flex flex-col items-center md:items-start mr-3">
        <h2 className="text-2xl font-semibold">Join our newsletter</h2>
        <p className="text-center md:text-left">
          We’ll send you a nice letter once per week. No Spam
        </p>
      </div>
      <div className="mt-4 w-[400px] md:mt-0">
        <input
          type="text"
          className="w-full outline-none p-1.5 px-3 text-base rounded-lg"
          placeholder="Email..."
        />
      </div>
    </div>
  );
};

export default Newsletter;
