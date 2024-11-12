const Explore = () => {
  return (
    <div>
      {/* navbar */}
      <div className="w-[90vw] h-[10vh] bg-black rounded-lg mx-auto my-4 flex items-start justify-between px-3 py-3 sm:flex sm:items-center sm:justify-between md:rounded-lg">
        <div>
          <img src="/assets/travel.png" className="md:h-[2.5rem]" />
        </div>
        <div>
          <img src="/assets/digitalTravel.png" className="md:h-[2rem]" />
        </div>
        <div>
          <img src="/assets/brandtr.png" className="md:h-[2rem]" />
        </div>
        <div>
          <img src="/assets/merchtr.png" className="md:h-[2rem]" />
        </div>
      </div>

      {/* end of nav bar  all done */}
      <div
    
        className="flex flex-col items-center justify-center bg-cover bg-no-repeat h-[10rem] mx-5 rounded-xl pd:w-[22rem] lg:rounded-lg xl:rounded-lg lg:mt-5 sm:w-[95vw] sm:h-[18rem] md:w-full lg:h-[28rem] xl:h-[30rem] 2xl:h-[45rem] lg:w-[90vw] lg:mx-auto xl:mx-auto 2xl:mx-auto"
        style={{ backgroundImage: "url('/assets/mountain.png')" }}
      >
        <div className="flex flex-col items-center">
          <img
            src="/assets/TRAVEL (1).png"
            className="sm:h-[3rem] sm:mt-6 mb-[1.5rem] md:my-[3rem] md:h-[4rem] lg:h-[6rem] xl:h-[5rem] xl:mt-[8rem]"
          />
          <img
            src="/assets/text.png"
            className="sm:h-[5rem] md:h-[5rem] lg:h-[7rem] xl:h-[8rem] lg:mb-[2.3rem] xl:mb-[7.5rem] 2xl:h-[10rem]"
          />
        </div>
      </div>

      {/* Explore our curated tower ltinerraries */}
      <div className="mt-10">
        <div className="">
          <img
            src="/assets/text2.png"
            className="w-[90vw] mx-auto my-5 md:w-[65vw] lg:w-[70vw]"
          />
        </div>

        <div className="flex gap-2 mx-3 sm:px-5 sm:py-8 md:gap-8 xl:gap-14 ">
          <div
            className="h-[16rem] w-[10rem] bg-contain bg-no-repeat -z-30 rounded-xl sm:h-[30rem] sm:w-[20rem] md:h-[35rem] xl:mx-auto"
            style={{ backgroundImage: "url('/assets/darjeeling.png')" }}
          >
            <img
              src="/assets/text3.png"
              className="mt-[11rem] w-[18rem] sm:mt-[22rem] md:mt-[25rem] md:ml-[2rem]"
            />
          </div>

          <div
            className="h-[16rem] w-[10rem] bg-contain bg-no-repeat -z-30 rounded-xl sm:h-[30rem] sm:w-[20rem] md:h-[35rem] xl:mx-auto"
            style={{ backgroundImage: "url('/assets/green.png')" }}
          >
            
          </div>

          <div
            className="hidden lg:block h-[16rem] w-[10rem] bg-contain bg-no-repeat -z-30 rounded-xl sm:h-[30rem] sm:w-[20rem] md:h-[35rem] xl:mx-auto"
            style={{ backgroundImage: "url('/assets/gate.png')" }}
          >
           
          </div>

          <div
            className="hidden 2xl:block h-[16rem] w-[10rem] bg-contain bg-no-repeat -z-30 rounded-xl sm:h-[30rem] sm:w-[20rem] md:h-[35rem] "
            style={{ backgroundImage: "url('/assets/darjeeling.png')" }}
          >
            <img
              src="/assets/text3.png"
              className="mt-[11rem] w-[18rem] sm:mt-[22rem] md:mt-[25rem] md:ml-[2rem]"
            />
          </div>
        </div>
      </div>

      {/* how to list  */}
    </div>
  );
};

export default Explore;
