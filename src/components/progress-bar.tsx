import React from "react";

function ProgressBar({
  title,
  percentage,
  color,
}: {
  title: string;
  percentage: string;
  color: string;
}) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between mb-1">
        <span className="text-base font-bold uppercase">{title}</span>
        <span className="text-sm font-bold uppercase">{percentage}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className={`${color} h-2.5 rounded-full`}
          style={{
            width: percentage,
          }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
