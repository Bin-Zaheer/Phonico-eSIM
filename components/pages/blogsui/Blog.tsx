"use client";
import Image from "next/image";
import blogimg from "../../../public/assets/blog.jpeg";
import own from "../../../public/assets/owner.jpeg";
import { MdArrowOutward } from "react-icons/md";
import { getblogs } from "../../../services/blogs.service";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { ItemMedia } from "@/components/ui/item";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import toast, { Toaster } from "react-hot-toast";
import { data } from "@/Types/type";

const Blog = () => {
  const [word, setWord] = useState<string>();
  const [categoryName, setCategoryName] =
    useState("");

  const [da, setDa] = useState([]);
  const { data, isLoading, isError, error } =
    useQuery({
      queryKey: ["products"],
      queryFn: () =>
        getblogs(
          "https://platform.phonico.com/api/landing/blog",
        ),
    });
  function categorywise(name: string) {
    let fil = data?.data?.filter(
      (item:data) => item.blog_category.name == name,
    );
    setDa(fil ? fil : data);
    console.log(fil);
  }
  function getdata(e: React.FormEvent) {
    e.preventDefault();
    console.log(categoryName);
    if (da.length === 0) {
      toast("No Blogs Found to this Keyword", {
        icon: "🔍",
      });
      // toast.error(
      //   "No Blogs Found to this Keyword",
      // );
    }
    setWord(
      da.length > 0
        ? categoryName.charAt(0).toUpperCase() +
            categoryName.slice(1)
        : "All Blogs",
    );
    categorywise(
      categoryName.charAt(0).toUpperCase() +
        categoryName.slice(1),
    );
  }

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={true}
      />
      <div className="flex flex-col justify-center items-center lg:p-20 py-20 px-2 bg-[#fef7f2] w-full space-y-3 ">
        <p className="bg-[#ee5e7f21] lg:w-[10%] text-center py-1.5 px-2 text-sm rounded-full font-medium ">
          Our Blogs
        </p>
        <p className="text-5xl font-bold">
          Learn with{" "}
          <span className="text-[#ee5e7f]">
            Phonico
          </span>
        </p>
        <p className="lg:text-xl text-lg text-center">
          Stay informed and sweeten your eSIM
          experience with our expert insights and
          practical tips.
        </p>
        <div className=" flex justify-center items-center w-full">
          <form
            onSubmit={getdata}
            action=""
            className="flex justify-center items-center w-full"
          >
            <input
              type=""
              value={categoryName}
              onChange={(e) =>
                setCategoryName(e.target.value)
              }
              className="bg-white px-4 border border-[#cdcdcd] py-3  w-[35%]"
              placeholder="Search blogs"
            />
            <Button
              type="submit"
              className={
                "px-7 text-md tracking-wider py-6 -ml-2"
              }
            >
              Search
            </Button>
          </form>
        </div>
      </div>

      <div className="xl:w-[52%] lg:w-[70%] md:w-[80%] sm:w-[90%] w-full mt-15 text-center">
        <p className="text-2xl font-semibold mb-4">
          Categories to Explore
        </p>
        <div className="px-5 py-6 border border-black rounded-[20px] flex justify-between items-center ">
          <p
            className="font-semibold text-sm lg:text-lg hover:text-[#ee5e7f] cursor-pointer"
            onClick={() => {
              setWord("Trouble shooting");
              categorywise("Trouble shooting");
            }}
          >
            Trouble shooting
          </p>
          <p
            className="font-semibold text-sm lg:text-lg hover:text-[#ee5e7f] cursor-pointer"
            onClick={() => {
              setWord("Android");
              categorywise("Android");
            }}
          >
            Android
          </p>
          <p
            className="font-semibold text-sm lg:text-lg hover:text-[#ee5e7f] cursor-pointer"
            onClick={() => {
              setWord("iPhone");
              categorywise("iPhone");
            }}
          >
            iPhone
          </p>
          <p
            className="font-semibold text-sm lg:text-lg hover:text-[#ee5e7f] cursor-pointer"
            onClick={() => {
              setWord("How To");
              categorywise("How To");
            }}
          >
            How To
          </p>
          <p
            className="font-semibold text-sm lg:text-lg hover:text-[#ee5e7f] cursor-pointer"
            onClick={() => {
              setWord("Travel Tips");
              categorywise("Travel Tips");
            }}
          >
            Travel Tips
          </p>
          <p
            className="font-semibold text-sm lg:text-lg hover:text-[#ee5e7f] cursor-pointer"
            onClick={() => {
              setWord("Info");
              categorywise("Info");
            }}
          >
            Info
          </p>
        </div>
      </div>
      <div className="w-full">
        <p className="text-2xl font-bold py-10">
          {!word ? "All Blogs" : word}
        </p>

        {isLoading ? (
          <div className="flex justify-between items-center">
            <Skeleton className="h-120 w-100 rounded-2xl bg-[#e3e3e3]" />
            <Skeleton className="h-120 w-100 rounded-2xl bg-[#e3e3e3]" />
            <Skeleton className="h-120 w-100 rounded-2xl bg-[#e3e3e3]" />
          </div>
        ) : isError ? (
          <p>Fetch failed</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 h-full">
            {(da.length > 0
              ? da
              : data?.data
            )?.map((item:data) => (
              <Link
                href={`/blog/${item.blog_category.slug}/${item.slug}`}
                key={item.id || item.name}
                className="flex"
              >
                <div className="p-5 bg-[#f5f5f5] rounded-2xl space-y-2 cursor-pointer">
                  <Image
                    src={item.image}
                    alt="BlogImg"
                    className="rounded-2xl w-full h-auto"
                    width={400}
                    height={400}
                  />
                  <p className="text-[#ee5e7f] font-bold text-sm">
                    {item.blog_category.name}
                  </p>
                  <p className="lg:text-2xl text-lg font-bold flex items-start justify-between">
                    {item.name}
                    <MdArrowOutward className="text-4xl hover:text-[#ee5e7f] cursor-pointer" />
                  </p>
                  <p className="text-[#9b9b9b] text-sm lg:text-lg">
                    {item.sub_content}
                  </p>
                  <div className="flex items-center lg:py-7 py-4">
                    <Image
                      src={item?.author_image}
                      width={40}
                      height={40}
                      className="rounded-full mr-5"
                      alt="owner"
                    />
                    <p className="font-medium">
                      {item.author_name}
                    </p>
                  </div>
                  <p>
                    {
                      item.created_at_diff_for_humans
                    }
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Blog;
