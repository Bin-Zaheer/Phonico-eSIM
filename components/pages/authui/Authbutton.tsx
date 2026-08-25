"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Authbutton = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="w-full p-1 rounded-2xl bg-[#ecf0ff]">
      <Link href={"/login"}>
        <button
          className={`cursor-pointer py-3 text-lg  ${pathname == "/login" ? "bg-[#ef5e7f] text-white" : "text-[#909090]"} rounded-2xl w-[50%]`}
        >
          Login
        </button>
      </Link>
      <Link href={"/register"}>
        <button
          className={`cursor-pointer py-3 text-lg ${pathname == "/register" ? "bg-[#ef5e7f] text-white" : "text-[#909090]"} rounded-2xl w-[50%]`}
        >
          Register
        </button>
      </Link>
    </div>
  );
};

export default Authbutton;
