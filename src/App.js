import "./App.css";
import { LineGraph } from "./components/Line";
import { BarChart } from "./components/Bar";
import { PieChart } from "./components/Pie";
import { DraggableTable } from "./components/DraggableTable";

function App() {
  return (
    <div className="Apps">
      {/* <LineGraph />
      <br />
      <BarChart />
      <br />
      <PieChart />
      <br /> */}
      <DraggableTable />
    </div>
  );
}

export default App;
