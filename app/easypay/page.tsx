import Image from "next/image";
import bgimg from "../../public/assets/easypay.jpeg";
import Inpbut from "@/components/pages/topupui/Inpbut";

const page = () => {
  return (
    <div className="w-full lg:px-30 px-2 h-[900px] ">
      <div className=" easybg px-5 py-20  ">
        <h1 className="lg:text-4xl text-3xl font-semibold">
          <span className="text-[#ef5b7a]">
            EasyPay
          </span>{" "}
          eSIM Services: Manage Your Line with
          Ease
        </h1>
        <div className="lg:flex justify-between items-center w-full h-130 space-y-4">
          <Inpbut />
          <div className="lg:w-[50%]  flex justify-center items-center">
            <Image
              src={bgimg}
              className="rounded-2xl"
              alt="EasyPayImg"
              width={600}
              height={600}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
