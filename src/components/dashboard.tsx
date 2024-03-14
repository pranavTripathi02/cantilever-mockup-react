import Cards from "./cards";
import GetLoan from "./getLoan";
import Goals from "./goals";
import NewTxn from "./newTxn";
import OutcomeStats from "./outcomeStats";
// import TopBar from "./topBar";
import TransHist from "./transHist";

function Dashboard() {
  return (
    <div className="w-full gap-4 grid md:grid-cols-[626px_536px] 2xl:grid-cols-[1.25fr_1fr]">
      <div className="2xl:w-auto flex flex-col justify-between">
        <Cards />
        <TransHist />
      </div>
      <div className="flex flex-col justify-between 2xl:w-auto">
        <Goals />
        <OutcomeStats />
        <div className="grid grid-cols-[2fr_1fr] gap-4 2xl:grid-cols-[3fr_1fr]">
          <NewTxn />
          <GetLoan />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
