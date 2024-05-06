"use client";

import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts";
import { styled } from "@mui/material/styles";
import { Card as CardProps } from "../../../../features/card/cardSlice";

/**
 * Card component to display the orders data as a pie chart with labels
 *
 * @param {CardProps} props - Props containing orders data
 * @returns {JSX.Element} JSX representation of the Card component
 */
const Card = ({ data }: CardProps) => {
  //? Size of the pie chart
  const size = {
    width: 400,
    height: 200,
  };

  //? text styling for the pie chart
  const StyledText = styled("text")(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: "middle",
    dominantBaseline: "central",
    fontSize: 20,
  }));

  function PieCenterLabel({ children }: { children: React.ReactNode }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText
        x={left + width / 2}
        y={top + height / 2}
        className="text-sm font-bold"
      >
        {children}
      </StyledText>
    );
  }

  return (
    <div className="flex flex-col  w-full bg-white  p-3 rounded-xl shadow-sm h-auto gap-y-3">
      <h3 className=" text-lg w-full text-black font-medium">Orders</h3>
      <div className=" w-full flex items-center justify-center">
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
          <PieCenterLabel>
            {data.reduce((acc, curr) => acc + curr.value, 0)}
          </PieCenterLabel>
        </PieChart>
      </div>
      <div className=" w-full justify-between h-full mt-2 gap-y-2 flex flex-col">
        <div className="rounded-md text-base bg-gradient-to-r h-8 px-4 from-white items-center to-yellow-300 w-full text-black flex justify-between ">
          <p className="text-sm">{data[0].label}</p>
          <p className="text-sm">{data[0].value}</p>
        </div>
        <div className="rounded-md text-base bg-gradient-to-r h-8 px-4 from-white items-center to-indigo-700 w-full text-black flex justify-between">
          <p className=" text-sm">{data[1].label}</p>
          <p className="text-sm">{data[1].value}</p>
        </div>
        <div className="rounded-md bg-gradient-to-r h-8 px-4 from-white items-center to-emerald-500 w-full text-black flex justify-between">
          <p className="text-sm">{data[2].label}</p>
          <p className="text-sm">{data[2].value}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
