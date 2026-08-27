"use client";
import { sndotp } from "@/services/sendotp.service";
import { otpemail } from "@/Types/type";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Reg from "./Reg";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast, { Toaster } from "react-hot-toast";

const Sendotp = () => {
  const validemail = z.object({
    email: z.email(),
  });
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(validemail),
  });
  const [status, setstatus] = useState();
  async function snddata(data: otpemail) {
    console.log(data);

    const da = await sndotp(data);
    setstatus(da.status);

    if (da.errors) {
      toast.error(da.errors[0]);
    }
  }
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={true}
      />
      {!status && (
        <form
          action=""
          onSubmit={handleSubmit(snddata)}
        >
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
            placeholder="name@example.com"
          />
          <button className="py-3 text-lg text-[#ef5e7f] w-full hover:bg-[#ef5e7f] hover:text-white transition duration-400 cursor-pointer border border-[#ef5e7f] rounded-2xl mt-7">
            {isSubmitting
              ? "Sending OTP...."
              : "Send OTP"}
          </button>
        </form>
      )}
      {status && <Reg />}
    </>
  );
};

export default Sendotp;
