import React from "react";

const footerText = "sm:w-[90%] w-full flex flex-col justify-between items-center mt-3 text-white";
const rightReserved = "text-white text-center text-xs pb-3"; 

const Footer = () => (
  <div className="flex md:justify-center justify-between items-center pb-4">
    <div className={footerText}>
      <p className={rightReserved}>&copy; All rights reserved</p>
    </div>
  </div>
);

export default Footer;
