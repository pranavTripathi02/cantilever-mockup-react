import PlusSVG from "../assets/plus.svg?react";
import ChevRightSVG from "../assets/chevRight.svg?react";

type TData = {
  user: string;
  userIcon: string;
};
function NewTxn() {
  const users: TData[] = [
    {
      user: "Ann",
      userIcon: "/annpfp.jpg",
    },
    {
      user: "Monica",
      userIcon: "/monicapfp.jpg",
    },
    {
      user: "John",
      userIcon: "/johnpfp.jpg",
    },
    {
      user: "Mike",
      userIcon: "/mikepfp.jpg",
    },
    {
      user: "Mia",
      userIcon: "/miapfp.jpg",
    },
  ];
  return (
    <div className="shadow-xl rounded-2xl px-4 py-4 w-[340px] 2xl:w-auto">
      <h3 className="text-xl font-bold">New Transaction</h3>
      <div className="flex flex-col gap-4">
        <div className="py-2 flex justify-evenly gap-4 overflow-x-auto">
          {users &&
            users.map((user) => (
              <button
                key={user.user}
                className="flex flex-col gap-1"
              >
                {/* <div dangerouslySetInnerHTML={{ __html: user.userIcon }} /> */}
                <img
                  src={user.userIcon}
                  alt="mia"
                  height={42}
                  width={42}
                  className="rounded-full object-cover w-[42px] h-[42px]"
                />
                <div className="self-center text-xs">{user.user}</div>
              </button>
            ))}
          <div className="flex flex-col gap-1 justify-between">
            <button className="self-center my-auto">
              <PlusSVG
                className="rounded-full bg-yellow-500 p-[1px] justify-self-center"
                height={24}
                width={24}
              />
            </button>
            <div className="self-center w-12">
              <span className="text-xs">Add new</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1.2fr_1fr] gap-2">
          <div className="relative">
            <input
              type="text"
              className="p-2 w-full rounded-[8px] outline outline-1 outline-primary"
              placeholder="0"
            />
            <span className="absolute right-2 top-2 bottom-0 opacity-50">
              $
            </span>
          </div>
          <button className="flex px-2 items-center rounded-xl bg-yellow-500 justify-center text-xs">
            <span>Send the transfer</span>
            <ChevRightSVG
              height={14}
              className="inline-block"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewTxn;
