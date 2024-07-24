import React from "react";
import { Input } from "./ui/input";
import StylingButton from "./styling-button";

const Started = () => {
  return (
    <div className="w-full h-full py-8 md:py-16 xl:py-24">
      <div className="container">
        <div className="rounded-xl bg-gradient-to-r from-[#00674F] to-[#000000]">
          <div className="grid grid-cols-2">
            <div className="flex ">
              <img
                src="/shape_1.png"
                className="w-[75%] object-contain my-auto mx-auto"
                alt="Shape"
              />
            </div>
            <div className="flex flex-col place-content-center gap-2 md:gap-4 pe-6 md:pe-24 xl:pe-48 ">
              <h1 className="text-wrap text-xs md:text-2xl xl:text-4xl 2xl:text-5xl">
                Scale your bussines now.
              </h1>
              <div className="grid grid-flow-row gap-2 md:grid-cols-5 md:grid-rows-none md:gap-5">
                <div className="flex flex-col md:col-span-3">
                  <Input
                    className="bg-white/50 border-0 rounded-full text-white placeholder:text-white text-[0.5rem] h-4 px-2 md:px-4 md:h-full md:text-xs xl:text-base"
                    type="email"
                    placeholder="Enter your work email"
                  />
                </div>
                <div className="flex flex-col md:col-span-2">
                  <StylingButton
                    className="rounded-full border-2 border-slate-300 bg-black-100 hover:saturate-200 text-[0.5rem] h-4 w-20 md:w-32 xl:w-full md:h-full md:text-xs xl:text-base"
                    title="Get in touch"
                    icon="&#x1F86A;"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Started;
