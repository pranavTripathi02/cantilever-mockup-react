import TrendingUpSVG from "../assets/trendingUp.svg?react";
import CCardSVG from "../assets/cCard.svg?react";
import InvoiceSVG from "../assets/invoices.svg?react";
import GoalSVG from "../assets/awards.svg?react";
import SettingsSVG from "../assets/settings.svg?react";
import ListSVG from "../assets/list.svg?react";
import UpArrowSVG from "../assets/arrowUp.svg?react";
import CloudSVG from "../assets/cloud.svg?react";
import CloudUploadSVG from "../assets/cloudUpload.svg?react";

function Sidebar() {
  return (
    <aside className="hidden md:w-80 h-screen md:flex flex-col justify-between border-r py-16 items-center px-2 ">
      <div className="flex w-full justify-start items-center gap-2 px-5">
        <div className="w-12 h-12">
          <CloudSVG
            height={48}
            width={48}
            className="fill-primary stroke-primary"
          />
        </div>
        <h2 className="text-2xl font-bold">cloudcash</h2>
      </div>
      <div className="flex flex-col space-y-2 capitalize w-4/5 mb-20 items-start">
        <div className="flex gap-4 cursor-pointer text-primary bg-primary/20 w-full rounded px-4 py-2 font-bold">
          <TrendingUpSVG />
          <span>overview</span>
        </div>
        <div className="flex gap-4 cursor-pointer opacity-50 w-full rounded px-4 py-2">
          <ListSVG />
          <span>transactions</span>
        </div>
        <div className="flex gap-4 cursor-pointer opacity-50 w-full rounded px-4 py-2">
          <CCardSVG />
          <span>cards</span>
        </div>
        <div className="flex gap-4 cursor-pointer opacity-50 w-full rounded px-4 py-2">
          <InvoiceSVG />
          <span>invoices</span>
        </div>
        <div className="flex gap-4 cursor-pointer opacity-50 w-full rounded px-4 py-2">
          <GoalSVG />
          <span>goals</span>
        </div>
        <div className="flex gap-4 cursor-pointer opacity-50 w-full rounded px-4 py-2">
          <SettingsSVG />
          <span>settings</span>
        </div>
      </div>
      <div className="flex flex-col space-y-4 items-center text-center">
        <div>
          <CloudUploadSVG
            height={72}
            width={72}
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
