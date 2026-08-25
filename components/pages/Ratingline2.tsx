import React from "react";

const Ratingline2 = () => {
  return (
    <div className="flex flex-col justify-between items-center gap-8 lg:hidden">
      <h2 className="steps-title w-full max-w-175 px- text-start text-3xl font-semibold leading-tight min-[350px]:text-4xl sm:text-5xl md:text-5xl lg:text-5xl lg:leading-[1.2]">
        You can get your <span>Phonico</span> eSIM
        in 3 easy steps!
      </h2>

      <div className="w-full text-left">
        <h3 className="text-lg font-semibold min-[350px]:text-xl sm:text-2xl">
          Choose Your Plan
        </h3>

        <p className="mt-2 text-sm leading-5 text-[#555] sm:text-base sm:leading-6">
          Select the best eSIM plan that meets
          your needs.
        </p>
      </div>

      <div className="w-full text-left">
        <h3 className="text-lg font-semibold min-[350px]:text-xl sm:text-2xl">
          Buy Your eSIM Online
        </h3>

        <p className="mt-2 text-sm leading-5 text-[#555] sm:text-base sm:leading-6">
          You can buy your eSIM online, and it’s
          ready to use in minutes.
        </p>
      </div>

      <div className="w-full text-left">
        <h3 className="text-lg font-semibold min-[350px]:text-xl sm:text-2xl">
          Active Instantly
        </h3>

        <p className="mt-2 text-sm leading-5 text-[#555] sm:text-base sm:leading-6">
          There is no wait, and there is no
          paperwork. Just click buy now, and you
          will receive a QR code in your e-mail
          for activation.
        </p>
      </div>
    </div>
  );
};

export default Ratingline2;
