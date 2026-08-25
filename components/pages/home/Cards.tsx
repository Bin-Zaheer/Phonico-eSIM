import Image from "next/image";
import icon1 from "../../../public/assets/globe.svg";
import icon2 from "../../../public/assets/moneyBag.svg";
import icon3 from "../../../public/assets/phoneIcon.svg";
import icon4 from "../../../public/assets/speaker.svg";

const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 2xl:gap-6 2xl:pb-13">
      {/* Card 1 */}
      <div className="bg-[#eae9e9] shadow-md p-4 sm:p-5 2xl:p-6 flex flex-col items-start gap-3 min-w-0">
        <Image
          src={icon1}
          alt="Card Image"
          width={55}
          height={55}
          className="w-12 h-12 sm:w-[55px] sm:h-[55px]"
        />

        <p className="text-lg sm:text-xl font-semibold text-[#3d3d3d] leading-6 sm:leading-7 break-words">
          WirelessSecure Network
        </p>

        <p className="text-[#676767] font-medium text-sm sm:text-[15px] leading-5 sm:leading-6 break-words">
          Phonico understands your data privacy.
          We have applied the highest standard of
          security protocols to avoid any cyber
          threat.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-[#eae9e9] shadow-md p-4 sm:p-5 2xl:p-6 flex flex-col items-start gap-3 min-w-0">
        <Image
          src={icon2}
          alt="Card Image"
          width={55}
          height={55}
          className="w-12 h-12 sm:w-[55px] sm:h-[55px]"
        />

        <p className="text-lg sm:text-xl font-semibold text-[#3d3d3d] leading-6 sm:leading-7 break-words">
          Unlimited Calls &amp; Sms
        </p>

        <p className="text-[#676767] font-medium text-sm sm:text-[15px] leading-5 sm:leading-6 break-words">
          Phonico wants you to stay connected with
          your loved ones all the time with no
          limits on Calls and Sms.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-[#eae9e9] shadow-md p-4 sm:p-5 2xl:p-6 flex flex-col items-start gap-3 min-w-0">
        <Image
          src={icon3}
          alt="Card Image"
          width={55}
          height={55}
          className="w-12 h-12 sm:w-[55px] sm:h-[55px]"
        />

        <p className="text-lg sm:text-xl font-semibold text-[#3d3d3d] leading-6 sm:leading-7 break-words">
          Variety of Data Plans
        </p>

        <p className="text-[#676767] font-medium text-sm sm:text-[15px] leading-5 sm:leading-6 break-words">
          Multiple travel eSIM Data plans
          packages, tailored to your needs so you
          can stay connected.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-[#eae9e9] shadow-md p-4 sm:p-5 2xl:p-6 flex flex-col items-start gap-3 min-w-0">
        <Image
          src={icon4}
          alt="Card Image"
          width={55}
          height={55}
          className="w-12 h-12 sm:w-[55px] sm:h-[55px]"
        />

        <p className="text-lg sm:text-xl font-semibold text-[#3d3d3d] leading-6 sm:leading-7 break-words">
          Easy Activation Process
        </p>

        <p className="text-[#676767] font-medium text-sm sm:text-[15px] leading-5 sm:leading-6 break-words">
          Phonico eSIM activation is so easy that
          anyone can do it. Just Scan the QR code
          or Activate it from the Phonico eSIM
          App.
        </p>
      </div>
    </div>
  );
};

export default Cards;
