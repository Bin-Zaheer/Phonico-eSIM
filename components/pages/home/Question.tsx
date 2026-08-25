"use client";
import { faqs } from "@/propsdata";
import Faqs from "./Faqs";

const Question = () => {
  return (
    <div className="mt-8 sm:mt-10 w-full bg-[#ede0d55c] py-8 min-[350px]:py-10 sm:py-12 md:py-14 lg:py-13 px-3 min-[350px]:px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden">
      <div className="w-full flex flex-col items-center text-center">
        <p className="text-2xl min-[350px]:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Frequently Asked{" "}
          <span className="text-[#ef5b7a]">
            Questions
          </span>
        </p>

        <p className="text-[#8f8f8f] text-base min-[350px]:text-lg sm:text-xl mt-2 sm:mt-3">
          Curious About Our Services?
        </p>
      </div>

      <div className="w-full mt-1 ">
        <Faqs data={faqs} />
      </div>
    </div>
  );
};

export default Question;
