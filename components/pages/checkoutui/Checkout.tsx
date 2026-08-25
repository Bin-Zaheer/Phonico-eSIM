"use client";
import Image from "next/image";
import img from "../../../app/icon.png";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkout, stay } from "@/Types/type";
import Faqs from "../home/Faqs";
import { faqs2 } from "@/propsdata";

const Checkout = () => {
  const cartItems = useSelector(
    (state: stay) => state.cart.items,
  );

  const valid = z.object({
    imei: z
      .string()
      .min(15, "Please Enter a Valid IMEI")
      .max(15, "Please Enter a Valid IMEI"),
    zipcode: z
      .string()
      .min(5, "Please Enter a Valid Postal code")
      .max(5, "Please Enter a Valid Postal code"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(valid),
    mode: "all",
  });

  function getdata(data: checkout) {
    console.log(data);
  }
  return (
    <>
      <div className="bg-[#fef7f2] px-4 py-10 w-[90%] xl:w-[60%] space-y-8 flex flex-col justify-center items-center">
        <div className="flex justify-between items-center w-full">
          <div className="bg-white px-5">
            <Image
              src={img}
              alt="Icon"
              width={110}
              height={110}
            ></Image>
          </div>
          <div className="space-y-3">
            <p className="text-4xl font-bold">
              {cartItems.data_usable}GB
            </p>
            <p className="text-[15px] text-[#adadad]">
              eSIM/ Unlimited /1-month
            </p>
          </div>
          <p className="text-4xl font-bold">
            ${cartItems.price}
          </p>
        </div>
        <form
          action=""
          className="space-y-8 w-full"
          onSubmit={handleSubmit(getdata)}
        >
          <div className="space-y-8 w-full">
            <div className="">
              <input
                type="number"
                {...register("imei")}
                placeholder="Enter 15-digit IMEI"
                className="block w-full px-4 py-2.5 bg-white rounded-xl border border-[#dedede] text-[16px] text-[#6e6e6e]"
              />
              {errors.imei && (
                <p className="text-red-500 font-medium">
                  {errors.imei?.message}
                </p>
              )}
            </div>
            <div className="">
              <input
                type="number"
                {...register("zipcode")}
                placeholder="Enter 5-digit ZIP Code"
                className="block w-full px-4 py-2.5 bg-white rounded-xl border border-[#dedede] text-[#6e6e6e]"
              />
              {errors.zipcode && (
                <p className="text-red-500 font-medium">
                  {errors.zipcode?.message}
                </p>
              )}
            </div>
          </div>
          <div className="px-5 py-4 bg-[#fafafa] rounded-2xl border border-[#dedede] space-y-4 w-full">
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium">
                Discount
              </p>
              <p className="text-lg font-medium">
                $0
              </p>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium">
                Amount from wallet
              </p>
              <p className="text-lg font-medium">
                $0
              </p>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium">
                Amount from card
              </p>
              <p className="text-lg font-medium">
                ${cartItems.price}
              </p>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium">
                Subtotal
              </p>
              <p className="text-lg font-medium">
                ${cartItems.price}
              </p>
            </div>
            <hr />
          </div>
          <Button
            type="submit"
            className={
              "w-[98%] py-6 text-lg font-normal bg-[#fef7f2] text-[#ef5b7a] border-[#ef5b7a] hover:bg-[#ef5b7a] hover:text-white transition-all duration-300 cursor-pointer"
            }
          >
            Pay now
          </Button>
        </form>
      </div>
      <div className="w-full bg-[#f9f6f4] mt-10">
        <Faqs data={faqs2} />
      </div>
    </>
  );
};

export default Checkout;
