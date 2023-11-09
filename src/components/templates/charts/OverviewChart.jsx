import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import data from "../../../utils/tabledata";

ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const OverviewChart = () => {
  const options = {};
  return (
    <>
      <Bar data={data} options={options} ></Bar>
    </>
  );
};

export default OverviewChart;
