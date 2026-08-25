"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { CiShoppingCart } from "react-icons/ci";
import { FiLogIn } from "react-icons/fi";
import { GoPersonAdd } from "react-icons/go";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import {
  signOut,
  useSession,
} from "next-auth/react";
import { ImExit } from "react-icons/im";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";

const Menu = () => {
  const { data: session, status } = useSession();
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <div className="lg:py-3 lg:px-3 px-3 py-2 flex justify-center rounded-md hover:bg-gray-600/50 cursor-pointer border border-gray-500/20 transform transition duration-300">
            <FiMenu className="lg:text-3xl text-2xl text-black cursor-pointer" />
          </div>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-full max-w-full sm:max-w-md overflow-x-hidden z-20"
        >
          <div className="p-10 space-y-5">
            <Image
              src="/icon.png"
              alt="Phonico Logo"
              width={80}
              height={50}
              priority
              className="h-auto w-[55px] min-[350px]:w-[65px] sm:w-[70px] md:w-[75px] lg:w-[80px]"
            />
            <div className=" gap-10 space-y-5  ">
              <Link href="/" className="block">
                <p className="onhover cursor-pointer text-base font-semibold text-black transition duration-300 lg:text-lg">
                  Home
                </p>
              </Link>
              <Link
                href="/plans"
                className="block"
              >
                <p className="onhover cursor-pointer text-base font-semibold text-black transition duration-300 lg:text-lg">
                  Plans
                </p>
              </Link>
              <Link
                href="/blog"
                className="block"
              >
                <p className="onhover cursor-pointer text-base font-semibold text-black transition duration-300 lg:text-lg">
                  Blogs
                </p>
              </Link>
            </div>
            {status == "loading" ? (
              <div className="flex flex-col justify-between items-end">
                <Skeleton className="w-70 bg-[#dedede] h-4 mb-3" />
                <Skeleton className="w-70 bg-[#dedede] h-4" />
              </div>
            ) : (
              status !== "authenticated" && (
                <div className="hidden lg:flex gap-4">
                  <Link href={"/login"}>
                    <button className="cursor-pointer flex shrink-0 items-center justify-center gap-1 rounded-md bg-[#ee5e7f] px-2.5 py-2 text-xs font-semibold transition duration-300 hover:bg-[#cb4060] min-[350px]:px-3 min-[350px]:text-sm sm:px-4 sm:py-2.5 md:px-3 lg:px-5 lg:py-3 lg:text-base">
                      <FiLogIn className="text-sm sm:text-base lg:text-xl" />
                      <span className="hidden sm:inline">
                        Login
                      </span>
                    </button>
                  </Link>
                  <Link href={"/register"}>
                    <button className="cursor-pointer flex shrink-0 items-center justify-center gap-1 rounded-md border border-gray-500/20 px-2.5 py-2 text-xs font-semibold text-black transition duration-300 hover:bg-gray-600/20 min-[350px]:px-3 min-[350px]:text-sm sm:px-4 sm:py-2.5 md:px-3 lg:px-5 lg:py-3 lg:text-base">
                      <GoPersonAdd className="text-sm sm:text-base lg:text-xl" />
                      <span className="hidden sm:inline">
                        Sign Up
                      </span>
                    </button>
                  </Link>
                </div>
              )
            )}
            {status == "authenticated" && (
              <button
                onClick={() => signOut()}
                className="visible lg:hidden cursor-pointer flex shrink-0 items-center justify-center gap-1 rounded-md border border-gray-500/20 px-6 py-2.5 text-lg font-semibold text-[#ef5b7a] transition duration-300 hover:bg-gray-600/20 "
              >
                <ImExit className="text-sm sm:text-base lg:text-xl text-[#ef5b7a  ]" />
                <span className="">Logout</span>
              </button>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Menu;
