import ChevRightSVG from "../assets/chevRight.svg?react";
function GetLoan() {
  return (
    <a className="text-xl p-4 flex items-end pt-auto my-auto mt-auto w-full h-full rounded-2xl shadow-2xl bg-red-600 text-white">
      <span className="w-2/3">
        Get great loan!
        <span className="inline-block">
          <ChevRightSVG height={14} />
        </span>
      </span>
    </a>
  );
}

export default GetLoan;
