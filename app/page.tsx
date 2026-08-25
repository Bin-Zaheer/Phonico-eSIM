import Cards from "@/components/pages/home/Cards";
import Downloadapp from "@/components/pages/home/Downloadapp";
import Hero from "@/components/pages/home/Hero";
import Plans from "@/components/pages/home/Plans";
import Question from "@/components/pages/home/Question";
import Ratingline from "@/components/pages/home/Ratingline";
import Sliderreview from "@/components/pages/home/Sliderreview";
import Whychoose from "@/components/pages/home/Whychoose";
import Bg from "../public/assets/benefitsImg1.png";
import {
  Description,
  Downdescription,
  Downtitle,
  Title,
} from "@/propsdata";
import mobile from "../public/assets/mobileImg.png";
import Coverage from "@/components/pages/home/Coverage";

export default function Home() {
  return (
    <>
      <div className="2xl:px-30 md:px-15 sm:px-10 px-2">
        <Hero />
        <Cards />
      </div>

      <div className="2xl:px-30  ">
        <Plans />
        <Coverage />
      </div>
      <div className="2xl:px-30 2xl:py-10 md:px-15 sm:px-10 px-2">
        <Ratingline />
        <Whychoose
          bg={Bg.src}
          title={Title}
          description={Description}
        />
        <Downloadapp
          bg={mobile.src}
          title={Downtitle}
          description={Downdescription}
        />
        <Sliderreview />
      </div>
      <Question />
    </>
  );
}
