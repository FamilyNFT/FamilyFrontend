import React from "react";

export default function Card({
  children,
  handleClick,
}: {
  children: React.ReactNode;
  handleClick: () => void;
}) {
  return (
    <div
      className="w-full p-6 cursor-pointer bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      onClick={() => {
        handleClick();
      }}
    >
      {children}
    </div>
  );
}
