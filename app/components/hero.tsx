import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="">
      <div className="md:flex lg:flex-col">
        <div className="px-5 py-9 ">
          <img
            src="/assets/fontpaded.png"
            className="sm:h-[20rem] sm:px-10 md:h-[15rem] md:w-[24rem] md:px-1 md:py-1 2xl:h-[25rem] 2xl:w-[39rem]"
          />
        </div>

        <div className="px-5 py-7 sm:px-14 sm:py-10 md:px-0 md:py-0 ">
          <img
            src="/assets/quotes.png"
            className="sm:h-[10rem] md:h-[9rem] md:my-[5rem] lg:my-[1rem] lg:mx-[1rem] 2xl:h-[15rem]"
          />
        </div>
      </div>

      <div className="px-5 py-2 flex gap-5 sm:px-14 sm:py-4 md:mx-[7rem] md:gap-14 lg:mx-1 lg:px-1 lg:gap-4 ">
        <Link href="/demo">
          <img src="/assets/button.png" className="sm:h-[3rem] md:h-[4rem] lg:h-[3rem] 2xl:h-[5rem] 2xl:pr-[2rem]" />
        </Link>
        <Link href="/waitlist">
          <img src="/assets/button2.png" className="sm:h-[3rem] md:h-[4rem] lg:h-[3rem] 2xl:h-[5rem]" />
        </Link>
      </div>

      <div className="px-5 py-2 sm:px-14 sm:py-4 md:px-3 md:py-5  lg:absolute top-[6rem] right-[1rem] -z-30">
        <img src="/assets/Frame801.png" className="sm:h-[30rem] md:h-[40rem] md:mx-auto lg:h-[30rem] 2xl:h-[45rem]" />
      </div>
    </div>
  );
};

export default Hero;
