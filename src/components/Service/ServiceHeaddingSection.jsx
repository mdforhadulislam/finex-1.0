import IsBangla from "@/utils/IsBangla";
import IsEnglish from "@/utils/IsEnglish";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import BG from "@/public/bg.png";

const ServiceHeaddingSection = () => {
  return (
    <div
      className="w-full h-auto bg"
      style={{ backgroundImage: `url('${BG.src}')` }}
    >
      <div className="lg:container h-auto m-auto   sm:p-2 p-4 sm:py-24">
        <IsEnglish>
          <h1 className="font-bold text-3xl sm:text-5xl text-white">SERVICE</h1>
        </IsEnglish>
        <IsBangla>
          <h1 className="font-bold text-5xl sm:text-6xl text-white bfont">
            আমাদের সেবা
          </h1>
        </IsBangla>
        <IsEnglish>
          <span className="flex flex-row items-center align-middle justify-start text-[16px] sm:text-[20px] gap-[2px] sm:gap-2 font-normal py-2 text-white">
            <Link href={"/"}>HOME</Link>
            <FaChevronRight className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]" />
            <Link href={"/service"}>SERVICE</Link>
          </span>
        </IsEnglish>
        <IsBangla>
          <span className="flex flex-row items-center align-middle justify-start  gap-[2px] sm:gap-2 font-normal py-2 text-white">
            <Link href={"/"} className="bfont text-xl sm:text-3xl">
              হোম
            </Link>
            <FaChevronRight className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]" />
            <Link href={"/service"} className="bfont text-xl sm:text-3xl">
              আমাদের সেবা
            </Link>
          </span>
        </IsBangla>
      </div>
    </div>
  );
};

export default ServiceHeaddingSection;
