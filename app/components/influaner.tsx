import React from "react";

const Influaner = () => {
  return (
 <div className="overflow-y-hidden flex flex-col gap-[2rem] sm:gap-[3rem] md:gap-[4rem] mt-5">
      <div className="flex items-center justify-center">
        <img
          src="/assets/OurInfluencers.png"
          className="sm:h-[2.5rem] md:h-[3.5rem]"
        />
      </div>

      <div className="flex items-center justify-between">
        <img
          src="/assets/janat.png"
          className="rounded-full h-[5rem] sm:h-[10rem] md:h-[13rem]"
        />
        <img
          src="/assets/boy.png"
          className="rounded-full h-[5rem] sm:h-[10rem] md:h-[13rem]"
        />
        <img
          src="/assets/Minka.png"
          className="rounded-full h-[5rem] sm:h-[10rem] md:h-[13rem]"
        />
        <img
          src="/assets/influancer3.png"
          className="hidden rounded-full h-[5rem] sm:h-[10rem] md:h-[13rem] xl:visible xl:block"
        />
      </div>
    </div>
  );
};

export default Influaner;
