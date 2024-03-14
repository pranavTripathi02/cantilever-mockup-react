import MailSVG from "../assets/mail.svg?react";
import AlertSVG from "../assets/alert.svg?react";
import UserSVG from "../assets/user.svg?react";

function TopBar() {
  return (
    <div className="flex justify-between w-full top-0 items-center py-8">
      <div className="flex flex-col ">
        <h1 className="text-5xl font-bold">Weekly sumup</h1>
        <p className="opacity-50">
          Get summary of your weekly transactions here
        </p>
      </div>
      <div className="flex gap-4 items-center">
        <MailSVG className="stroke-3 fill-black/50 opacity-50 stroke-none" />
        <AlertSVG className="stroke-1 fill-black/50 stroke-none opacity-50" />
        <div className="flex items-center gap-2 text-sm">
          <UserSVG
            className="bg-yellow-500/80 stroke-white/50 rounded-full px-1 m-0 "
            height={40}
            width={40}
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
