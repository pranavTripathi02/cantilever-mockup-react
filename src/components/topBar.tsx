import MailSVG from "../assets/mail.svg?react";
import BellSVG from "../assets/bell.svg?react";
import AndrewSVG from "../assets/andrew.svg?react";

function TopBar() {
  return (
    <div className="flex justify-between w-full top-0 items-center py-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl font-bold">Weekly sumup</h1>
        <p className="opacity-50">
          Get summary of your weekly transactions here
        </p>
      </div>
      <div className="flex gap-4 items-center">
        <MailSVG
          width={24}
          // className="stroke-3 fill-black/50 opacity-50 stroke-none"
        />
        <BellSVG
          width={24}
          // className="stroke-1 fill-black/50 stroke-none opacity-50"
        />
        <div className="flex items-center gap-2 text-sm">
          <AndrewSVG
            className="bg-[#FFC145] rounded-full"
            height={35}
            width={35}
          />
          <div className="flex flex-col">
            <span>Andrew</span>
            <span className="opacity-50">Admin account</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
