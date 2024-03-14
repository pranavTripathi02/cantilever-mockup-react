import Cards from "./cards";
import GetLoan from "./getLoan";
import Goals from "./goals";
import NewTxn from "./newTxn";
import OutcomeStats from "./outcomeStats";
// import TopBar from "./topBar";
import TransHist from "./transHist";

function Dashboard() {
  return (
    <div className="w-full gap-4 grid 2xl:grid-cols-[1.25fr_1fr]">
      <div className="space-y-4">
        <Cards />
        <TransHist />
      </div>
      <div className="flex flex-col justify-between">
        <Goals />
        <OutcomeStats />
        <div className="grid gap-4 grid-cols-[3fr_1fr]">
          <NewTxn />
          <GetLoan />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
