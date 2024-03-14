import PlusSVG from "../assets/plus.svg?react";
import ChevronRSVG from "../assets/chevRight.svg?react";

type TGoals = {
  goal: string;
  date: string;
  amount: string;
  icon: string;
};
function Goals() {
  const goals: TGoals[] = [
    {
      goal: "Holidays",
      date: "12/20/20",
      amount: "550",
      icon: "/mountain.svg",
    },
    {
      goal: "Renovation",
      date: "12/20/20",
      amount: "550",
      icon: "/renovation.svg",
    },
    {
      goal: "Xbox",
      date: "12/20/20",
      amount: "550",
      icon: "/xbox.svg",
    },
  ];
  return (
    <div className="px-4 py-4">
      <div className="flex items-center gap-2">
        <h3 className="font-bold text-xl">Goals</h3>
        <PlusSVG
          className="rounded-full bg-yellow-500"
          height={16}
          width={16}
        />
      </div>
      <div className="relative grid grid-cols-3 auto-cols-auto">
        {goals &&
          goals.map((goal) => (
            <div className="h-[168px] w-[157px] 2xl:h-[200px] 2xl:w-[180px] rounded-3xl px-5 py-4 shadow-xl flex flex-col justify-between">
              <div className="flex flex-col justify-start opacity-60">
                <span className="text-xl font-bold">${goal.amount}</span>
                <span className="text-sm">{goal.date}</span>
              </div>
              <div className="flex flex-col justify-start items-start">
                <img
                  src={goal.icon}
                  height={35}
                  width={35}
                />
                <span className="text-lg">{goal.goal}</span>
              </div>
            </div>
          ))}
        <ChevronRSVG className="absolute top-0 bottom-0 right-0 my-auto cursor-pointer stroke-primary scale-150" />
      </div>
    </div>
  );
}

export default Goals;
