import React from "react";

const footerText = "sm:w-[90%] w-full flex flex-col justify-between items-center mt-3";
const rightReserved = "text-black text-center text-xs pb-3"; 

const Footer = () => (
  <div className="bg-hash flex md:justify-center justify-between items-center pb-4">
    <div className={footerText}>
      <p className={rightReserved}>Join NaijaPrices now and experience a new level of convenience and savings!</p>
      <p className={rightReserved}>All rights reserved</p>
    </div>
  </div>
);

export default Footer;
