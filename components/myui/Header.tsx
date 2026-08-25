"use client";

import Image from "next/image";
import { GrPowerCycle } from "react-icons/gr";
import { FiLogIn } from "react-icons/fi";
import { GoPersonAdd } from "react-icons/go";
import { ImExit } from "react-icons/im";

import {
  useEffect,
  useRef,
  useState,
} from "react";
import Sidecart from "./Sidecart";
import Menu from "./Menu";
import Link from "next/link";
import {
  signOut,
  useSession,
} from "next-auth/react";
import { Skeleton } from "../ui/skeleton";
import { usePathname } from "next/navigation";

const Header = () => {
  const { data: session, status } = useSession();
  const path = usePathname();
  console.log(path);

  const [showHeader, setShowHeader] =
    useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 100) {
        setShowHeader(true);
      } else if (
        currentScrollY > lastScrollY.current
      ) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener(
      "scroll",
      handleScroll,
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);

  return (
    <header
      className={`fixed z-10 w-full bg-white  py-2 text-white shadow-md shadow-[#efeeee] transition-transform duration-300 ${
        showHeader
          ? "translate-y-0"
          : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex w-full items-center justify-between lg:px-0 px-2 lg:justify-around gap-3">
        <div className="shrink-0">
          <Link href={"/"}>
            <Image
              src="/icon.png"
              alt="Phonico Logo"
              width={80}
              height={50}
              priority
              className="h-auto w-[55px] min-[350px]:w-[65px] sm:w-[70px] md:w-[75px] lg:w-[80px]"
            />
          </Link>
        </div>

        <div className="hidden items-center gap-5 lg:flex lg:gap-8">
          <Link href="/">
            <p
              className={` ${path == "/" ? "text-[#ee5e7f] focus" : "text-black onhover"} cursor-pointer text-base font-semibold  transition duration-300 lg:text-lg`}
            >
              Home
            </p>
          </Link>
          <Link href="/plans">
            <p
              className={`onhover  ${path == "/plans" ? "text-[#ee5e7f] focus" : "text-black onhover"} cursor-pointer text-base font-semibold transition duration-300 lg:text-lg`}
            >
              Plans
            </p>
          </Link>
          <Link href="/blog">
            <p
              className={`onhover  ${path == "/blog" ? "text-[#ee5e7f] focus" : "text-black onhover"} cursor-pointer text-base font-semibold transition duration-300 lg:text-lg`}
            >
              Blogs
            </p>
          </Link>
        </div>

        <div className="flex min-w-0 items-center gap-1.5 min-[350px]:gap-2 sm:gap-3 md:gap-2 lg:gap-3">
          <div className="">
            <Sidecart />
          </div>
          <Link href={"/easypay"}>
            <button className="cursor-pointer flex shrink-0 items-center justify-center gap-1 rounded-md bg-[#ee5e7f]  text-[11px] font-semibold transition duration-300 hover:bg-[#cb4060] px-2 py-3 lg:px-4 lg:py-3 lg:text-base">
              <GrPowerCycle className="text-md lg:text-xl" />
              <span className="">Top-Up Now</span>
            </button>
          </Link>
          <Menu />
          {status == "loading" ? (
            <div className="hidden lg:flex flex-col justify-between items-end ">
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
              className="hidden lg:flex cursor-pointer  shrink-0 items-center justify-center gap-1 rounded-md border border-gray-500/20 px-6 py-2.5 text-lg font-semibold text-[#ef5b7a] transition duration-300 hover:bg-gray-600/20 "
            >
              <ImExit className="text-sm sm:text-base lg:text-xl text-[#ef5b7a  ]" />
              <span className="hidden sm:inline">
                Logout
              </span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
