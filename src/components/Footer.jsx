import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#DAE2B6] container w-full max-w-screen-2xl mx-auto py-5 px-14 md:px-28 flex flex-wrap gap-5 lg:gap-10">
        <div className="w-3/5">
          <h1 className="text-3xl font-bold">Wasp.</h1>
          <p className="mt-2 w-full">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            officiis in? Vitae, eaque rerum quos dolorum officia saepe ipsam
            maiores adipisci possimus obcaecati cupiditate explicabo.
          </p>
        </div>
        <ul>
          <li className="text-lg font-semibold">Products</li>
          <li>Hotel</li>
          <li>Destination</li>
          <li>Attraction</li>
          <li>Restaurant</li>
        </ul>
        <ul>
          <li className="text-lg font-semibold">Company</li>
          <li>About</li>
          <li>Reservation</li>
          <li>Contact</li>
          <li>Sales</li>
        </ul>
        <ul>
          <li className="text-lg font-semibold">Legal</li>
          <li>Terms</li>
          <li>Privacy</li>
        </ul>
      </div>
      <div className="p-2 bg-[#A6BB8D] flex items-center justify-center">
        <p>&copy; Wasp. 2023 All rights reserved</p>
      </div>
    </>
  );
};

export default Footer;
