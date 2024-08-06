import React from "react";
import Link from "next/link";
import StylingButton from "@/components/styling-button";

const Hero = () => {
  return (
    <div className="w-full py-48 md:h-[50%] lg:h-dvh place-content-center text-center justify-center">
      <div className="container flex flex-col gap-4 lg:w-[75%]">
        <h1 className="font-bold text-white text-balance text-4xl md:text-6xl">
          Scale <span className="text-[#0CD464]">result</span>, not effort.
        </h1>
        <p className="text-white text-balance pb-4 text-sm md:text-lg xl:text-2xl">
          We empower businesses to scale using AI solutions, uniquely tailored
          to drive your growth and efficiency.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/book">
            <StylingButton
              className="rounded-xl bg-gradient-to-r from-[#00674F] to-[#000000] hover:saturate-200"
              iconClassName="my-auto h-4"
              title="Get Started"
            />
          </Link>
          <Link href="/book">
            <StylingButton
              className="rounded-xl bg-transparent hover:bg-slate-800 hover:border hover:border-slate-500"
              iconClassName="my-auto h-4"
              title="Build AI"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
