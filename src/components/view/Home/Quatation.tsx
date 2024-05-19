import React from "react";
import { BsFillChatQuoteFill } from "react-icons/bs";

const Quatation = () => {
  return (
    <div className="bg-[#E7F6FE]">
      <div className="mx-auto  max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="flex gap-2 justify-center text-center items-center flex-col">
          <BsFillChatQuoteFill size={60} />
          <h1 className="text-2xl font-semibold sm:text-4xl sm:font-bold font-poppins text-secondary">
            I have one role, and the less i know the better it is for me
          </h1>
          <p className="text-softBlack text-sm sm:text-base ">
            “Education is our passport to the future, for tomorrow belongs only
            to the people who prepare for it today.” —Malcolm X
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quatation;
