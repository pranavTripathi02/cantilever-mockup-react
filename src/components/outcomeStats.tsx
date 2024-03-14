type TData = {
  name: string;
  value: number;
  color: string;
  icon: string;
};

function OutcomeStats() {
  const data: TData[] = [
    {
      name: "Shopping",
      value: 52,
      color: "orange",
      icon: "/cart.svg",
    },
    {
      name: "Electronics",
      value: 21,
      color: "green",
      icon: "/truck.svg",
    },
    {
      name: "Travels",
      value: 74,
      color: "blue",
      icon: "/jam_plane.svg",
    },
  ];
  return (
    <div className="px-4 py-4">
      <h3 className="font-bold text-xl">Outcome Statistics</h3>
      <div>
        {data &&
          data.map((stat) => {
            const iconBgCol = `text-${stat.color}-400/20`;
            const progBarClass = `[&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-${stat.color}-400 [&::-moz-progress-bar]:bg-${stat.color}-400`;
            return (
              <div className="flex gap-2 items-start py-2">
                {/* icon */}

                <img
                  src={stat.icon}
                  alt={stat.name}
                  className={`p-2 rounded-md ${iconBgCol}`}
                />
                {/* progress */}
                <div className="flex w-full flex-col">
                  <div className="flex gap-2 items-center">
                    <progress
                      className={`w-full h-3 ${progBarClass} rounded-full`}
                      value={stat.value}
                      // bg-color={stat.color}
                      max={100}
                    />
                    {/* per cent */}
                    <span className="text-xl">{stat.value}%</span>
                  </div>
                  <span className="text-sm opacity-50">{stat.name}</span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default OutcomeStats;
