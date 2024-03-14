type TData = {
  name: string;
  value: number;
  color: string;
};

function OutcomeStats() {
  const data: TData[] = [
    {
      name: "Shopping",
      value: 52,
      color:
        "[&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-orange-400 [&::-moz-progress-bar]:bg-orange-400",
    },
    {
      name: "Electronics",
      value: 21,
      color:
        "[&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-green-400 [&::-moz-progress-bar]:bg-green-400",
    },
    {
      name: "Travels",
      value: 74,
      color:
        "[&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-blue-400 [&::-moz-progress-bar]:bg-blue-400",
    },
  ];
  return (
    <div className="px-4 py-4">
      <h3 className="font-bold text-xl">Outcome Statistics</h3>
      <div>
        {data &&
          data.map((stat) => (
            <div className="flex gap-2 items-start py-2">
              {/* icon */}
              {/* progress */}
              <div className="flex w-full flex-col">
                <div className="flex gap-2 items-center">
                  <progress
                    className={`w-full h-3 ${stat.color} rounded-full`}
                    value={stat.value}
                    // bg-color={stat.color}
                    max={100}
                  />
                  {/* per cent */}
                  <span className="text-2xl">{stat.value}%</span>
                </div>
                <span className="text-sm opacity-50">{stat.name}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default OutcomeStats;
