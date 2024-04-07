import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { useRef } from "react";
const FrequentItemsetsCountChart = ({ itemsAndCounts }) => {
  const labels = Object.keys(itemsAndCounts);
  const data = {
    labels,
    datasets: [
      {
        label: "Count",
        data: labels.map((label) => itemsAndCounts[label]),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  return <Bar  data={data} />;
};
 export default FrequentItemsetsCountChart;