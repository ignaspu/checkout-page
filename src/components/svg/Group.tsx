import React from "react";

const Group: React.FC = () => {
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

      {/* Icon SVG centered in the rectangle */}
      <svg
        x="6.5"
        y="3"
        width="24"
        height="18"
        viewBox="0 0 24 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group 1">
          <path
            id="Vector"
            d="M23.337 9.07838C23.337 3.70941 18.8557 -0.00149744 13.9456 0.000122712H9.72014C4.75151 -0.00165946 0.661865 3.71054 0.661865 9.07838C0.661865 13.9891 4.75162 18.0238 9.72014 18H13.9456C18.8553 18.0236 23.337 13.9878 23.337 9.07838Z"
            fill="#0079BE"
          />
          <path
            id="Vector_2"
            d="M9.74678 0.759644C5.20662 0.761048 1.52774 4.44862 1.52612 8.99974C1.52726 13.5501 5.2063 17.2371 9.74678 17.2388C14.288 17.2374 17.968 13.5502 17.9685 8.99974C17.9679 4.44851 14.2881 0.761264 9.74678 0.759644Z"
            fill="white"
          />
          <path
            id="Vector_3"
            d="M4.55078 8.97931C4.5551 6.75538 5.94125 4.85893 7.89586 4.10535V13.8522C5.94125 13.099 4.55505 11.2036 4.55078 8.97936V8.97931ZM11.6254 13.8546V4.10562C13.5809 4.85742 14.9692 6.75494 14.9727 8.9799C14.9691 11.2056 13.5809 13.1017 11.6254 13.8549V13.8546Z"
            fill="#0079BE"
          />
        </g>
      </svg>
    </svg>
  );
};

export default Group;
