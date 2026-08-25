import Cards from "@/components/pages/home/Cards";
import Plans from "@/components/pages/home/Plans";
import Whychoose from "@/components/pages/home/Whychoose";
import {
  faqs2,
  Plansdown,
  Plansdown2,
  Planstitle,
  Planstitle2,
} from "@/propsdata";
import Bg from "../../public/assets/benefitsImg2.png";
import Bg2 from "../../public/assets/mobileImg2.png";
import Downloadapp from "@/components/pages/home/Downloadapp";
import Coverage from "@/components/pages/home/Coverage";
import Faqs from "@/components/pages/home/Faqs";
import Dynamicfaqs from "@/components/pages/dynamicplansui/Dynamicfaqs";

const page = () => {
  return (
    <>

      <div className="lg:px-30">
        <Plans />
        <Cards />
        <div className="mb-20">
          <Coverage />
        </div>
        <Whychoose
          bg={Bg.src}
          title={Planstitle()}
          description={Plansdown}
        />
        <Downloadapp
          bg={Bg2.src}
          title={Planstitle2()}
          description={Plansdown2}
        />
      </div>
        <Dynamicfaqs />
    </>
  );
};

export default page;
