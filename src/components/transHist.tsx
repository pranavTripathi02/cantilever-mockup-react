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
      <h3 className="font-bold text-2xl">Transaction History</h3>
      <table className="w-full text-left my-4 py-4 p-8">
        <tr className="opacity-50 p-8">
          <th
            className="font-normal py-4"
            colSpan={2}
          >
            Receiver
          </th>
          <th className="font-normal py-4">Type</th>
          <th className="font-normal py-4">Date</th>
          <th className="font-normal py-4 text-right">Amount</th>
        </tr>
        {data &&
          data.map((rowData) => (
            <tr className="border-b">
              <th className="font-normal py-4 flex gap-2">
                <CartSVG className="rounded-md bg-black/10 p-1 text-black/50" />
                {rowData.receiver}
              </th>
              <th
                className="font-normal py-4 opacity-50"
                colSpan={2}
              >
                {rowData.type}
              </th>
              <th className="font-normal py-4 opacity-50">{rowData.date}</th>
              <th className="py-4 text-right">${rowData.amount}</th>
            </tr>
          ))}
      </table>
    </div>
  );
}

export default TransHist;
