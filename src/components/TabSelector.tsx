import * as React from "react";
import { TabPanel, useTabs } from "react-headless-tabs";
export const TabSelector = ({
  isActive,
  children,
  onClick,
}: {
  isActive: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <button
    className={`mr-8 group inline-flex items-center px-2 py-4 border-b-2 font-medium text-sm leading-5 cursor-pointer whitespace-nowrap ${
      isActive
        ? "border-indigo-500 text-white focus:outline-none focus:text-indigo-400 focus:border-indigo-700"
        : "border-transparent hover:text-sky-600 hover:border-gray-300 focus:text-gray-600 focus:border-gray-300"
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);