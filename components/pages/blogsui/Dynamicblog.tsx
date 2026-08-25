"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { getblogs } from "@/services/blogs.service";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

const Dynamicblog = ({
  slug,
}: {
  slug: string[];
}) => {
  const { data, isLoading, isError, error } =
    useQuery({
      queryKey: ["productdetail"],
      queryFn: () =>
        getblogs(
          `https://platform.phonico.com/api/landing/blog/${slug?.[1]}`,
        ),
    });
  if (isLoading) {
    return (
      <div className=" flex justify-center items-center">
        <Skeleton className="w-300 h-200 bg-[#cfcfcf]" />
      </div>
    );
  }
  return (
    <div className="px-30 flex flex-col justify-center items-center">
      <div className="">
        <Image
          src={data?.data?.image}
          alt="Image"
          width={2000}
          height={2000}
        />
        <div className="w-full flex justify-between items-center px-10 py-4 bg-[rgb(248,249,250)] shadow-[0_10px_10px_-5px_rgba(0,0,0,0.3)]">
          <div className="flex items-center gap-5">
            <Image
              src={data?.data?.author_image}
              alt="Author Image"
              width={50}
              height={50}
              className="rounded-full"
            />
            <p>{data?.data?.author_name}</p>
          </div>
          <p>
            {
              data?.data
                ?.created_at_diff_for_humans
            }
          </p>
        </div>
      </div>
      <div
        className="prose max-w-none mt-10"
        dangerouslySetInnerHTML={{
          __html: data?.data?.content,
        }}
      />
      <div className="px-30 py-10 space-y-3 mt-5 mb-10 bg-[rgb(248,249,250)] shadow-[0_10px_10px_-5px_rgba(0,0,0,0.3)] w-[50%] flex flex-col justify-center items-center">
        <Image
          src={data?.data?.author_image}
          alt="Author Image"
          width={90}
          height={90}
          className="rounded-full"
        />
        <p className="text-xl font-bold underline">
          {data?.data?.author_name}
        </p>
        <p className="text-lg font-light ">
          {data?.data?.description}
        </p>
      </div>
    </div>
  );
};

export default Dynamicblog;
