"use client";
import { Button } from "@/components/ui/button";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { LiaFileContractSolid } from "react-icons/lia";
import { TbWallpaperOff } from "react-icons/tb";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { addToCart } from "@/redux/slices/cartSlice";
import Faqs from "../home/Faqs";
import { faqs2 } from "@/propsdata";
import toast, { Toaster } from "react-hot-toast";
import { RootState } from "@/redux/store";

const Plans = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state: RootState) => state.cart.items,
  );
  const data = JSON.parse(
    localStorage.getItem("Cart") || "[]",
  );

  const handleAdd = () => {
    console.log("yeh mieri cart hai", cartItems);
    if (cartItems.length === 0) {
      dispatch(addToCart(data));
    } else {
      toast.error(
        "You can only add one item to the cart",
      );
    }
  };

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={true}
      />
      <div className="lg:flex justify-center items-center w-full lg:px-10">
        <div className=" lg:w-[40%] py-15 px-3 sm:px-4 bg-[#f5fcff] flex flex-col items-center gap-3 text-center overflow-visible ">
          <p className="text-4xl  font-semibold mb-4">
            {data.data_usable}GB
          </p>

          <div
            className={` ${data.price == "15" ? "bg-[#ef5e7f] text-white" : "bg-[#5cbfea] text-black"} shadow-md px-5  py-7 flex flex-col items-center gap-2 text-center rounded-xl sm:rounded-2xl  w-[65%]`}
          >
            <p className="text-3xl  font-semibold text-center w-full text-white ">
              ${data.price}/mo
            </p>

            <p className="text-white tracking-tight text-[15px] font-semibold    w-full leading-5">
              1GB Data and Unlimited Talk & Text
            </p>
          </div>

          <div className="w-full flex flex-col mt-4 justify-center items-center">
            <div className="lg:w-[60%] w-[65%] gap-2 space-y-4">
              <p className="flex items-start gap-2 text-sm text-[#2d2d2d]">
                <IoCheckmarkCircleSharp className="shrink-0 mt-0.5 text-xl text-blue-400" />
                <span className="text-[18px]">
                  High-speed internet
                </span>
              </p>

              <p className="flex items-start gap-2 text-sm text-[#2d2d2d]">
                <IoCheckmarkCircleSharp className="shrink-0 mt-0.5 text-xl text-blue-400" />
                <span className="text-[18px]">
                  Unlimited talk & text
                </span>
              </p>

              <p className="flex items-start gap-2 text-sm text-[#2d2d2d]">
                <IoCheckmarkCircleSharp className="shrink-0 mt-0.5 text-xl text-blue-400" />
                <span className="text-[18px]">
                  High-quality video streaming
                </span>
              </p>

              <p className="flex items-start gap-2 text-sm text-[#2d2d2d]">
                <IoCheckmarkCircleSharp className="shrink-0 mt-0.5 text-xl text-blue-400" />
                <span className="text-[18px]">
                  No hidden fees
                </span>
              </p>

              <p className="flex items-start gap-2 text-sm text-[#2d2d2d]">
                <IoCheckmarkCircleSharp className="shrink-0 mt-0.5 text-xl text-blue-400" />
                <span className="text-[18px]">
                  No contract (cancel anytime)
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[rgb(254,247,242)] lg:w-[54%] px-5 py-8 text-center space-y-5">
          <Button
            className={
              " px-4 py-6 bg-white text-[#ef5e7f] border border-[#ef5e7f] hover:bg-[#ef5e7f] hover:text-white transition-all duration-200 xl:w-[50%] lg:text-[1rem] cursor-pointer"
            }
          >
            Check if your phone is eSIM compatible
          </Button>
          <p className="flex items-start text-2xl font-semibold">
            Whats included
          </p>
          <div className="flex justify-between items-center px-3.5 py-4 bg-white border rounded-2xl border-[#d4d4d4]">
            <p>Unlimited SMS & Minutes</p>
            <p className="font-bold text-[#ef5e7f]">
              Included
            </p>
          </div>
          <div className="bg-white border rounded-2xl border-[#ececec]">
            <div className=" px-4 py-5 space-y-5">
              <div className="flex justify-between items-center font-semibold">
                <p>Monthly</p>
                <p>${data.price}/mo</p>
              </div>
              <hr />

              <div className="flex justify-between items-center font-semibold">
                <p>Subtotal</p>
                <p>${data.price} for 1 month</p>
              </div>
              <hr />
              <Button
                onClick={handleAdd}
                className={
                  "px-4 py-6 hover:bg-[#e92c58] w-[80%] text-[17px]"
                }
              >
                Add To Cart
              </Button>
            </div>
          </div>
          <div className="flex justify-between items-center px-10 lg:px-30">
            <p className="flex items-center gap-1 font-light">
              <LiaFileContractSolid className="text-2xl" />
              No Contract Required
            </p>
            <p className="flex items-center gap-1 font-light">
              <TbWallpaperOff className="text-2xl" />
              Cancel Anytime
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#f9f6f4] w-full mt-10">
        <Faqs data={faqs2} />
      </div>
    </>
  );
};

export default Plans;
