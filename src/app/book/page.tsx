import FormBook from "@/components/form-book";
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
              <FormBook />
            </div>
            <div className="flex flex-col gap-4 border-2 border-[#424242] rounded-2xl p-8">
              <div className="flex h-[35%] justify-center">
                <img src="/shape_2.png" alt="Shape" />
              </div>
              <Link className="flex items-center gap-2" href="/">
                <span className="font-bold text-lg md:text-2xl">
                  Berdaya.ai
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
