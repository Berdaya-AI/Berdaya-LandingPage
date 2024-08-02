import StylingButton from "@/components/styling-button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { budget, weHelp } from "@/data";
import Link from "next/link";
import React from "react";

const Book = () => {
  return (
    <main className="flex min-h-screen py-12 flex-col place-content-center bg-black-100 text-white">
      <section className="max-w-full w-full">
        <div className="container">
          <div className="grid lg:grid-cols-2 lg:grid-rows-none gap-4">
            <div className="flex flex-col gap-4 border-2 border-[#424242] rounded-2xl p-8 text-white/80">
              <h1 className="font-bold text-2xl md:text-[32px]">
                Let&apos;s scale together
              </h1>
              <p className="pb-2 text-base md:text-xl font-medium">
                Unlock your business potential with AI-Powered growth.
              </p>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4 ">
                  <Input
                    className="bg-black-100 border-[#424242] placeholder:text-[#979797]"
                    placeholder="First Name*"
                  />
                  <Input
                    className="bg-black-100 border-[#424242] placeholder:text-[#979797]"
                    placeholder="Last Name*"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    className="bg-black-100 border-[#424242] placeholder:text-[#979797]"
                    placeholder="Company Name*"
                  />
                  <Input
                    className="bg-black-100 border-[#424242] placeholder:text-[#979797]"
                    placeholder="Job Title*"
                  />
                </div>
                <Input
                  type="email"
                  className="bg-black-100 border-[#424242] placeholder:text-[#979797]"
                  placeholder="Work Email*"
                />
              </div>
              <RadioGroup defaultValue="option-one" className="py-2 gap-y-2 ">
                <p className="text-sm md:text-lg">Project Budget </p>
                {budget.map((budgets) => (
                  <div key={budgets.id} className="flex items-center space-x-2">
                    <RadioGroupItem
                      className="border-[#424242]"
                      value={budgets.content}
                      id={budgets.content}
                    />
                    <Label
                      htmlFor={budgets.content}
                      className="text-[0.75rem] md:text-[15px]"
                    >
                      {budgets.content}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              <div className="flex flex-col gap-y-2 pb-2">
                <p className="text-sm md:text-lg">
                  What can we help with? Select all that apply*
                </p>
                {weHelp.map((helps) => (
                  <div
                    key={helps.id}
                    className="flex items-start md:items-center space-x-2"
                  >
                    <Checkbox id={helps.content} className="border-[#424242]" />
                    <label
                      htmlFor={helps.content}
                      className="text-[0.75rem] md:text-[15px] font-medium text-wrap"
                    >
                      {helps.content}
                    </label>
                  </div>
                ))}
              </div>
              <Textarea
                className="h-28 text-xs md:text-sm bg-black-100 border-[#424242] placeholder:text-[#979797] mb-2"
                placeholder="Please describe your project in detail (detail type, volume, timeline, budget, etc.)*"
              />
              <StylingButton
                className="rounded-xl text-white bg-gradient-to-r from-[#00674F] to-[#000000] hover:saturate-200 mb-4"
                iconClassName="my-auto h-4"
                title="Submit"
              />
              <div className="flex space-x-4 ">
                <Checkbox id="terms" className="border-[#424242]" />
                <label
                  htmlFor="terms"
                  className="text-[0.75rem] md:text-[15px] font-medium text-wrap leading-5"
                >
                  I agree to receive communications from Berdaya, and I
                  understand Berdaya will process my personal information in
                  accordance with Berdaya&apos;s Privacy Policy.*
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-2 border-[#424242] rounded-2xl p-8">
              <div className="flex h-[35%] justify-center">
                <img src="/shape_2.png" alt="Shape" />
              </div>
              <Link className="flex items-center gap-2" href="/">
                <span className="font-bold text-lg md:text-2xl">
                  BERDAYA.ai
                </span>
              </Link>
              <p className="pb-8 text-base md:text-xl">
                &quot;We helping visionary businesses transform innovatively,
                integrate seamlessly, while maintain reliable
                infrastructure.&quot;
              </p>
              <div className="flex flex-col pb-4 text-base md:text-xl">
                <p>
                  Fadl Lul Hakim Ihsan{" "}
                  <span className="text-[5px] md:text-[10px] text-white/55">
                    (McCombs School of Business, UTA)
                  </span>
                </p>
                <p className="text-xs md:text-base text-white/55">
                  Chief Executive Officer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Book;
