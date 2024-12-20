"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  datasets: [
    {
      label: "Banks",
      data: [1250, 2500, 3750],
      backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
    },
  ],
  labels: ["Equity Bank", "Kcb Bank", "Cooperative Bank of Kenya"],
};

function DoughnutChart({ accounts }: DoughnutChartProps) {
  return (
    <Doughnut
      data={data}
      options={{
        cutout: "60%",
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
}

export default DoughnutChart;
