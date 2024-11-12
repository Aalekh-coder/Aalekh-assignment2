import React from "react";

const Monetization = () => {
  return (
    <div className="lg:flex mt-5">
      <div className="flex items-center justify-center">
        <img
          src="/assets/monetize.png"
          className="sm:h-[5rem] lg:h-[4rem] lg:w-[26rem]"
        />
      </div>

      {/* second main div  */}
      <div className="xl:w-[50vw] xl:mx-auto">
        <div className="flex gap-4 justify-around mt-[1rem] sm:mt-[2rem]">
          <div className="bg-gray-900 flex flex-col items-center justify-center h-[17rem] w-[9rem] rounded-xl sm:h-[27rem] sm:w-[16rem] lg:h-[33rem] lg:w-[23rem]">
            <img src="/assets/text6.png" className="sm:h-[10rem]" />
            <img src="/assets/d.png" className="px-4 mt-5 " />
          </div>

          <div className="bg-gray-900 flex flex-col items-center justify-center h-[15rem] w-[9rem] rounded-xl sm:h-[23rem] sm:w-[16rem] lg:h-[30rem] lg:w-[23rem]">
            <img src="/assets/text7.png" className="sm:h-[8rem]" />

            <img
              src="/assets/computer.png"
              className="px-4 mt-5 sm:h-[10rem]"
            />
          </div>
        </div>

        <div className="flex gap-4 items-end justify-around mt-[1rem]">
          <div className="bg-gray-900 flex flex-col items-center justify-center h-[15rem] w-[9rem] rounded-xl sm:h-[23rem] sm:w-[16rem] lg:h-[30rem] lg:w-[23rem]">
            <img src="/assets/text8.png" className="sm:h-[8rem]" />

            <img src="/assets/b.png" className="px-4 mt-5" />
          </div>

          <div className="bg-gray-900 flex flex-col items-center justify-center h-[17rem] w-[9rem] rounded-xl sm:h-[27rem] sm:w-[16rem]  lg:h-[33rem] lg:w-[23rem]">
            <img src="/assets/text9.png" className="sm:h-[8rem]" />

            <img src="/assets/a.png" className="px-4 mt-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monetization;
