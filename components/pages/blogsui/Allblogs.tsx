import Blog from "@/components/pages/blogsui/Blog";
import { Button } from "@/components/ui/button";

const Allblogs = () => {
  return (
    <>
      <div className="w-full lg:px-35 px-2 flex flex-col items-center h-full">
        <Blog />
      </div>
    </>
  );
};

export default Allblogs;
