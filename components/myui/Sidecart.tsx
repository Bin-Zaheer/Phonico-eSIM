"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Trash2 } from "lucide-react";
import { CiShoppingCart } from "react-icons/ci";
import { Button } from "../ui/button";
import { LiaFileContractSolid } from "react-icons/lia";
import { TbWallpaperOff } from "react-icons/tb";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import Image from "next/image";
import icon from "../../app/icon.png";
import { clearCart } from "@/redux/slices/cartSlice";
import { useEffect } from "react";
import Emptycart from "../pages/cartui/Emptycart";
import Link from "next/link";
import Popup from "./Popup";
import { useSession } from "next-auth/react";
import { reduxitems, state, stay } from "@/Types/type";
import { RootState } from "@/redux/store";

export default function Sidecart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state:RootState) => state.cart.items,
  );
  const { data: session, status } = useSession();

  return (
    <Sheet>
      <SheetTrigger>
        <div className="lg:py-2.5 lg:px-3 flex justify-center rounded-md hover:bg-gray-600/20 cursor-pointer border border-gray-500/20 transform transition duration-300 px-2 py-1.5 relative ">
          <CiShoppingCart className="text-3xl lg:text-3xl text-black cursor-pointer" />
          {cartItems.length > 0 ? (
            <div className="rounded-full bg-red-500 w-[35%] text-[12px] absolute -top-3 -right-2">
              1
            </div>
          ) : null}
        </div>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-full max-w-full sm:max-w-md overflow-x-hidden z-9"
      >
        <SheetHeader>
          <SheetTitle className="text-md font-semibold ">
            Shopping Cart
          </SheetTitle>
        </SheetHeader>

        {cartItems.length > 0 ? (
          <div className="2xl:mt-8 flex 2xl:h-full flex-col  ">
            <div className="flex gap-4 border-b p-2 bg-[#f8f6f0] px-2 items-center">
              <Image
                src={icon}
                alt="Icon"
                width={90}
                height={20}
                className="rounded-xl"
              ></Image>

              <div className="min-w-0 flex flex-1 flex-col px-5">
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-3xl">
                    {cartItems?.[0]?.data_usable}
                    GB
                  </h1>

                  <span className="font-semibold text-3xl">
                    ${cartItems?.[0]?.price}
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <p className="text-[12px]">
                    eSIM/Unlimited / 1-month
                  </p>
                  <button className="text-red-500">
                    <Trash2
                      size={27}
                      onClick={() =>
                        dispatch(clearCart())
                      }
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="px-5 mt-auto">
              <div className=" bg-[#f8f6f0b3] p-5 rounded-2xl mb-2">
                <div className="mb-4 flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>
                    ${cartItems?.[0]?.price}
                  </span>
                </div>
                {!status ? (
                  <Link href={"/checkout"}>
                    <div className="flex justify-center items-center">
                      <Button className="w-[80%] rounded-xl  py-6 text-[15px] font-semibold text-white">
                        Checkout
                      </Button>
                    </div>
                  </Link>
                ) : (
                  <div className="flex justify-center items-center w-full">
                    <Popup />
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-around items-center">
              <p className="flex justify-center items-center  text-[12px] gap-2">
                <LiaFileContractSolid className="text-lg" />{" "}
                No Contract Required
              </p>
              <p className="flex justify-center items-center text-[12px] gap-2">
                <TbWallpaperOff className="text-lg" />
                Cancel Anytime
              </p>
            </div>
          </div>
        ) : (
          <Emptycart />
        )}
      </SheetContent>
    </Sheet>
  );
}
