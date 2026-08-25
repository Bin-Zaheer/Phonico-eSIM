import React from "react";
import Plancards from "./Plancards";
import Coverage from "./Coverage";

const Plans = () => {
  return (
    <>
      <div className="curve w-full mb-10 mt-5">
        <p className="px-3 py-6 text-3xl font-semibold leading-tight text-center text-[#161616] min-[350px]:text-4xl min-[350px]:px-4 sm:px-6 sm:py-8 md:px-8 md:py-10 md:text-4xl lg:px-10 lg:text-5xl lg:leading-[1.3]">
          Buy the Best eSIM Prepaid Plans Meeting
          All Your{" "}
          <span className="text-[#ee5e7f]">
            Expectations!
          </span>
        </p>

        <div className="curve-content w-full px-3 min-[350px]:px-4 sm:px-5 md:px-6 lg:px-8">
          <Plancards />
        </div>
      </div>
    </>
  );
};

export default Plans;
