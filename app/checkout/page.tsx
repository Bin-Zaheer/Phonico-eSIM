import Checkout from "@/components/pages/checkoutui/Checkout";
import Faqs from "@/components/pages/home/Faqs";
import { faqs2 } from "@/propsdata";

const page = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <Checkout />
      </div>
    </>
  );
};

export default page;
