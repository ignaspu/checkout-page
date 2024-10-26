import React from "react";

const Gsvg: React.FC = () => {
  return (
    <svg
      width="37"
      height="24"
      viewBox="0 0 37 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Rectangle SVG */}
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

      {/* Centered Icon SVG */}
      <svg
        x="3.5" // Center horizontally: (37 - 30) / 2
        y="2" // Center vertically: (24 - 20) / 2
        width="30"
        height="20"
        viewBox="0 0 30 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="g13">
          <g id="XMLID_328_">
            <path
              id="rect19"
              d="M18.9567 2.89511L11.21 2.92175L11.4447 17.1041L19.1915 17.0775L18.9567 2.89511Z"
              fill="#FF5F00"
            />
            <path
              id="XMLID_330_"
              d="M11.7197 10.0415C11.6717 7.15694 12.9639 4.59387 14.9879 2.93134C13.4602 1.73251 11.5449 1.01161 9.46865 1.01872C4.54998 1.03557 0.637667 5.08761 0.720617 10.0792C0.803567 15.0708 4.8501 19.0956 9.76878 19.0787C11.845 19.0716 13.7361 18.3377 15.2238 17.1285C13.1452 15.5051 11.7676 12.9261 11.7197 10.0415Z"
              fill="#EB001B"
            />
            <path
              id="path22"
              d="M29.6808 9.92054C29.7638 14.9121 25.8515 18.9642 20.9328 18.981C18.8566 18.9881 16.9413 18.2672 15.4135 17.0684C17.4622 15.4058 18.7297 12.8428 18.6818 9.95821C18.6339 7.07363 17.2566 4.51971 15.1776 2.87124C16.6653 1.66207 18.5564 0.928137 20.6327 0.921026C25.5513 0.90418 29.5983 4.95405 29.6808 9.92054Z"
              fill="#F79E1B"
            />
          </g>
        </g>
      </svg>
    </svg>
  );
};

export default Gsvg;