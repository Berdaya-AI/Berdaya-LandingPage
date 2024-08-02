import { collaboration } from "@/data";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Collaboration = () => {
  return (
    <div className="w-full h-full">
      <div className="container grid flex-col xl:grid-cols-5 xl:grid-rows-none">
        <div className="xl:col-span-3">
          <h1 className="text-xl md:text-4xl font-medium pb-8">
            Help every business with{" "}
            <span className="font-black">multiple collaboration options.</span>
          </h1>
          <div className="flex flex-col gap-4 pb-8">
            {collaboration.map((collaborations) => (
              <div key={collaborations.id} className="flex gap-4">
                <img
                  src={collaborations.icon}
                  className="flex flex-shrink-0 w-6 h-6 md:w-8 md:h-8"
                  alt={collaborations.alt}
                />
                <p className="grow text-sm text-wrap md:text-xl font-extralight">
                  <span className="font-medium">{collaborations.title}</span>
                  {collaborations.description}
                </p>
              </div>
            ))}
          </div>
          <div className="py-6 border-t-2 border-t-slate-500 ">
            <Link
              href="/book"
              className="flex text-[#0CD464] font-bold gap-4 text-sm md:text-xl"
            >
              <p>Learn more about collaboration</p>
              <MoveRight className="my-auto h-4 xl:h-6" />
            </Link>
          </div>
        </div>
        <div className="flex xl:col-span-2">
          <img
            src="/cubic.png"
            className="w-full h-full object-contain md:object-cover xl:-translate-x-10 xl:-translate-y-10 "
            alt="Shape Cubic"
          />
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
