import Image from "next/image";
import logo from "../../app/icon.png";
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { TfiEmail } from "react-icons/tfi";
import play from "../../public/assets/playLink.svg";
import appstore from "../../public/assets/appleLink.svg";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-white px-4 py-8 min-[350px]:px-5 sm:px-8 sm:py-10 md:px-12 lg:px-16 xl:px-24 2xl:px-40">
        <div className="flex w-full flex-col gap-8 sm:gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <div className="w-full space-y-3 sm:w-[80%] md:w-[70%] lg:w-[32%] xl:w-[28%]">
            <Image
              src={logo}
              alt="Logo"
              width={90}
              height={90}
              className="h-[70px] w-[70px] sm:h-[80px] sm:w-[80px] lg:h-[90px] lg:w-[90px]"
            />

            <p className="max-w-md text-sm leading-6 text-[#353535] sm:text-base sm:leading-7">
              Stay Connected, Anytime and Anywhere
              with Phonico! Your Journey, Our
              Commitment to Unbeatable
              Connectivity.
            </p>

            <p className="flex items-center gap-2 text-sm text-[#ef5b7a] sm:text-[15px]">
              <TfiHeadphoneAlt className="shrink-0" />
              <span>(484)746-6426</span>
            </p>

            <p className="flex flex-wrap items-center gap-2 text-sm text-[#ef5b7a] sm:text-base">
              <TfiEmail className="shrink-0" />
              <span className="break-all">
                support@phonico.com
              </span>
            </p>

            <div className="flex items-center gap-4 pt-1 text-xl sm:gap-5 sm:text-2xl">
              <FaInstagram />
              <TiSocialLinkedin />
              <FaFacebookF />
              <IoLogoTwitter />
            </div>
          </div>

          <div className="w-full sm:w-[45%] lg:w-[22%] xl:w-[18%]">
            <p className="mb-3 text-xl font-semibold sm:text-2xl">
              Quick Links
            </p>

            <div className="space-y-2 px-1 sm:px-3">
              <p className="text-sm sm:text-base">
                Home
              </p>
              <p className="text-sm sm:text-base">
                Blog
              </p>
              <p className="text-sm sm:text-base">
                Terms of use
              </p>
              <p className="text-sm sm:text-base">
                Privacy Policy
              </p>
            </div>
          </div>

          <div className="w-full sm:w-[70%] lg:w-[30%] xl:w-[28%]">
            <p className="mb-3 text-lg font-semibold sm:text-xl">
              Download the App now
            </p>

            <div className="flex flex-wrap items-center gap-2 min-[350px]:gap-3">
              <Image
                src={appstore}
                alt="Download on Apple Store"
                width={120}
                height={120}
                className="h-auto w-[125px] min-[350px]:w-[135px] sm:w-[150px] lg:w-[140px] xl:w-[150px]"
              />

              <Image
                src={play}
                alt="Download on Play Store"
                width={120}
                height={120}
                className="h-auto w-[125px] min-[350px]:w-[135px] sm:w-[150px] lg:w-[140px] xl:w-[150px]"
              />
            </div>
          </div>
        </div>
      </footer>

      <p className="border-t border-gray-200 px-4 py-4 text-center text-xs text-[#555] sm:text-sm">
        Phonico © 2026. All Rights Reserved
      </p>
    </>
  );
};

export default Footer;
