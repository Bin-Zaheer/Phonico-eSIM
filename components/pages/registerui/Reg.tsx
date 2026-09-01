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
      otp: z
        .string()
        .min(1, "OTP must be Required"),
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
    formState: { isSubmitting, errors, isValid },
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
      redirect: false,
      action: "register",
    });
    if (result) {
      window.location.href = "/";
    }
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
        {errors.password && (
          <p className="text-red-500 text-sm">
            {errors.password.message}
          </p>
        )}
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
        {errors.Cpassword && (
          <p className="text-red-500 text-sm">
            {errors.Cpassword.message}
          </p>
        )}
        <label
          htmlFor="email"
          className="font-medium"
        >
          OTP
        </label>
        <input
          className="block border w-full py-3.5 rounded-2xl  px-3 font-medium text-[#4d4d4d]"
          type=""
          {...register("otp")}
          placeholder="e.g. 123"
        />
        {errors.otp && (
          <p className="text-red-500 text-sm">
            {errors.otp.message}
          </p>
        )}
        <button
          className={`py-3 text-lg text-[#ef5e7f] w-full ${isSubmitting ? "bg-[#b53956] text-white" : "text-[#ef5e7f] bg-white"} hover:bg-[#ef5e7f] hover:text-white transition duration-400 cursor-pointer border border-[#ef5e7f] rounded-2xl mt-7`}
          disabled={isSubmitting || !isValid}
        >
          {isSubmitting
            ? "Registring...."
            : "Register"}
        </button>
      </form>
    </>
  );
};

export default Reg;
