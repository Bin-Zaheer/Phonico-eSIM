import Image from "next/image";
import bg from "../../../public/assets/reviewBg.svg";
import Testimonials from "@/components/ui/Testimonials";
import Question from "./Question";

const Sliderreview = () => {
  return (
    <section className="mt-6 w-full overflow-hidden px-3 min-[350px]:px-4 sm:mt-8 sm:px-6 md:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-5xl text-center">
        <p className="text-xs min-[350px]:text-sm sm:text-base">
          2,157 people have said how good Phonico
        </p>

        <p className="mt-2 text-2xl font-semibold leading-tight tracking-wide min-[350px]:text-3xl sm:text-3xl md:text-4xl lg:text-[40px]">
          The Love We’ve Earned From Our{" "}
          <span className="text-[#ef5b7a]">
            Users
          </span>
        </p>
      </div>

      <div className="relative mx-auto mt-6 w-full max-w-7xl overflow-hidden min-[350px]:mt-8 bg-[linear-gradient(180deg,rgba(255,255,255,1)_55%,rgba(224,220,220,1)_100%)]">
        <div className="flex w-full justify-center">
          <Image
            src={bg}
            alt="Review Background"
            width={700}
            height={700}
            className="h-auto w-[130%] max-w-175 object-contain min-[350px]:w-full sm:w-full"
          />
        </div>

        <div className="absolute inset-x-0 top-[12%] w-full px-1 min-[100px]:top-[15%] sm:top-[18%]">
          <Testimonials />
        </div>
      </div>
    </section>
  );
};

export default Sliderreview;
