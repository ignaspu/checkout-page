import React from "react";

const Four: React.FC = () => {
  return (
    <svg
      width="37"
      height="24"
      viewBox="0 0 37 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Rectangle */}
      <rect
        x="0.25"
        y="0.25"
        width="36.5"
        height="23.5"
        fill="white"
        stroke="#E0E0E0"
        strokeWidth="0.5"
        rx="3" // optional rounded corners
      />

      {/* Centered Text */}
      <text
        x="50%" // Center horizontally
        y="50%" // Center vertically
        dominantBaseline="middle"
        textAnchor="middle"
        fill="var(--CC-Shopify-Dark-gray, #333)"
        style={{
          fontFamily: "Roboto",
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: "20px",
          fontStyle: "normal",
        }}
      >
        +4
      </text>
    </svg>
  );
};

export default Four;
