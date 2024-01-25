import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-center bg-black bg-opacity-75 md:h-[45vh] w-full text-[#737373] absolute mt-[110vh] md:mt-[120vh]">
        <div className="w-[90%] md:w-[70%] h-full">
          <h1 className="my-5 mb-8 md:my-8">Questions? Call 7972908413</h1>
          <ul className="text-xs grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-14">
            <li>FAQ</li>
            <li>Help Centre</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
          </ul>
          <p className="text-sm text-center mt-16 mb-10 md:my-24">
            &copy; Copyright 2024 Paresh Chawla
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
