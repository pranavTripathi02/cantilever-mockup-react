import CCardSVG from "../assets/cCard.svg?react";
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
    <div className="shadow-xl rounded-2xl px-4 py-4">
      <h3 className="font-bold text-2xl mb-4">Cards</h3>
      {/* card */}
      <div className="flex gap-8 justify-between px-4">
        <div className="border-r">
          <CCardSVG
            height={250}
            width={350}
            className="fill-primary stroke-white stroke-1"
          />
          {/* progress bar */}
          <div className="flex flex-col justify-center px-8 w-[350px] text-sm">
            <progress
              className="rounded-full h-2"
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
        <div className="flex flex-col gap-4">
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
              $ <span className="text-lg">{data.currentBalance}</span>
            </span>
            <span className="opacity-50">Outcome</span>
          </div>
          <div className="flex flex-col text-right opacity-50">
            <span>Deactivate Card</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
