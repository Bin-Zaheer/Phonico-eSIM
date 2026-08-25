import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import Link from "next/link";

const Popup = () => {
  return (
    <Dialog>
      <DialogTrigger className={"w-full"}>
        <div className="w-full">
          <Button className="w-[80%] rounded-xl  py-6 text-[15px] font-semibold text-white">
            Checkout
          </Button>
        </div>
      </DialogTrigger>

      <DialogContent className="flex flex-col justify-center items-center py-10">
        <DialogHeader>
          <DialogTitle>
            <p className="text-xl font-semibold">
              You need to login first?
            </p>
          </DialogTitle>
        </DialogHeader>

        <Link href={"/login"} className="w-full">
          <div className="py-4 w-full flex justify-center items-center">
            <Button className="w-[60%] rounded-xl  py-6 text-[20px] font-semibold text-white">
              Login
            </Button>
          </div>
        </Link>
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
