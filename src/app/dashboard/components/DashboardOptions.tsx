import React from "react";
import Image from "next/image";

/**
 * DashboardOptions component displays the options available on top right corner of the dashboard.
 * @returns {JSX.Element} - The JSX element representing the dashboard options component.
 */
const DashboardOptions = () => {
  const images = [
    "/images/search.svg",
    "/images/notification.svg",
    "/images/menu.svg",
  ];

  return (
    <div className="flex flex-row bg-white rounded-full p-2 gap-x-3 shadow-sm cursor-pointer">
      {images.map((image, index) => (
        <React.Fragment key={index}>
          <Image
            src={image}
            alt={image.split("/")[2].split(".")[0]}
            width={24}
            height={24}
          />
          {index !== images.length - 1 && (
            <span className="bg-gray-300 h-full w-[1px]"></span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default DashboardOptions;
