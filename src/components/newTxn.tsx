import PlusSVG from "../assets/plus.svg?react";
import ChevRightSVG from "../assets/chevRight.svg?react";
import User from "../assets/user.svg";
type TData = {
  user: string;
  userIcon: string;
};
function NewTxn() {
  const users: TData[] = [
    {
      user: "Ann",
      userIcon: "",
    },
    {
      user: "Monica",
      userIcon: "",
    },
    {
      user: "John",
      userIcon: "",
    },
    {
      user: "Mike",
      userIcon: "",
    },
    {
      user: "Mia",
      userIcon: "",
    },
  ];
  return (
    <div className="shadow-xl rounded-2xl px-4 py-4">
      <h3 className="text-xl font-bold">New Transaction</h3>
      <div className="flex flex-col gap-4">
        <div className="py-2 flex justify-evenly gap-4 overflow-x-auto">
          {users &&
            users.map((user) => (
              <div className="flex flex-col gap-1">
                {/* <div dangerouslySetInnerHTML={{ __html: user.userIcon }} /> */}
                <img
                  src={User}
                  alt="userIcon"
                  height={48}
                  width={48}
                  className="bg-yellow-500 opacity-70 rounded-full"
                />
                <div className="self-center">{user.user}</div>
              </div>
            ))}
          <div className="flex flex-col gap-1 justify-between">
            <div className="self-center my-auto">
              <PlusSVG
                className="rounded-full bg-yellow-500 p-[1px] stroke-black justify-self-center"
                height={24}
                width={24}
              />
            </div>
            <div className="self-center">Add new</div>
          </div>
        </div>
        <div className="flex justify-evenly gap-2">
          <input
            type="text"
            className="p-2 rounded-xl outline outline-1 outline-primary"
            placeholder="0"
          />
          <button className="flex px-2 items-center rounded-xl bg-yellow-500">
            <span>Send the transfer</span>
            <ChevRightSVG height={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewTxn;
