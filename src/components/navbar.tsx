import Link from "next/link";
import StylingButton from "./styling-button";

export default function Navbar() {
  return (
    <header className="sticky backdrop-opacity-10 top-0 z-50 shadow-sm bg-black-100">
      <div className="flex container h-16 items-center justify-between">
        <Link className="flex items-center gap-2" href="/">
          <img
            src="/berdaya_logo.png"
            className="my-auto w-6"
            alt="Logo Berdaya.AI"
          />
          <img src="/line.png" className="my-auto w-3" alt="Line" />
          <span className="font-bold text-lg text-white">BERDAYA.ai</span>
        </Link>
        <div className="flex gap-8 my-auto">
          <nav className="hidden text-white md:gap-8 md:flex ">
            <Link
              className="font-normal text-xs hover:font-semibold flex my-auto"
              href="#product"
            >
              Products
            </Link>
            <Link
              className="font-normal text-xs hover:font-semibold my-auto"
              href="#integration"
            >
              Integrations
            </Link>
            <Link href="/book">
              <StylingButton
                className="rounded-xl bg-gradient-to-r from-[#00674F] to-[#000000] text-xs hover:saturate-200"
                title="Book a Demo"
                icon="&#x1F86A;"
              />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
