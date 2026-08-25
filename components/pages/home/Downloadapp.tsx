"use client";
import Image from "next/image";
import play from "../../../public/assets/playLink.svg";
import appstore from "../../../public/assets/appleLink.svg";
import Faqs from "./Faqs";
import { faqs2 } from "@/propsdata";

const Downloadapp = ({
  bg,
  title,
  description,
}: {
  bg: string;
  title: React.ReactNode;
  description: string;
}) => {
  return (
    <>
      <div className="w-full mt-8 sm:mt-10 lg:mt-12 2xl:mt-15 bg-[#f4f4f9] rounded-2xl sm:rounded-[40px] px-10 py-3 overflow-visible">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-10 2xl:gap-0">
          <div className="w-full lg:w-[55%] 2xl:w-[50%]">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide sm:tracking-wider leading-tight sm:leading-[1.2]">
              {title}
            </p>

            <p className="text-base sm:text-lg lg:text-xl tracking-wide sm:tracking-wider leading-6 sm:leading-7 mt-3 sm:mt-4">
              {description}
            </p>

            <div className="mt-5 sm:mt-6">
              <p className="text-lg sm:text-xl font-semibold">
                Download the App now
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-5 items-center mt-2">
                <Image
                  src={appstore}
                  alt="Apple Store"
                  width={170}
                  height={170}
                  className="w-[130px] h-auto sm:w-[150px] lg:w-[170px]"
                />

                <Image
                  src={play}
                  alt="PlayStore"
                  width={170}
                  height={170}
                  className="w-[130px] h-auto sm:w-[150px] lg:w-[170px]"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[45%] 2xl:w-[50%] flex justify-center items-end lg:-mt-10">
            <Image
              src={bg}
              alt="Mobile App"
              width={300}
              height={300}
              className="w-[200px] sm:w-[240px] md:w-[270px] lg:w-[300px] h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Downloadapp;
