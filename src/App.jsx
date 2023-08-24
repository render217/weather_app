import React from "react";
import Current from "./components/Current/Current";
import Dashboard from "./components/Dashboard/Dashboard";
import { useGlobalState } from "./context/GlobalContextProvider";
import Sidebar from "./components/Current/Sidebar";


const App = () => {
  const{ isSearch} = useGlobalState();
  return (
    <div>
      <main className="main-layout">
        <div className="side-content">
          {isSearch ? <Sidebar/> : <Current />}
        </div>
        <div className="main-content">
          <Dashboard />
        </div>
      </main>
    </div>
  );
};

export default App;
