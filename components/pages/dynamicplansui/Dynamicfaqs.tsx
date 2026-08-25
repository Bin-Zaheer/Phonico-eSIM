"use client";
import Faqs from "../home/Faqs";
import { faqs2 } from "@/propsdata";

const Dynamicfaqs = () => {
  return (
    <div className="bg-[#f9f6f4] w-full mt-10">
      <Faqs data={faqs2} />;
    </div>
  );
};

export default Dynamicfaqs;
