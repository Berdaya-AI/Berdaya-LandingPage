import Link from "next/link";
import StylingButton from "./styling-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Blocks, LoaderPinwheel, Menu } from "lucide-react";

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
          <span className="font-bold text-lg text-white">Berdaya.ai</span>
        </Link>
        <div className="flex gap-8 my-auto">
          <nav className="hidden text-white md:gap-8 md:flex ">
            <Link
              className="font-normal text-xs hover:font-semibold flex my-auto"
              href="/#product"
            >
              Products
            </Link>
            <Link
              className="font-normal text-xs hover:font-semibold my-auto"
              href="/#integration"
            >
              Integrations
            </Link>
            <Link href="/book">
              <StylingButton
                className="rounded-xl bg-gradient-to-r from-[#00674F] to-[#000000] text-xs hover:saturate-200"
                iconClassName="my-auto h-4"
                title="Book a Demo"
              />
            </Link>
          </nav>
          <div className="flex md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Menu className="text-white" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-screen bg-black-100 text-white border-[#424242] rounded-xl p-4 md:mx-4">
                <DropdownMenuGroup>
                  <DropdownMenuLabel className="text-base">
                    Menu
                  </DropdownMenuLabel>
                  <Link href="/#product">
                    <DropdownMenuItem>
                      <LoaderPinwheel className="mr-2 h-5 w-5" />
                      <span className="text-base">Products</span>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/#integration">
                    <DropdownMenuItem>
                      <Blocks className="mr-2 h-5 w-5" />
                      <span className="text-base">Integration</span>
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuGroup>
                <DropdownMenuSeparator className="bg-[#424242]" />
                <Link href="/book">
                  <DropdownMenuItem className="focus:bg-black-100">
                    <StylingButton
                      className="rounded-xl bg-gradient-to-r from-[#00674F] to-[#000000] text-xs hover:saturate-200"
                      iconClassName="my-auto h-4"
                      title="Book a Demo"
                    />
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
