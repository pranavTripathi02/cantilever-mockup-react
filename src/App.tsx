import "./App.css";
import Sidebar from "./components/sidebar";
import Dashboard from "./components/dashboard";
import TopBar from "./components/topBar";

function App() {
  return (
    <>
      <div className="flex w-full h-full pb-12">
        <Sidebar />
        <div className="flex md:ms-[250px] w-full flex-col px-8">
          <TopBar />
          <div className="grid">
            <Dashboard />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
