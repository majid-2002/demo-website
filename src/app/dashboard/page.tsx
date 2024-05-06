"use client";

import React from "react";
import Image from "next/image";
import Card from "./components/Card";
import ExpenseCard from "./components/ExpenseCard";
import Alert from "./components/Alert";
import { Montserrat } from "next/font/google";
import ActivitiesCard from "./components/ActivitiesCard";
import { setActivities } from "../../../features/activities/activitiesSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setCardData } from "../../../features/card/cardSlice";
import { setExpenseCardData } from "../../../features/expenses/expenseSlice";
import { RootState } from "../../../utils/store";
import { Card as CardType } from "../../../features/card/cardSlice";
import { setAlerts } from "../../../features/alerts/alertSlice";
import { ExpenseCard as ExpenseCardType } from "../../../features/expenses/expenseSlice";
import QuickAction from "./components/QuickAction";
import DashboardOptions from "./components/DashboardOptions";

const montserrat = Montserrat({ subsets: ["latin"] });

/**
 * Dasbhobardpage component
 * @description This is the main dashboard page component.
 * @returns {JSX.Element} JSX representation of the dashboard page
 */

const Dasbhobardpage = () => {
  const dispatch = useDispatch();
  const allActivities = useSelector(
    (state: RootState) => state.activities.activities
  );
  const allCards = useSelector((state: RootState) => state.card.cards);
  const allAlerts = useSelector((state: RootState) => state.alert.alerts);
  const allExpenses = useSelector(
    (state: RootState) => state.expenseCard.expenseCards
  );

  /**
   * Get today's date in a formatted string
   *
   * @returns {string} Formatted string representing today's date
   */
  const getTodaysDate = (): string => {
    const date = new Date();
    return date.toDateString().split(" ").slice(1, 4).join(" ");
  };

  //? Dummy data
  const activitiesData = [
    "Gurpreet Singh  (Dispatch team) has created Load No. I-I-AAA-1325",
    "Aman (Driver) Picked Up goods at Location_Name for Load No. I-I-AAA-1325",
    "Gurpreet Singh  (Dispatch team) has created Load No. I-I-AAA-1325",
    "Load No. I-I-AAA-1325 will start added by Gurpreet Singh",
  ];

  const alertData = [
    {
      id: 1,
      title: "Driver raised Concern",
      date: "13 Feb 24",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua",
      LoadNo: 12454,
      BillTo: "RoaDo demo Bangalore",
    },
    {
      id: 2,
      title: "Reefer Temp. out of range",
      date: "13 Feb 24",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua",
      LoadNo: 12454,
      BillTo: "RoaDo demo Bangalore",
    },
  ];

  const expenseData: ExpenseCardType[] = [
    {
      id: 1,
      expenseType: "income",
      totalPayments: 2,
      totalAmount: 100000,
    },
    {
      id: 2,
      expenseType: "expense",
      totalPayments: 5,
      totalAmount: 5000,
    },
  ];

  const cardsData: CardType[] = [
    {
      id: 1,
      data: [
        { value: 50, label: "Upcoming", color: "#FFCB49" },
        { value: 100, label: "Ongoing", color: "#7464FF" },
        { value: 50, label: "Completed", color: "#4FD2B5" },
      ],
    },
    {
      id: 2,
      data: [
        { value: 50, label: "Upcoming", color: "#FFCB49" },
        { value: 100, label: "Ongoing", color: "#7464FF" },
        { value: 50, label: "Completed", color: "#4FD2B5" },
      ],
    },
    {
      id: 3,
      data: [
        { value: 50, label: "Upcoming", color: "#FFCB49" },
        { value: 100, label: "Ongoing", color: "#7464FF" },
        { value: 50, label: "Completed", color: "#4FD2B5" },
      ],
    },
    {
      id: 4,
      data: [
        { value: 50, label: "Freight Charge", color: "#FFCB49" },
        { value: 100, label: "Driver Charge", color: "#7464FF" },
        { value: 50, label: "Other Charges", color: "#4FD2B5" },
      ],
    },
  ];

  // Dispatch actions to set initial state using useEffect hook
  useEffect(() => {
    dispatch(setActivities(activitiesData));
    dispatch(setCardData(cardsData));
    dispatch(setAlerts(alertData));
    dispatch(setExpenseCardData(expenseData));
  }, [dispatch]);

  return (
    <div className="w-full flex flex-row gap-x-3 justify-between">
      {/* Main Dashboard Area */}
      <div className="flex-col flex  w-[70vw]  justify-between p-6 gap-y-3">
        <div className="w-full flex flex-row justify-between">
          <h3
            className={
              "text-3xl font-medium text-black " + montserrat.className
            }
          >
            Dashboard
          </h3>
          <DashboardOptions />
        </div>
        <div className="flex flex-row gap-x-4">
          {allCards.map((card) => (
            <Card id={card.id} data={card.data} key={card.id} />
          ))}
        </div>
        <div>
          <h3 className="text-xl w-full  text-black h-10 p-2 font-medium">
            {" "}
            Quick Actions
          </h3>
        </div>
        <QuickAction />
        <div className="flex flex-row justify-between">
          <h3 className="text-xl w-full  text-black h-10 p-2 font-medium">
            {" "}
            High Priority alerts ({allAlerts.length})
          </h3>
          <div className="flex items-center">
            <p
              className="text-base font-normal whitespace-nowrap  hover:underline cursor-pointer text-[#1A3875]"
              onClick={() => {}}
            >
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
          {allAlerts.map((alert) => (
            <Alert alert={alert} key={alert.id} />
          ))}
        </div>
      </div>

      {/* Side Dashboard Area */}
      <div className="sm:min-w-[26vw] sm:w-[24vw]  sm:max-w-[29vw] min-h-screen bg-white p-5 flex flex-col gap-y-4">
        <div className="w-full flex flex-col h-10 gap-y-1">
          <h3 className="text-xl w-full  text-black font-medium">
            {" "}
            Todays Highlights (14)
          </h3>
          <p className="text-base w-full  text-gray-500  font-medium">
            {getTodaysDate()}
          </p>
        </div>
        <div className="flex  flex-row justify-between w-full gap-x-6 mt-6">
          {allExpenses.map((expense) => (
            <ExpenseCard expenseCard={expense} key={expense.id} />
          ))}
        </div>
        <div className="flex justify-between">
          <h3 className="text-base w-full text-black font-medium">
            {" "}
            Completed Activities ({activitiesData.length})
          </h3>
          <p className="underline cursor-pointer text-black whitespace-nowrap text-base">
            View All
          </p>
        </div>
        <ActivitiesCard activities={activitiesData} />
        <div className="flex justify-between">
          <h3 className="text-base w-full text-black font-medium">
            {" "}
            Scheduled Activities ({allActivities.length})
          </h3>
          <p className="underline cursor-pointer text-black whitespace-nowrap text-base">
            View All
          </p>
        </div>
        <ActivitiesCard activities={allActivities} />
      </div>
    </div>
  );
};

export default Dasbhobardpage;
