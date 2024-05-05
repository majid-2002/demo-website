import React from "react";
import Image from "next/image";
import { Alert as AlertProps } from "../../../../features/alerts/alertSlice";

const Alert = ({ alert }: { alert: AlertProps }) => {
  return (
    <div className="flex flex-col p-4 bg-white rounded-md shadow-sm gap-y-2">
      <div className="flex flex-row gap-x-3 w-full ">
        <div className="flex flex-row gap-x-3 w-full items-center">
          <div className="bg-[#E0EAFF] p-3 aspect-square  h-12 w-12 rounded-xl flex items-center justify-center">
            <Image
              alt="profile"
              src={"/images/profile.svg"}
              width={40}
              height={40}
            ></Image>
          </div>
          <div className="flex flex-col justify-between  text-black font-medium">
            <p className="text-base font-medium ">Driver raised Concern</p>
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
        <button className="underline text-[#1A3875] p-2 px-3 rounded-md">
          ignore
        </button>
        <button className="bg-[#1A3875] p-2 px-3 rounded-md">Resolve</button>
      </div>
    </div>
  );
};

export default Alert;
