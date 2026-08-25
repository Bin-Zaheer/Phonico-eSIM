import Allblogs from "@/components/pages/blogsui/Allblogs";
import Dynamicblog from "@/components/pages/blogsui/Dynamicblog";

const page = async ({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) => {
  const { slug } = await params;

  if (!slug) {
    return <Allblogs />;
  }
  return (
    <>
      <Dynamicblog slug={slug} />
    </>
  );
};

export default page;
