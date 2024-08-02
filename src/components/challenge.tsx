import React from "react";
import StylingButton from "./styling-button";
import Link from "next/link";

const Challenge = () => {
  return (
    <section
      id="integration"
      className="w-full h-full py-12 md:py-24 2xl:py-48 place-content-center text-center justify-center"
    >
      <div className="container flex flex-col gap-4 lg:w-[75%]">
        <h1 className="font-bold text-white text-balance text-2xl md:text-4xl">
          The Challenge,{" "}
          <span className="text-[#0CD464] font-black">to Scale</span>
        </h1>
        <p className="text-white text-balance pb-4 text-xs md:text-base xl:text-xl">
          Businesses face challenges in upgrading technological infrastructure
          and skills, balancing multiple operational demands, and navigating
          complex regulatory requirements.
        </p>
        <div className="grid pb-6 px-4 gap-8 grid-rows-3 md:grid-cols-3 md:grid-rows-none md:px-0">
          <div className="p-8 border-2 border-[#424242] shadow-xl rounded-xl">
            <p className="text-balance text-sm xl:text-lg 2xl:text-xl">
              <span className="text-[#0CD464]">Transforming </span>their
              operations<span className="text-[#0CD464]"> innovatively</span>
            </p>
          </div>
          <div className="p-8 border-2 border-[#424242] shadow-xl rounded-xl">
            <p className="text-balance text-sm xl:text-lg 2xl:text-xl">
              <span className="text-[#0CD464]">Seamlessly integrating </span>new
              technologies
            </p>
          </div>
          <div className="p-8 border-2 border-[#424242] shadow-xl rounded-xl">
            <p className="text-balance text-sm xl:text-lg 2xl:text-xl">
              While
              <span className="text-[#0CD464]"> maintaining reliable </span>
              infrastructure
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <Link href="/book">
            <StylingButton
              className="rounded-xl bg-gradient-to-r from-[#00674F] to-[#000000] hover:saturate-200"
              iconClassName="my-auto h-4"
              title="Get Started"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
