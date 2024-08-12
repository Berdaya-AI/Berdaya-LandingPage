import StylingButton from "@/components/styling-button";
import { Input } from "@/components/ui/input";
import React from "react";

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
            <div className="flex flex-col place-content-center gap-2 md:gap-4 pe-4 md:pe-24 xl:pe-48 ">
              <h1 className="text-wrap text-xs md:text-2xl xl:text-4xl 2xl:text-5xl">
                Scale your bussines now.
              </h1>
              <div className="gap-2 flex flex-col md:grid md:grid-cols-5 md:grid-rows-none md:gap-5">
                <div className="md:col-span-3">
                  <Input
                    className="bg-white/50 border-0 rounded-full text-white placeholder:text-white text-[8px] h-6 px-2 md:px-4 md:h-full md:text-xs xl:text-base"
                    type="email"
                    placeholder="Enter your work email"
                  />
                </div>
                <div className="flex md:col-span-2">
                  <StylingButton
                    className="rounded-full border-2 border-slate-300 bg-black-100 hover:saturate-200 text-[8px] h-6 w-20 md:w-32 xl:w-full md:h-full md:text-xs xl:text-base"
                    iconClassName="my-auto h-2 md:h-4"
                    title="Get in touch"
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
