import { IColor } from "./@interfaces";
import React from "react";

const ColorBox = ({ color }: { color: IColor }) => {
  return (
    <div
      key={color.bgClass}
      className="flex flex-col h-40 rounded-lg shadow-lg dark:bg-white"
    >
      <div className={`h-20 ${color.bgClass} rounded-t-lg`} />
      <div className="m-3">
        <p className="text-lg font-medium text-gray-900">{color.code}</p>
        <p className="font-normal text-gray-500 text-md">{color.hex}</p>
      </div>
    </div>
  );
};

export default ColorBox;
