import TrendingUpSVG from "../assets/trend.svg?react";
import CCardSVG from "../assets/cards.svg?react";
import InvoiceSVG from "../assets/invoice.svg?react";
import GoalSVG from "../assets/goals.svg?react";
import SettingsSVG from "../assets/settings.svg?react";
import ListSVG from "../assets/list.svg?react";
import UpArrowSVG from "../assets/arrowUp.svg?react";
import CloudSVG from "../assets/logo/Group 68.svg?react";
import Cloud$SVG from "../assets/logo/Group 128.svg?react";
import CloudUploadSVG from "../assets/cloudUp.svg?react";

function Sidebar() {
  return (
    <aside className="hidden md:w-[250px] fixed h-full top-0 left-0 md:flex flex-col justify-between border-r py-16 items-center px-2 ">
      <div className="flex w-full justify-center">
        <div className="relative">
          <CloudSVG
            height={30}
            width={140}
            className="fill-primary stroke-primary"
          />
          <Cloud$SVG
            height={20}
            width={20}
            className="absolute -top-1 left-7"
          />
        </div>
      </div>
      <div className="flex flex-col space-y-2 capitalize w-4/5 mb-20 items-start">
        <div className="flex gap-4 cursor-pointer text-primary bg-primary/10 w-full rounded px-4 py-2 font-bold">
          <TrendingUpSVG width={30} />
          <span>overview</span>
        </div>
        <div className="flex gap-4 cursor-pointer opacity-50 w-full rounded px-4 py-2">
          <ListSVG width={30} />
          <span>transactions</span>
        </div>
        <div className="flex gap-4 cursor-pointer opacity-50 w-full rounded px-4 py-2">
          <CCardSVG width={30} />
          <span>cards</span>
        </div>
        <div className="flex gap-4 cursor-pointer opacity-50 w-full rounded px-4 py-2">
          <InvoiceSVG width={30} />
          <span>invoices</span>
        </div>
        <div className="flex gap-4 cursor-pointer opacity-50 w-full rounded px-4 py-2">
          <GoalSVG width={30} />
          <span>goals</span>
        </div>
        <div className="flex gap-4 cursor-pointer opacity-50 w-full rounded px-4 py-2">
          <SettingsSVG width={30} />
          <span>settings</span>
        </div>
      </div>
      <div className="flex flex-col space-y-4 items-center text-center">
        <div>
          <CloudUploadSVG
            height={112}
            width={112}
          />
        </div>
        <div className="px-12 text-xs">
          Give your money awesome space in cloud
        </div>
        <button className="flex gap-1 p-4 py-3 rounded-xl justify-center bg-yellow-400 items-center">
          <span>Upgrade to premium</span>
          <UpArrowSVG
            height={16}
            width={16}
          />
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
