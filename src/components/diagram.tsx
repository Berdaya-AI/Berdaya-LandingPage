import React from "react";

const Diagram = () => {
  return (
    <div className="w-full h-full py-16">
      <div className="container grid flex-col gap-4 md:gap-8 xl:grid-cols-2 xl:grid-rows-none">
        <div className="flex">
          <img
            src="/diagram.png"
            className="w-full object-contain p-4 xl:pb-12"
            alt="Diagram"
          />
        </div>
        <div className="flex flex-col gap-4 md:gap-8">
          <h1 className="font-medium text-xl text-center md:text-4xl">
            <span className="font-black">Why </span>
            we stand out among others
          </h1>
          <div className="grid grid-flow-row text-center text-[#0CD464] px-8 gap-4 md:px-16 md:gap-8">
            <div className="p-8 border-2 border-[#424242] shadow-xl rounded-xl">
              <p className="text-balance text-sm xl:text-lg 2xl:text-xl">
                Transform innovatively
              </p>
            </div>
            <div className="p-8 border-2 border-[#424242] shadow-xl rounded-xl">
              <p className="text-balance text-sm xl:text-lg 2xl:text-xl">
                Integrate seamlessly
              </p>
            </div>
            <div className="p-8 border-2 border-[#424242] shadow-xl rounded-xl">
              <p className="text-balance text-sm xl:text-lg 2xl:text-xl">
                Maintain reliability
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diagram;
