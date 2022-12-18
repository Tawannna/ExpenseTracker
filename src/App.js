import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TranSactionList } from "./components/TranSactionList";
import { AddTranSaction } from "./components/AddTranSaction";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TranSactionList />
        <AddTranSaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
