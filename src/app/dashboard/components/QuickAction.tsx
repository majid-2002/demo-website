import React from "react";
import Image from "next/image";

/**
 * QuickAction component to display quick actions for the user
 *
 * @returns {JSX.Element} JSX representation of the QuickAction component
 */
const QuickAction = () => {
  const images = [
    {
      text: "Create Indents",
      src: "/images/indents.svg",
    },
    {
      text: "Add Vehicle",
      src: "/images/vehicle.svg",
    },
    {
      text: "Add trailer",
      src: "/images/trailer.svg",
    },
    {
      text: "Add Driver",
      src: "/images/driver.svg",
    },
    {
      text: "Create Indents",
      src: "/images/vehicle.svg",
    },
  ];

  return (
    <div className="flex flex-row bg-white shadow-sm rounded-3xl p-5">
      {images.map((image, index) => (
        <>
          <div
            key={index}
            className="w-full flex flex-col gap-y-3 justify-center items-center cursor-pointer"
            onClick={() => {
              // handle QuickAction click
            }}
          >
            <Image src={image.src} width={35} height={35} alt="label"></Image>
            <p className="text-black text-base font-medium">{image.text}</p>
          </div>
          {index !== images.length - 1 && (
            <span className="h-4/5 my-auto bg-gray-300 w-2"></span>
          )}
        </>
      ))}
    </div>
  );
};

export default QuickAction;
