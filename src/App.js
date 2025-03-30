import "./App.css";
import { LineGraph } from "./components/Line";
import { BarChart } from "./components/Bar";
import { PieChart } from "./components/Pie";
import { DraggableTable } from "./components/DraggableTable";

function App() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen p-6">
      <DraggableTable />
      <LineGraph />
      <PieChart />
      <BarChart />
    </div>
  );
}

export default App;
