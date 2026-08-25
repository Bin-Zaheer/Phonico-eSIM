import Image from "next/image";
import benefit from "../../../public/assets/benefitsImg1.png";
import { SlOrganization } from "react-icons/sl";
import { LuNotebookText } from "react-icons/lu";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import Bg from "../../../public/assets/wavyBlobRight.svg";

const Whychoose = ({
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
      <section className="whyChoose w-full ">
        <div className="whyChooseContent relative z-10 flex w-full flex-col items-center justify-center gap-8 px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:flex-row lg:gap-10 lg:px-10 lg:py-14 xl:py-16">
          <div className="w-full lg:w-[50%]">
            <p className="w-full text-3xl font-semibold leading-tight tracking-wide sm:text-4xl md:text-5xl md:leading-[1.2] lg:max-w-[500px]">
              {title}
            </p>

            <p className="mt-3 text-sm leading-6 tracking-wide text-[#474747] min-[350px]:text-base sm:text-lg sm:leading-7">
              {description}
            </p>
          </div>

          <div className="w-full lg:w-[50%] flex justify-center lg:justify-end items-center">
            <Image
              src={bg}
              alt="Benefits"
              width={450}
              height={450}
              className="w-[230px] min-[350px]:w-[270px] sm:w-[320px] md:w-[380px] lg:w-[420px] xl:w-[450px] h-auto"
            />
          </div>
        </div>
      </section>

      <div className="mt-8 w-full rounded-3xl border-2 border-[#77777765] px-3 py-5 min-[350px]:px-4 sm:mt-10 sm:px-6 md:px-8 lg:mt-15 lg:rounded-4xl">
        <div className="mt-5 grid w-full grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center gap-1 min-[350px]:gap-2 sm:mt-7 sm:gap-4">
          <div className="w-full text-center lg:text-start lg:col-span-1 col-span-full mb-3 ">
            <p className="text-xl font-semibold leading-tight min-[350px]:text-2xl sm:text-3xl">
              Uninterrupted Connectivity Across
              the USA
            </p>
          </div>
          <div className="flex  items-center justify-center gap-1 min-[350px]:gap-2 sm:gap-3">
            <SlOrganization className="shrink-0 text-2xl min-[350px]:text-3xl sm:text-4xl" />

            <p className="min-w-0 text-[10px] leading-4 min-[350px]:text-xs min-[350px]:leading-5 sm:text-base lg:text-xl">
              Effortless
              <br />
              Coverage
            </p>
          </div>

          <div className="flex min-w-0 items-center justify-center gap-1 min-[350px]:gap-2 sm:gap-3">
            <LuNotebookText className="shrink-0 text-2xl min-[350px]:text-3xl sm:text-4xl" />

            <p className="min-w-0 text-[10px] leading-4 min-[350px]:text-xs min-[350px]:leading-5 sm:text-base lg:text-xl">
              Custom Plans
              <br />
              To Choose
            </p>
          </div>

          <div className="flex min-w-0 items-center justify-center gap-1 min-[350px]:gap-2 sm:gap-3">
            <TfiHeadphoneAlt className="shrink-0 text-2xl min-[350px]:text-3xl sm:text-4xl" />

            <p className="min-w-0 text-[10px] leading-4 min-[350px]:text-xs min-[350px]:leading-5 sm:text-base lg:text-xl">
              24/7 Support
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whychoose;
