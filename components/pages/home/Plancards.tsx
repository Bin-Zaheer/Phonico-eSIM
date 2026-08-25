"use client";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getblogs } from "@/services/blogs.service";
import { data } from "@/Types/type";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { lowercase, toLowerCase } from "zod";

const Plancards = () => {
  const { data, isLoading, isError, error } =
    useQuery({
      queryKey: ["*planscard"],
      queryFn: () =>
        getblogs(
          `https://platform.phonico.com/api/guest-plans`,
        ),
    });
  console.log(data);
  function addtocart(items: data) {
    localStorage.setItem(
      "Cart",
      JSON.stringify(items),
    );
  }

  return (
    <div className="w-full flex flex-wrap justify-evenly gap-5 sm:gap-6 lg:gap-6 2xl:gap-6.5">
      {isLoading ? (
        <div className="flex justify-between">
          <Skeleton className="h-120 w-73 rounded-2xl bg-[#e3e3e3] mr-4" />
          <Skeleton className="h-120 w-73 rounded-2xl bg-[#e3e3e3] mr-4" />
          <Skeleton className="h-120 w-73 rounded-2xl bg-[#e3e3e3] mr-4" />
          <Skeleton className="h-120 w-73 rounded-2xl bg-[#e3e3e3]" />
        </div>
      ) : isError ? (
        <p>Error Fetching Plans</p>
      ) : (
        data?.data?.map((item: data) => (
          <div
            key={item.id}
            className="w-full min-[500px]:w-[80%] sm:w-[47%] lg:w-[30%] xl:w-[23.3%] py-3 px-3 sm:px-4 bg-white shadow-xl flex flex-col items-center gap-3 text-center overflow-visible rounded-3xl sm:rounded-4xl relative"
          >
            <p className="text-2xl sm:text-3xl font-extrabold mb-25">
              {item.data_usable}GB
            </p>

            <div
              className={` ${item.price == "15" ? "bg-[#ef5e7f] text-white" : "bg-[#5cbfea] text-black"} shadow-md px-4 sm:px-6 py-3 sm:py-4 flex flex-col items-center gap-2 text-center rounded-xl sm:rounded-2xl absolute top-[13%] w-[105%]`}
            >
              <p className="text-xl sm:text-2xl font-semibold text-center w-full tracking-wide sm:tracking-widest">
                ${item.price}/month
              </p>

              <p className=" tracking-tight text-xs sm:text-[14px] w-full leading-5">
                {item.name}
              </p>
            </div>

            <p className="font-semibold tracking-wide text-sm sm:text-base">
              Quick Start Plan
            </p>

            <p className="font-medium text-xs sm:text-[14px] leading-5 sm:leading-6">
              Enjoy our basic eSIM plan for a
              Month of Travel without getting a
              hole in your Pocket.
            </p>

            <div className="w-full flex flex-col gap-2 text-left">
              <p className="flex items-start gap-2 text-sm text-[#2d2d2d]">
                <IoCheckmarkCircleSharp className="shrink-0 mt-0.5 text-lg text-blue-400" />
                <span>High-speed internet</span>
              </p>

              <p className="flex items-start gap-2 text-sm text-[#2d2d2d]">
                <IoCheckmarkCircleSharp className="shrink-0 mt-0.5 text-lg text-blue-400" />
                <span>Unlimited talk & text</span>
              </p>

              <p className="flex items-start gap-2 text-sm text-[#2d2d2d]">
                <IoCheckmarkCircleSharp className="shrink-0 mt-0.5 text-lg text-blue-400" />
                <span>
                  High-quality video streaming
                </span>
              </p>

              <p className="flex items-start gap-2 text-sm text-[#2d2d2d]">
                <IoCheckmarkCircleSharp className="shrink-0 mt-0.5 text-lg text-blue-400" />
                <span>No hidden fees</span>
              </p>

              <p className="flex items-start gap-2 text-sm text-[#2d2d2d]">
                <IoCheckmarkCircleSharp className="shrink-0 mt-0.5 text-lg text-blue-400" />
                <span>
                  No contract (cancel anytime)
                </span>
              </p>
            </div>
            <Link href={`/plans/${item.name}`}>
              <Button
                onClick={() => addtocart(item)}
                className="w-full sm:w-auto py-5 px-8 sm:px-12 font-medium text-sm sm:text-md"
              >
                View Plan
              </Button>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Plancards;
