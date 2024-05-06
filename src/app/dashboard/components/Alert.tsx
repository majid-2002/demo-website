import React from "react";
import Image from "next/image";
import { Alert as AlertProps } from "../../../../features/alerts/alertSlice";

/**
 * Alert component displays information about an alert.
 * @param {Object} props - Props object containing the alert details.
 * @param {AlertProps} props.alert - The alert object containing title, date, description, etc.
 * @returns {JSX.Element} - The JSX element representing the alert component.
 */
const Alert = ({ alert }: { alert: AlertProps }) => {
  const icons: Record<string, string> = {
    "Driver raised Concern": "/images/driver.svg",
    "Reefer Temp. out of range": "/images/temp.svg",
  };

  return (
    <div className="flex flex-col p-4 bg-white rounded-md shadow-sm gap-y-2">
      <div className="flex flex-row gap-x-3 w-full ">
        <div className="flex flex-row gap-x-3 w-full items-center">
          <div className="bg-[#E0EAFF]  aspect-square  h-12 w-12 rounded-xl flex items-center justify-center">
            <Image
              alt="profile"
              src={icons[alert.title]}
              width={35}
              height={35}
            ></Image>
          </div>
          <div className="flex flex-col justify-between  text-black font-medium">
            <p className="text-base font-medium ">{alert.title}</p>
            <div className="flex flex-row gap-x-2 text-xs">
              <p>{alert.LoadNo}</p>
              <p>{alert.BillTo}</p>
            </div>
          </div>
        </div>
        <div className="text-black  font-medium text-sm pt-2 flex justify-start w-[100px]">
          <p>{alert.date.toString()}</p>
        </div>
      </div>
      <div className="text-black font-medium text-sm">
        <p>{alert.description}</p>
      </div>
      <div className="w-full flex justify-end gap-x-6 font-medium">
        <button
          className="underline text-[#1A3875] p-2 px-3 rounded-md"
          onClick={() => {
            // handle ignore click
          }}
        >
          ignore
        </button>
        <button
          className="bg-[#1A3875] p-2 px-3 rounded-md"
          onClick={() => {
            // handle resolve click
          }}
        >
          Resolve
        </button>
      </div>
    </div>
  );
};

export default Alert;
