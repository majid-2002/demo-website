import React from "react";
import Image from "next/image";
import Card from "./components/Card";
import ExpenseCard from "./components/ExpenseCard";
import Alert from "./components/Alert";
import { Montserrat } from "next/font/google";
import ActivitiesCard from "./components/ActivitiesCard";

const montserrat = Montserrat({ subsets: ["latin"] });

const Dasbhobardpage = () => {
  const activitiesData = [
    "Gurpreet Singh  (Dispatch team) has created Load No. I-I-AAA-1325",
    "Aman (Driver) Picked Up goods at Location_Name for Load No. I-I-AAA-1325",
    "Gurpreet Singh  (Dispatch team) has created Load No. I-I-AAA-1325",
    "Load No. I-I-AAA-1325 will start added by Gurpreet Singh",
  ];

  return (
    <div className="w-full flex flex-row gap-x-3 justify-between">
      <div className="flex-col flex  w-[70vw]  justify-between p-6 gap-y-3">
        <div className="w-full flex flex-row justify-between">
          <h3
            className={
              "text-3xl font-medium text-black " + montserrat.className
            }
          >
            Dashboard
          </h3>
          <div className="flex flex-row bg-white rounded-full p-2 gap-x-3 shadow-sm cursor-pointer">
            <Image
              src="/images/search.svg"
              alt="search"
              width={24}
              height={24}
            />
            <span className="bg-gray-300 h-full w-[1px]"></span>
            <Image
              src="/images/notification.svg"
              alt="noftification"
              width={24}
              height={24}
            />
            <span className="bg-gray-300 h-full w-[1px]"></span>
            <Image src="/images/menu.svg" alt="menu" width={24} height={24} />
          </div>
        </div>
        <div className="flex flex-row gap-x-4">
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
        <div className="flex flex-row bg-white shadow-sm rounded-3xl p-5">
          <div className="w-full flex-col gap-y-3 flex justify-center items-center">
            <Image
              src={"/images/indents.svg"}
              className=""
              width={35}
              height={35}
              alt="label"
            ></Image>
            <p className="text-black text-base font-medium">Create Indents</p>
          </div>

          <span className="h-4/5 my-auto bg-gray-300 w-2"></span>

          <div className="w-full flex flex-col gap-y-3 justify-center items-center">
            <Image
              src={"/images/vehicle.svg"}
              width={35}
              height={35}
              alt="label"
            ></Image>
            <p className="text-black font-medium text-base">Add Vehicle</p>
          </div>

          <span className="h-4/5 my-auto bg-gray-300 w-2"></span>


          <div className="w-full flex flex-col gap-y-3 justify-center items-center">
            <Image
              src={"/images/trailer.svg"}
              width={35}
              height={35}
              alt="label"
            ></Image>
            <p className="text-black text-base font-medium">Add trailer</p>
          </div>

          <span className="h-4/5 my-auto bg-gray-300 w-2"></span>

          <div className="w-full flex flex-col gap-y-3 justify-center items-center">
            <Image
              src={"/images/driver.svg"}
              width={35}
              height={35}
              alt="label"
            ></Image>
            <p className="text-black text-base font-medium">Add Driver</p>
          </div>

          <span className="h-4/5 my-auto bg-gray-300 w-2"></span>

          <div className="w-full flex-col gap-y-3 flex justify-center items-center">
            <Image
              src={"/images/vehicle.svg"}
              width={35}
              height={35}
              alt="label"
            ></Image>
            <p className="text-black text-base font-medium">Create Indents</p>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <h3 className="text-xl w-full  text-black h-10 p-2 font-medium">
            {" "}
            Hight Priority alerts (14)
          </h3>
          <div className="flex items-center">
            <p className="text-base font-normal whitespace-nowrap  hover:underline cursor-pointer text-[#1A3875]">
              View All
            </p>
            <Image
              src={"/images/leftarrow.svg"}
              alt="leftarrow"
              width={24}
              height={24}
            ></Image>
          </div>
        </div>
        <div className="flex flex-row gap-x-16">
          <Alert />
          <Alert />
        </div>
      </div>
      <div className="sm:min-w-[26vw] sm:w-[24vw]  sm:max-w-[29vw] min-h-screen bg-white p-5 flex flex-col gap-y-4">
        <div className="w-full flex flex-col h-10 gap-y-1">
          <h3 className="text-xl w-full  text-black font-medium">
            {" "}
            Todays Highlights (14)
          </h3>
          <p className="text-base w-full  text-gray-500  font-medium">
            19 Mar 2024
          </p>
        </div>
        <div className="flex  flex-row justify-between w-full gap-x-6 mt-6">
          <ExpenseCard />
          <ExpenseCard />
        </div>
        <div className="flex justify-between">
          <h3 className="text-base w-full text-black font-medium">
            {" "}
            Completed Activities (14)
          </h3>
          <p className="underline cursor-pointer text-black whitespace-nowrap text-base">
            View All
          </p>
        </div>
        <ActivitiesCard activities={activitiesData} />
        <div className="flex justify-between">
          <h3 className="text-base w-full text-black font-medium">
            {" "}
            Scheduled Activities (14)
          </h3>
          <p className="underline cursor-pointer text-black whitespace-nowrap text-base">
            View All
          </p>
        </div>
        <ActivitiesCard activities={activitiesData} />
      </div>
    </div>
  );
};

export default Dasbhobardpage;
