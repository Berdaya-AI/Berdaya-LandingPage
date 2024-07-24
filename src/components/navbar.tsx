import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Brain,
  ChevronDown,
  MessageCircleCode,
  MessageSquareText,
  MessagesSquare,
} from "lucide-react";
import StylingButton from "./styling-button";

export default function Navbar() {
  return (
    <header className="sticky backdrop-opacity-10 top-0 z-50 shadow-sm bg-black-100">
      <div className="flex container h-16 items-center justify-between">
        <Link className="flex items-center gap-2" href="/">
          <img src="/berdaya_logo.png" className="my-auto w-6" alt="" />
          <img src="/line.png" className="my-auto w-3" alt="" />
          <span className="font-bold text-lg text-white">BERDAYA.ai</span>
        </Link>
        <div className="flex gap-8 my-auto">
          <nav className="hidden text-white md:gap-8 md:flex ">
            {/* <DropdownMenu>
              <DropdownMenuTrigger className="checked:border-0">
                <div className="flex gap-1 group"> */}
            <Link
              className="font-normal text-xs hover:font-semibold flex my-auto"
              href="#product"
            >
              Products
            </Link>
            {/* <ChevronDown className="w-4 h-4 mt-auto group-hover:w-4 group-hover:h-4" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                forceMount
                className="bg-black-100 text-xs text-white border-slate-600 "
              >
                <DropdownMenuLabel className="flex ">
                  <span className="grow">All Product & Services</span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-slate-600" />
                <DropdownMenuItem>
                  <MessageSquareText className="mr-2 w-4 h-4" />
                  <span>Chatbot-AI</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessagesSquare className="mr-2 w-4 h-4" />
                  <span>CS-Bot with AI</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageCircleCode className="mr-2 w-4 h-4" />
                  <span>WA Bot Integrated with AI</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}
            <Link
              className="font-normal text-xs hover:font-semibold my-auto"
              href="#integration"
            >
              Integrations
            </Link>
            {/* <Link
              className="font-normal text-xs hover:font-semibold my-auto"
              href="#"
            >
              Resources
            </Link> */}
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
