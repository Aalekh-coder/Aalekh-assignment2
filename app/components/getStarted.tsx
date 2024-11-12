import React from "react";

const GetStarted = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center mt-8">
        <img src="/assets/text10.png" className="h-[1.7rem] sm:h-[2.5rem] md:h-[3rem] lg:h-[4rem] xl:h-[5rem]" />
      </div>

      <div className=" flex items-center justify-center flex-col mx-auto mt-5 rounded-2xl bg-[#A94949] h-[20rem] w-[17.5rem] sm:w-[35rem] sm:h-[20rem] sm:flex-row sm:justify-around md:w-[42rem] md:h-[25rem] lg:w-[59rem] lg:h-[30rem] xl:w-[73rem] xl:h-[35rem]">
        <img src="/assets/text11.png" className="p-5 md:h-[10rem] lg:h-[13rem] lg:p-0 xl:h-[16rem]" />
        <img src="/assets/login.png" className="h-[11rem] px-[5rem] sm:h-[15rem] sm:px-0 md:h-[20rem] lg:h-[25rem] xl:h-[32rem]" />
      </div>
    </div>
  );
};

export default GetStarted;
