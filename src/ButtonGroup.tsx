import classNames from "classnames";
import React, { Dispatch, SetStateAction } from "react";

interface IButtonItem<T> {
  value: T;
  content: React.ReactNode;
}
export interface ButtonGroupProp<T> {
  options: IButtonItem<T>[];
  activeOption: T;
  setActiveOption: Dispatch<SetStateAction<T>>;
}

export const ButtonGroup = <T extends unknown>({
  options,
  activeOption,
  setActiveOption,
}: ButtonGroupProp<T>) => {
  return (
    <>
      {options &&
        options.map((option, index) => {
          return (
            <button
              className={classNames(
                "border-gray-300 border-2  dark:border-gray-500 hover:bg-gray-50 dark:hover-bg-gray-700 text-gray-700 dark:text-white inline-flex whitespace-nowrap items-center h-10 px-4 font-medium text-sm focus:outline-none",
                {
                  "rounded-l-lg": index === 0,
                  "rounded-r-lg": index === options.length - 1,
                  "bg-gray-50 dark:bg-gray-700": activeOption === option.value,
                  "border-r-0": index !== options.length - 1,
                },
              )}
              onClick={() => setActiveOption(option.value)}
              key={option.value as string}
            >
              {option.content}
            </button>
          );
        })}
    </>
  );
};
