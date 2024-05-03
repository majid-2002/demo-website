import React from "react";
import Image from "next/image";

const Alert = () => {
  return (
    <div className="flex flex-col p-4 bg-white rounded-md shadow-md gap-y-2">
      <div className="flex flex-row gap-x-3 w-full ">
        <div className="flex flex-row gap-x-3 w-full ">
          <div className="bg-[#E0EAFF] p-3 rounded-xl">
            <Image
              alt="profile"
              src={"/images/profile.svg"}
              width={30}
              height={30}
            ></Image>
          </div>
          <div className="flex flex-col  justify-center text-black font-medium">
            <p className="text-lg font-medium">Driver raised Concern</p>
            <div className="flex flex-row gap-x-2 text-sm">
              <p>Load No : 12454,</p>
              <p>Bill To : RoaDo demo Bangalore</p>
            </div>
          </div>
        </div>
        <div className="text-black font-medium text-base flex justify-start w-[100px]">
          <p>13 Feb 24</p>
        </div>
      </div>
      <div className="text-black font-medium text-sm">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
          mod tempor incididunt ut labore et dolore magna aliqua
        </p>
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
