import React from "react";
import ProgressBar from "./progress-bar";
const percentages = [
  {
    title: "Design grafis",
    percentage: "89%",
    color: "bg-[#FFD700]",
  },
  {
    title: "Brand strategy",
    percentage: "83%",
    color: "bg-green-600",
  },
  {
    title: "Design identity",
    percentage: "85%",
    color: "bg-[#FFD700]",
  },
  {
    title: "Illustration",
    percentage: "89%",
    color: "bg-blue-600",
  },
  {
    title: "Logo design",
    percentage: "87%",
    color: "bg-[#FFD700]",
  },
  {
    title: "Social media management",
    percentage: "84%",
    color: "bg-purple-600",
  },
];
function Percentage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-8 mx-auto py-32">
      {percentages.map((val, index) => (
        <div key={index} className="col-span-1">
          <ProgressBar {...val} />
        </div>
      ))}
    </div>
  );
}

export default Percentage;
