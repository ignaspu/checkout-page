import React from "react";

const Amex: React.FC = () => {
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

      {/* Icon SVG */}
      <svg
        width="35"
        height="24"
        viewBox="0 0 35 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Payment Method/Amex">
          <rect
            id="BASE"
            x="0.449514"
            y="0.249563"
            width="34.3009"
            height="23.5009"
            rx="2.7452"
            fill="white"
            stroke="#E0E0E0"
            stroke-width="0.499127"
          />
          <path
            id="AMEX"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.84286 8.5L3.67993 15.7467H7.46641L7.93582 14.5913H9.00879L9.4782 15.7467H13.646V14.8649L14.0174 15.7467H16.1734L16.5447 14.8462V15.7467H25.2127L26.2667 14.6213L27.2536 15.7467L31.7057 15.7561L28.5328 12.1436L31.7057 8.5H27.3227L26.2967 9.60463L25.3408 8.5H15.9112L15.1015 10.3704L14.2728 8.5H10.4942V9.35186L10.0739 8.5H6.84286ZM19.7868 9.52903H24.7644L26.2868 11.2316L27.8583 9.52903H29.3807L27.0675 12.1426L29.3807 14.726H27.7892L26.2668 13.0036L24.6873 14.726H19.7868V9.52903ZM21.016 11.555V10.6057V10.6048H24.1218L25.477 12.1229L24.0618 13.6493H21.016V12.613H23.7314V11.555H21.016ZM7.57559 9.52903H9.42129L11.5193 14.4431V9.52903H13.5412L15.1616 13.0524L16.655 9.52903H18.6668V14.729H17.4427L17.4327 10.6543L15.648 14.729H14.553L12.7583 10.6543V14.729H10.24L9.76259 13.5633H7.18324L6.7068 14.728H5.35752L7.57559 9.52903ZM7.62363 12.4855L8.47343 10.4088L9.32223 12.4855H7.62363Z"
            fill="#1F72CD"
          />
        </g>
      </svg>
    </svg>
  );
};

export default Amex;
