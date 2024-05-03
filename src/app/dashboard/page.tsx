import React from "react";
import Image from "next/image";
import Card from "./components/Card";
import ExpenseCard from "./components/ExpenseCard";
import Alert from "./components/Alert";

const Dasbhobardpage = () => {
  return (
    <div className="w-full flex flex-row gap-x-3">
      <div className="flex-col flex  w-[70vw]  justify-between p-6 gap-y-3">
        <div className="w-full flex flex-row justify-between">
          <h3 className="text-3xl font-medium text-black">Dashboard</h3>
          <div className="flex flex-row bg-white rounded-full p-2 gap-x-3 shadow-sm">
            <Image
              src="/images/search.svg"
              alt="search"
              width={24}
              height={24}
            />
            <span className="bg-gray-300 h-full w-[1.2px]"></span>
            <Image
              src="/images/notification.svg"
              alt="noftification"
              width={24}
              height={24}
            />
            <span className="bg-gray-300 h-full w-[1.2px]"></span>
            <Image src="/images/menu.svg" alt="menu" width={24} height={24} />
          </div>
        </div>
        <div className="flex flex-row gap-x-6">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div>
          <h3 className="text-xl w-full  text-black h-10 p-2 font-medium">
            {" "}
            Quick Actions
          </h3>
        </div>
        <div className="flex flex-row bg-white shadow-md rounded-2xl p-5">
          <div className="w-full flex-col gap-y-3 flex justify-center items-center">
            <Image
              src={"/images/label.svg"}
              className=""
              width={35}
              height={35}
              alt="label"
            ></Image>
            <p className="text-black text-base font-medium">Create Indents</p>
          </div>

          <span className="h-2/3 my-auto bg-gray-300 w-2"></span>

          <div className="w-full flex flex-col gap-y-3 justify-center items-center">
            <Image
              src={"/images/label.svg"}
              width={35}
              height={35}
              alt="label"
            ></Image>
            <p className="text-black font-medium text-base">Add Vehicle</p>
          </div>

          <span className="h-2/3 my-auto bg-gray-300 w-2"></span>

          <div className="w-full  flex flex-col gap-y-3 justify-center items-center">
            <Image
              src={"/images/label.svg"}
              width={35}
              height={35}
              alt="label"
            ></Image>
            <p className="text-black text-base font-medium">Add trailer</p>
          </div>

          <span className="h-2/3 my-auto bg-gray-300 w-2"></span>

          <div className="w-full flex flex-col gap-y-3 justify-center items-center">
            <Image
              src={"/images/label.svg"}
              width={35}
              height={35}
              alt="label"
            ></Image>
            <p className="text-black text-base font-medium">Add Driver</p>
          </div>

          <span className="h-2/3 my-auto bg-gray-300 w-2"></span>

          <div className="w-full flex-col gap-y-3 flex justify-center items-center">
            <Image
              src={"/images/label.svg"}
              width={35}
              height={35}
              alt="label"
            ></Image>
            <p className="text-black text-base font-medium">Create Indents</p>
          </div>
        </div>
        <div>
          <h3 className="text-xl w-full  text-black h-10 p-2 font-medium">
            {" "}
            Hight Priority alerts (14)
          </h3>
        </div>
        <div className="flex flex-row gap-x-16">
          <Alert />
          <Alert />
        </div>
      </div>
      <div className="w-4/12 bg-white p-5 flex flex-col">
        <div className="w-full flex flex-col h-10 gap-y-2">
          <h3 className="text-xl w-full  text-black font-medium">
            {" "}
            Todays Highlights (14)
          </h3>
          <p className="text-base w-full  text-gray-500  font-medium">
            19 Mar 2024
          </p>
        </div>
        <div className="flex  flex-row justify-between w-full gap-x-6 mt-10">
          <ExpenseCard />
          <ExpenseCard />
        </div>
      </div>
    </div>
  );
};

export default Dasbhobardpage;
