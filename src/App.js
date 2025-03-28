import "./App.css";
import { LineGraph } from "./components/Line";
import { BarChart } from "./components/Bar";
import { PieChart } from "./components/Pie";

function App() {
  return (
    <div className="Apps">
      <LineGraph />
      <br />
      <BarChart />
      <br />
      <PieChart />
    </div>
  );
}

export default App;
