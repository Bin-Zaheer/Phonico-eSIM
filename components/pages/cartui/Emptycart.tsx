import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LiaShoppingBagSolid } from "react-icons/lia";

const Emptycart = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center space-y-3">
      <LiaShoppingBagSolid className="text-[180px] text-[#ef5b7a]" />
      <p className="text-lg font-bold">
        Your cart is empty
      </p>
      <p>Add something to make me happy :)</p>
      <Link href={"/plans"}>
        <Button className={"px-5 py-6 text-lg"}>
          Go to our shop
        </Button>
      </Link>
    </div>
  );
};

export default Emptycart;
