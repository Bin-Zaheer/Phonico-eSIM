"use client";
import Image from "next/image";
import rating from "../../../public/assets/stepsBg.svg";
import Ratingline2 from "../Ratingline2";

const Ratingline = () => {
  return (
    <section className="w-full overflow-hidden px-3 min-[350px]:px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="steps-section w-full">
        <div className="hidden lg:block steps-wrapper relative mx-auto w-full min-h-225 sm:min-h-212.5 md:min-h-187.5 lg:min-h-162.5">
          <h2 className="steps-title w-full max-w-175 px- text-start text-3xl font-semibold leading-tight min-[350px]:text-4xl sm:text-5xl md:text-5xl lg:text-5xl lg:leading-[1.2]">
            You can get your <span>Phonico</span>{" "}
            eSIM in 3 easy steps!
          </h2>

          <div className="">
            <div className="absolute left-[-6%] right-[-5%] top-[2%] flex items-center justify-center">
              <Image
                src={rating}
                alt="Rating"
                width={1500}
                height={1500}
              />
            </div>

            <div className="step-content step-1 absolute left-[2%] top-[39%] w-[40%] max-w-75 text-left lg:w-[22%]">
              <h3 className="text-lg font-semibold min-[350px]:text-xl sm:text-2xl">
                Choose Your Plan
              </h3>

              <p className="mt-2 text-sm leading-5 text-[#555] sm:text-base sm:leading-6">
                Select the best eSIM plan that
                meets your needs.
              </p>
            </div>

            <div className="step-content step-2 absolute left-[30%] top-[56%] w-[40%] max-w-75 text-left lg:w-[22%]">
              <h3 className="text-lg font-semibold min-[350px]:text-xl sm:text-2xl">
                Buy Your eSIM Online
              </h3>

              <p className="mt-2 text-sm leading-5 text-[#555] sm:text-base sm:leading-6">
                You can buy your eSIM online, and
                it’s ready to use in minutes.
              </p>
            </div>

            <div className="step-content step-3 absolute right-[2%] top-[74%] w-[42%] max-w-[320px] text-left lg:w-[22%]">
              <h3 className="text-lg font-semibold min-[350px]:text-xl sm:text-2xl">
                Active Instantly
              </h3>

              <p className="mt-2 text-sm leading-5 text-[#555] sm:text-base sm:leading-6">
                There is no wait, and there is no
                paperwork. Just click buy now, and
                you will receive a QR code in your
                e-mail for activation.
              </p>
            </div>
          </div>
        </div>
        <Ratingline2 />
      </div>
    </section>
  );
};

export default Ratingline;
