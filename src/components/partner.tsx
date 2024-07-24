import React from "react";

const Partner = () => {
  return (
    <div className="w-full h-full place-content-center py-16">
      <div className="container flex flex-col gap-8 md:gap-10">
        <p className="font-medium text-xs md:text-base xl:text-lg text-center">
          Trusted by the world&apos;s most ambitious teams.
        </p>
        <div className="flex h-4 gap-4 md:h-6 md:gap-8 xl:h-8 xl:gap-16 justify-center">
          <img src="/zoom.png" className=" h-full" alt="Logo Zoom" />
          <img
            src="/creative_cloud.png"
            className=" h-full"
            alt="Logo Creative Cloud"
          />
          <img src="/netflix.png" className=" h-full" alt="Logo Netflix" />
          <img src="/discord.png" className=" h-full" alt="Logo Discord" />
          <img src="/figma.png" className=" h-full" alt="Logo Figma" />
          <img src="/paypal.png" className=" h-full" alt="Logo Paypal" />
        </div>
      </div>
    </div>
  );
};

export default Partner;
