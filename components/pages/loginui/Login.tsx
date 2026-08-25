"use client";
import toast, { Toaster } from "react-hot-toast";

import { logindata } from "@/Types/type";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<logindata>();
  async function snddata(data: logindata) {
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
      action: "login",
    });
    if (result?.error) {
      toast.error("Invalid Credentials");
    }
    if (!result?.error) {
      toast.success("Successfully Login");
      window.location.href = "/";
    }
    console.log(result);
  }
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={true}
      />
      <form
        action=""
        onSubmit={handleSubmit(snddata)}
      >
        <div className="space-y-6">
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
            type="password"
            {...register("password")}
            placeholder="Enter password"
          />
          <p className="-mt-3 underline text-[#007aff]">
            Forgot password?
          </p>
        </div>
        <button
          className={`${isSubmitting ? "bg-[#cf4364] text-white" : ""}  py-3 text-lg text-[#ef5e7f] w-full hover:bg-[#ef5e7f] hover:text-white transition duration-400 cursor-pointer border border-[#ef5e7f] rounded-2xl mt-7`}
        >
          {isSubmitting ? "Login...." : "Login"}
        </button>
      </form>
    </>
  );
};

export default Login;
