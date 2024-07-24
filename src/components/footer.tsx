import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black-100 text-white pt-4">
      <div className="container">
        <div className="h-1 rounded-full bg-gradient-to-r from-[#00674F] to-[#0CD464]"></div>
        <div className="flex flex-col gap-4 py-4 md:justify-between md:flex-row">
          <p className="text-xs font-medium my-auto">
            © 2024 BERDAYA. All rights reserved.
          </p>
          <div className="flex flex-col gap-4 md:flex-row">
            <p className="text-xs font-medium my-auto">Privacy Policy</p>
            <div className="flex gap-4 my-auto">
              <Link href="https://www.linkedin.com/company/berdaya-ai">
                <img
                  src="/linkedin.png"
                  className="w-4 h-4 md:w-6 md:h-6"
                  alt="Icon LinkedIn"
                />
              </Link>
              <Link href="https://www.instagram.com/berdaya.ai">
                <img
                  src="/instagram.png"
                  className="w-4 h-4 md:w-6 md:h-6"
                  alt="Icon Instagram"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
