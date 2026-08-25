import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroimg from "../../../public/assets/femaleHero2.png";
import Link from "next/link";

const hero = () => {
  return (
    <div className="w-full mt-5 ">
      <div className="flex flex-col xl:flex-row items-center justify-between gap-8  2xl:gap-0">
        <div className="w-full xl:w-[52%] space-y-4 sm:space-y-5 md:space-y-6 ">
          <div>
            <p className="text-sm min-[350px]:text-base sm:text-lg font-light text-[#353535] leading-6">
              Phonico - Your Gateway to USA
              Connectivity
            </p>

            <hr className="mt-2 border-t-4 sm:border-t-5 border-[#0794bbb5] w-32 sm:w-40 rounded-2xl" />
          </div>

          <p className="text-3xl min-[350px]:text-4xl sm:text-4xl lg:text-5xl font-semibold text-[#161616] leading-[1.25]">
            Stay Connected With{" "}
            <span className="text-[#ee5e7f]">
              Phonico
            </span>{" "}
            eSIM Across The USA, Instantly!
          </p>

          <p className="text-base min-[350px]:text-lg sm:text-lg lg:text-xl font-light text-[#353535] leading-7 sm:leading-8">
            With Phonico eSIM, getting online in
            the U.S. is fast, easy, and completely
            digital. No KYC and no restrictions on
            Hotspot Sharing or Tethering. Select
            your Plan, Scan the QR, Activate, and
            Explore with uninterrupted coverage in
            all 50 states of the USA. Starting
            from $15/Month!
          </p>
          <Link href={"/plans"}>
            <Button className="h-auto min-h-10 px-4 py-3 text-sm min-[350px]:text-base sm:text-md sm:px-6">
              Get Your USA eSIM Now
            </Button>
          </Link>
        </div>

        <div className="w-full xl:w-[48%] flex justify-center lg:h-137.5 xl:items-end">
          <Image
            src={heroimg}
            alt="Hero Image"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default hero;
