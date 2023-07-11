"use client";

import Image from "next/image";
import ClientOnly from "./ClientOnly";

type HeaderButtonProps = {
  icon: string;
  count?: number;
};
const HeaderButton: React.FC<HeaderButtonProps> = ({ icon, count }) => {
  return (
    <div className="Button w-10 h-10 p-3.5 rounded-xl justify-center items-center gap-1.5 inline-flex">
      <div className="Bell w-6 h-6 px-[3.69px] py-[2.50px]  justify-center items-center flex">
        <div className="Bell w-[16.62px] h-[19px] relative justify-start items-start flex">
          <Image
            className=""
            src={`/${icon}.jpg`}
            alt={icon}
            width={24}
            height={24}
          />
          <ClientOnly>
            {icon === "bell" && <RedDot count={2} />}
            {icon === "star" && <RedDot count={count} />}
          </ClientOnly>
        </div>
      </div>
    </div>
  );
};

const RedDot = ({ count }: { count: number | undefined }) => {
  if (count && count > 0) {
    return (
      <div className="w-[18px] h-[18px] absolute top-[-6px] left-[8px] flex justify-center items-center rounded-full border border-white">
        <div className="absolute bg-orange-600 text-white text-[10px] font-semibold leading-3">
          {count}
        </div>
        <Image src={`/red-dot.jpg`} alt="red-dot" width={18} height={18} />
      </div>
    );
  }
  return <></>;
};

export default HeaderButton;
