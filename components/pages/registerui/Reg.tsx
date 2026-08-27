"use client";
import { signIn } from "next-auth/react";
import { nextregister2 } from "@/Types/type";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Reg = () => {
  const registerSchema = z
    .object({
      email: z.email(),
      password: z
        .string()
        .min(8, "Password At Least 8 Characters"),
      Cpassword: z.string(),
      name: z.string(),
      otp: z.string(),
    })
    .refine(
      (data) => data.password === data.Cpassword,
      {
        message: "Your Password does not match",
        path: ["Cpassword"],
      },
    );
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<nextregister2>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
  });
  async function snddata(data: nextregister2) {
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      name: data.name,
      otp: data.otp,
      redirect: true,
      action: "register",
    });
  }
  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit(snddata)}
      >
        <label
          htmlFor="email"
          className="font-medium"
        >
          Name
        </label>
        <input
          className="block border w-full py-3.5 rounded-2xl  px-3 font-medium text-[#4d4d4d]"
          type="name"
          {...register("name")}
          placeholder="e.g Arbaz Shoukat"
        />
        <label
          htmlFor="email"
          className="font-medium"
        >
          Email
        </label>
        <input
          className="block border w-full py-3.5 rounded-2xl  px-3 font-medium text-[#4d4d4d]"
          type="email"
          {...register("email")}
          placeholder="Enter email"
        />
        <label
          htmlFor="email"
          className="font-medium"
        >
          Password
        </label>
        <input
          className="block border w-full py-3.5 rounded-2xl  px-3 font-medium text-[#4d4d4d]"
          type=""
          {...register("password")}
          placeholder="Enter password"
        />
        <label
          htmlFor="email"
          className="font-medium"
        >
          Confirm Password
        </label>
        <input
          className="block border w-full py-3.5 rounded-2xl  px-3 font-medium text-[#4d4d4d]"
          type=""
          {...register("Cpassword")}
          placeholder="*********"
        />
        <label
          htmlFor="email"
          className="font-medium"
        >
          OTP
        </label>
        <input
          className="block border w-full py-3.5 rounded-2xl  px-3 font-medium text-[#4d4d4d]"
          type="number"
          {...register("otp", {
            valueAsNumber: true,
          })}
          placeholder="e.g. 123"
        />
        <button className="py-3 text-lg text-[#ef5e7f] w-full hover:bg-[#ef5e7f] hover:text-white transition duration-400 cursor-pointer border border-[#ef5e7f] rounded-2xl mt-7">
          {isSubmitting
            ? "Registring...."
            : "Register"}
        </button>
      </form>
    </>
  );
};

export default Reg;
