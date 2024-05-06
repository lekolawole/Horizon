'use client';
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: 'Banks',
        data: [1250, 2575, 3410],
        backgroundColor: ['#0747b6', '#2265d8', '#2265d8']
      }
    ],
    labels: ['Bank 1', 'Bank 2', 'Bank 3'],
  };

  const config = {
    cutout: '60%',
    plugins: {
      legend: {
        display: false
      },
    },
  };

  return <Doughnut data={data} options={config} />
}

export default DonutChart