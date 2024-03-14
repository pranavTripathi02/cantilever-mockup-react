import ChevRightSVG from "../assets/chevRight.svg?react";
function GetLoan() {
  return (
    <a className="text-xl flex items-end w-[160px] rounded-2xl shadow-2xl bg-red-600 text-white relative overflow-hidden">
      <span className="w-full h-full absolute -left-2 bg-[url('/greatLoans.png')] " />
      <span className="z-10 mt-auto mb-4 ms-4 me-8">
        Get great loan!
        <span>
          <ChevRightSVG
            className="inline-block my-auto"
            height={18}
          />
        </span>
      </span>
    </a>
  );
}

export default GetLoan;
