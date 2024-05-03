import React from "react";

const ExpenseCard = () => {
  return (
    <div className=" flex flex-col gap-y-1 w-full  rounded-lg border-gray-300 border-2 p-3">
      <p className="font-medium text-lg text-gray-500">Income</p>
      <p className="font-semibold text-2xl  text-green-600">100000 CAD</p>
      <p className="text-sm text-gray-500">2 payments recieved</p>
    </div>
  );
};

export default ExpenseCard;
