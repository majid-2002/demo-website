"use client";

import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts";
import { styled } from "@mui/material/styles";

const Card = () => {
  const data = [
    { value: 5, label: "A", color: "#FFCB49" },
    { value: 10, label: "B", color: "#7464FF" },
    { value: 15, label: "C", color: "#4FD2B5" },
  ];

  const size = {
    width: 400,
    height: 200,
  };

  const StyledText = styled("text")(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: "middle",
    dominantBaseline: "central",
    fontSize: 20,
  }));

  function PieCenterLabel({ children }: { children: React.ReactNode }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText x={left + width / 2} y={top + height / 2} className="text-sm font-bold">
        {children}
      </StyledText>
    );
  }

  return (
    <div className="flex flex-col  w-full bg-white p-3 rounded-xl shadow-md h-[360px]">
      <h3 className=" text-lg w-full text-black font-medium">Orders</h3>
      <div className="h-[420px] w-full flex items-center justify-center">
        <PieChart
          series={[{ data, innerRadius: 50, outerRadius: 70 }]}
          {...size}
          margin={{ right: 5 }}
          width={150}
          height={150}
          slotProps={{
            legend: { hidden: true },
          }}
          className="w-full h-full"
        >
          <PieCenterLabel>12345</PieCenterLabel>
        </PieChart>
      </div>
      <div className=" w-full justify-between h-full gap-y-2 flex flex-col">
        <div className="rounded-md text-base bg-gradient-to-r h-10 px-4 from-white items-center to-yellow-300 w-full text-black flex justify-between ">
          <p className="text-sm">Upcoming</p>
          <p className="text-sm"> 50</p>
        </div>
        <div className="rounded-md text-base bg-gradient-to-r h-10 px-4 from-white items-center to-indigo-700 w-full text-black flex justify-between">
          <p className=" text-sm">Ongoing</p>
          <p className="text-sm">50</p>
        </div>
        <div className="rounded-md bg-gradient-to-r h-10 px-4 from-white items-center to-emerald-500 w-full text-black flex justify-between">
          <p className="text-sm">Completed</p>
          <p className="text-sm">50</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
