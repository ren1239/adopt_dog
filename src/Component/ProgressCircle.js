import React from "react";

function ProgressCircle({ value }) {
  // Convert the value (0-10) to a percentage (0-100)
  const progress = (value / 10) * 100;

  // Calculate the strokeDashoffset for the SVG circle
  const radius = 50; // Radius of the circle
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className=" w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#e5e7eb" // Gray stroke (background circle)
          strokeWidth="10"
          strokeLinecap="round" // Add rounded ends
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#FF995C" // Primary color stroke (progress)
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 60 60)" // Rotate to start from the top
          strokeLinecap="round" // Add rounded ends
        />
        <text
          x="60"
          y="60"
          textAnchor="middle"
          stroke="#333"
          strokeWidth="1px"
          dy=".3em"
          fill="#333"
          style={{ fontSize: "16px" }}
        >
          {value}/10
        </text>
      </svg>
    </div>
  );
}

export default ProgressCircle;
