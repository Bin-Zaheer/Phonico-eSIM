import Image from "next/image";
import authimg from "../../public/assets/authImg.png";
import Authbutton from "@/components/pages/authui/Authbutton";
import Login from "@/components/pages/loginui/Login";

const page = () => {
  return (
    <div className="mt-10 lg:flex justify-items-center justify-between items-start lg:px-30 px-2  h-full">
      <div className={`lg:w-[50%] relative`}>
        <Image
          src={authimg}
          alt="AuthImg"
          width={550}
          height={400}
          className=""
        ></Image>
        <div className="absolute h-full  top-0 text-center py-20 flex-col justify-between flex text-white">
          <div className="">
            <p className="text-4xl font-extrabold">
              Welcome to Phonico
            </p>
            <p className="text-lg ml-7 font-extrabold">
              Your Gateway to USA Connectivity!
            </p>
          </div>
          <div className="">
            <p className="text-4xl font-extrabold">
              Seamless Connectivity
            </p>
            <p className="text-lg ml-7 font-extrabold">
              Enjoy the best coverage in the USA,
              Mexico, and Canada!
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-[50%] mt-15">
        <div className="space-y-6">
          <p className="text-4xl font-bold w-[90%]">
            Welcome to the USA’s Fastest-Growing
            eSIM Network!
          </p>
          <p className="text-lg font-medium text-[#909090]">
            Already a Phonico eSIM profile holder?
            Log in to your account to check
            details or upgrade your Plan.
          </p>
          <Authbutton />
          <Login />
        </div>
      </div>
    </div>
  );
};

export default page;
