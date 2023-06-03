import { Chart } from 'chart.js/auto';
import React, { useEffect, useRef } from 'react';

const DataVisualiser = ({ data, duration, visualiseEventsOnly }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;

    const createChart = () => {
      const labels = [];
      const lineNames = [];
      const intervals = {};

      const colorMap = {
        Bakerloo: 'rgb(139, 69, 19)', // Brown color for Bakerloo
        Central: 'rgb(220, 36, 31)',
        Circle: 'rgb(255, 206, 67)',
        District: 'rgb(0, 125, 50)',
        'Hammersmith&City': 'rgba(255, 105, 180, 0.7)', // Pink color with opacity for Hammersmith & City
        Jubilee: 'rgba(192, 192, 192, 0.7)', // Light grey/silver color with opacity for Jubilee
        Metropolitan: 'rgb(155, 52, 102)',
        Northern: 'rgb(0, 0, 0)',
        Piccadilly: 'rgb(0, 25, 168)',
        Victoria: 'rgb(0, 152, 216)',
        'Waterloo&City': 'rgba(82, 179, 217, 0)',
      };

      // Add new data objects for 'Waterloo&City' lineName
      if (!visualiseEventsOnly) {
        for (let i = 1; i <= duration; i++) {
          data.push({
            lineName: 'Waterloo&City',
            timeToStation: i,
          });
        }
      }

      // Extract data for chart
      data.forEach((item) => {
        const { lineName, timeToStation } = item;

        if (!lineNames.includes(lineName)) {
          lineNames.push(lineName);
        }

        const timeInSeconds = Math.floor(timeToStation);

        if (!labels.includes(timeInSeconds)) {
          labels.push(timeInSeconds);
        }

        if (!intervals[lineName]) {
          intervals[lineName] = {};
        }

        if (!intervals[lineName][timeInSeconds]) {
          intervals[lineName][timeInSeconds] = 0;
        }

        intervals[lineName][timeInSeconds]++;
      });

      // Sort the labels in ascending order
      labels.sort((a, b) => a - b);

      // Create chart
      const chartData = {
        labels,
        datasets: lineNames.map((lineName) => ({
          label: lineName,
          data: labels.map((timeInSeconds) => intervals[lineName][timeInSeconds]),
          backgroundColor: colorMap[lineName], // Use the assigned color for the lineName
          borderWidth: 1,
        })),
      };

      const chartOptions = {
        indexAxis: 'x',
        scales: {
          x: {
            title: {
              display: true,
              text: 'Time (seconds)',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Count',
            },
          },
        },
      };

      const ctx = chartRef.current.getContext('2d');

      // Destroy the previous chart instance if it exists
      if (chartInstance) {
        chartInstance.destroy();
      }

      // Create a new chart instance
      chartInstance = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: chartOptions,
      });
    };

    createChart();

    // Cleanup function
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [data, duration, visualiseEventsOnly]);

  return <canvas ref={chartRef} />;
};

export default DataVisualiser;
