import React, { useEffect, useRef } from "react";

interface WeekChartProps {
  start: number;
  end: number;
}

const WeekChart: React.FC<WeekChartProps> = ({ start, end }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const generateRandomData = () => {
      const canvas = chartRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const chartWidth = 140; // Maximum width of 140px
      const tableRowHeight = 20; // Height of the table row
      const chartHeight = tableRowHeight - 2; // Subtracting 2 pixels for border
      const weeksAgo = 52;
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - weeksAgo * 7);
      const endDate = new Date();

      canvas.width = chartWidth;
      canvas.height = chartHeight;

      ctx.beginPath();
      ctx.moveTo(0, chartHeight / 2);
      ctx.lineTo(chartWidth, chartHeight / 2);
      ctx.strokeStyle = "rgba(234, 234, 236, 1)";
      ctx.lineWidth = 2; // Width of the background line
      ctx.stroke();

      let x1, x2;
      const barrierHeight = 6; // Adjust the height of the barriers
      const barrierColor = "rgba(58, 22, 201, 1)";
      const lineWidth = 2;

      do {
        const randomStartDate = new Date(
          startDate.getTime() +
            Math.floor(Math.random() * (endDate.getTime() - startDate.getTime()))
        );
        const randomEndDate = new Date(
          randomStartDate.getTime() +
            Math.floor(
              Math.random() * (endDate.getTime() - randomStartDate.getTime())
            )
        );

        x1 =
          (chartWidth * (randomStartDate.getTime() - startDate.getTime())) /
          (endDate.getTime() - startDate.getTime());
        x2 =
          (chartWidth * (randomEndDate.getTime() - startDate.getTime())) /
          (endDate.getTime() - startDate.getTime());
      } while (Math.abs(x2 - x1) < 10);

      ctx.beginPath();
      ctx.moveTo(x1 - 1, chartHeight / 2 - barrierHeight / 2);
      ctx.lineTo(x1 - 1, chartHeight / 2 + barrierHeight / 2);
      ctx.strokeStyle = barrierColor;
      ctx.lineWidth = lineWidth;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(x2 - 1, chartHeight / 2 - barrierHeight / 2);
      ctx.lineTo(x2 - 1, chartHeight / 2 + barrierHeight / 2);
      ctx.strokeStyle = barrierColor;
      ctx.lineWidth = lineWidth;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(x1 - 1, chartHeight / 2);
      ctx.lineTo(x2 - 1, chartHeight / 2);
      ctx.strokeStyle = barrierColor;
      ctx.lineWidth = lineWidth;
      ctx.stroke();
    };

    generateRandomData();
  }, []);

  return <canvas className="max-h-[20px]" ref={chartRef} />;
};

export default WeekChart;



