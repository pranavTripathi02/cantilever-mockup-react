import CCSVG from "../assets/cc.svg?react";
import ChevRSVG from "../assets/chevRight.svg?react";
import ChevLSVG from "../assets/chevLeft.svg?react";

type TData = {
  currentBalance: number;
  income: number;
  outcome: number;
  payLimit: number;
};
function Cards() {
  const data: TData = {
    currentBalance: 2850.75,
    income: 1500.5,
    outcome: 350.75,
    payLimit: 4000,
  };
  // todo card deactivate
  return (
    <div className="shadow-xl rounded-2xl px-4 pt-8">
      <h3 className="font-bold text-xl mb-4">Cards</h3>
      {/* card */}
      <div className="flex gap-8 justify-between pb-4">
        <div className="border-r">
          <div className="flex relative flex-center">
            <ChevLSVG className="absolute scale-150 z-10 stroke-primary bottom-8 top-0 left-0 my-auto" />
            <CCSVG />
            <ChevRSVG className="absolute z-10 scale-150 stroke-primary bottom-8 top-0 right-0 my-auto" />
          </div>
          {/* progress bar */}
          <div className="flex flex-col gap-1 justify-center px-8 w-full text-sm">
            <progress
              className="rounded-full h-2.5 [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-primary [&::-moz-progress-bar]:bg-primary w-full"
              value={30}
              max={100}
            />
            <div className="flex justify-between">
              <span className="opacity-50">Weekly payment limit</span>
              <span>
                ${data.outcome}/${data.payLimit}
              </span>
            </div>
          </div>
        </div>
        {/* balance/income/outcome/deactivate */}
        <div className="flex flex-col gap-4 justify-between">
          <div className="flex flex-col text-right">
            <span className="text-md text-primary font-bold">
              $ <span className="text-4xl">{data.currentBalance}</span>
            </span>
            <span className="opacity-50">Current balance</span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-green-600 font-bold">
              $ <span className="text-2xl">{data.income}</span>
            </span>
            <span className="opacity-50">Income</span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-red-600 font-bold">
              $ <span className="text-lg">{data.outcome}</span>
            </span>
            <span className="opacity-50">Outcome</span>
          </div>
          <div className="flex flex-col text-right opacity-50">
            <div className="relative ms-auto">
              <input
                type="checkbox"
                checked={false}
                className="sr-only"
              />
              <div className="block h-7 w-14 rounded-full bg-gray-300"></div>
              <div className="dot absolute left-0 top-0 h-7 w-7 rounded-full bg-gray-400 transition"></div>
            </div>
            <span>Deactivate card</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
