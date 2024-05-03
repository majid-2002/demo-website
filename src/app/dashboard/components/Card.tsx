import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col gap-y-5  w-full bg-white p-4 rounded-xl shadow-md h-[360px]">
      <h3 className=" text-lg w-full text-black font-medium">Orders</h3>
      <div className="h-[420px]"></div>
      <div className=" w-full justify-between h-full gap-y-2 flex flex-col">
        <div className="rounded-md text-base bg-gradient-to-r h-10 px-4 from-white items-center to-yellow-300 w-full text-black flex justify-between ">
          <p className="text-sm">Upcoming</p>
          <p className="text-sm"> 50</p>
        </div>
        <div className="rounded-md text-base bg-gradient-to-r h-10 px-4 from-white items-center to-indigo-700 w-full text-black flex justify-between">
          <p className=" text-sm">Upcoming</p>
          <p className="text-sm">50</p>
        </div>
        <div className="rounded-md bg-gradient-to-r h-10 px-4 from-white items-center to-emerald-500 w-full text-black flex justify-between">
          <p className="text-sm">Upcoming</p>
          <p className="text-sm">50</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
