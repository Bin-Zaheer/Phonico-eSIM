"use client";
import { Button } from "@/components/ui/button";
import { validnum } from "@/Types/type";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Inpbut = () => {
  const lineSchema = z
    .object({
      number: z
        .string()
        .max(11, "Please enter a valid number")
        .min(11, "Please enter a valid number"),
      Cnumber: z.string(),
    })
    .refine(
      (data) => data.number === data.Cnumber,
      {
        message: "Your number is doesn't match",
        path: ["Cnumber"],
      },
    );

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<validnum>({
    resolver: zodResolver(lineSchema),
    mode: "all",
  });

  function submit<validnum>(e: validnum) {
    console.log(e);
  }
  return (
    <>
      <div className="lg:w-[48%]">
        <form
          action=""
          onSubmit={handleSubmit(submit)}
          className=""
        >
          <div className="mb-10">
            <label
              htmlFor="number"
              className="text-lg font-semibold text-[#2e2e2e]"
            >
              Line Number
            </label>
            <input
              type=""
              {...register("number")}
              id="number"
              placeholder="Enter your line number"
              className="block border w-full py-3.5 rounded-2xl  px-3 font-medium text-[#4d4d4d] bg-white"
            />
            {errors.number && (
              <p className="text-red-500 font-medium">
                {errors.number?.message}
              </p>
            )}
          </div>
          <div className="mb-10">
            <label
              htmlFor="Cnumber"
              className="text-lg font-medium text-[#2e2e2e]"
            >
              Confirm Line Number
            </label>
            <input
              type=""
              {...register("Cnumber")}
              placeholder="Confirm your Line Number"
              id="Cnumber"
              className="block border w-full py-3.5 rounded-2xl  px-3 font-medium text-[#4d4d4d] bg-white"
            />
            {errors.Cnumber && (
              <p className="text-red-500 font-medium">
                {errors.Cnumber?.message}
              </p>
            )}
          </div>
          <Button
            className={"w-full py-6 text-lg"}
            disabled={!isValid}
            type="submit"
            onClick={handleSubmit(submit)}
          >
            Renew Number
          </Button>
        </form>
      </div>
    </>
  );
};

export default Inpbut;
