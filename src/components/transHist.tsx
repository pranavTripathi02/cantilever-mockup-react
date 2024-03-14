import CartSVG from "../assets/cart.svg?react";
type TData = {
  icon: string;
  receiver: string;
  type: string;
  date: string;
  amount: number;
};

function TransHist() {
  const data: TData[] = [
    {
      icon: "<CartSVG/>",
      receiver: "Tesco Market",
      type: "Shopping",
      date: "13 Dec 2020",
      amount: 75.67,
    },
    {
      icon: "<CartSVG/>",
      receiver: "ElectroMen Market",
      type: "Shopping",
      date: "14 Dec 2020",
      amount: 250,
    },
    {
      icon: "<CartSVG/>",
      receiver: "Fiorgio Restaurant",
      type: "Food",
      date: "07 Dec 2020",
      amount: 19.5,
    },
    {
      icon: "<CartSVG/>",
      receiver: "John Mathey Kayne",
      type: "Sport",
      date: "06 Dec 2020",
      amount: 350,
    },
    {
      icon: "../assets/user.svg",
      receiver: "Ann Marlin",
      type: "Shopping",
      date: "31 Nov 2020",
      amount: 430,
    },
  ];
  return (
    <div className="shadow-xl rounded-2xl px-4 py-4">
      <h3 className="font-bold text-xl">Transaction History</h3>
      <table className="w-full text-left my-2 py-2">
        <tr className="opacity-50">
          <th
            className="font-normal"
            colSpan={2}
          >
            Receiver
          </th>
          <th className="font-normal ">Type</th>
          <th className="font-normal ">Date</th>
          <th className="font-normal  text-right">Amount</th>
        </tr>
        {data &&
          data.map((rowData) => (
            <tr className="border-b h-fit">
              <th className="font-normal text-sm py-2 flex gap-2">
                <CartSVG className="rounded-md bg-black/10 p-1 text-black/50" />
                {rowData.receiver}
              </th>
              <th
                className="font-normal text-sm opacity-50"
                colSpan={2}
              >
                {rowData.type}
              </th>
              <th className="font-normal opacity-50 text-sm">{rowData.date}</th>
              <th className="text-right text-sm">${rowData.amount}</th>
            </tr>
          ))}
      </table>
    </div>
  );
}

export default TransHist;
