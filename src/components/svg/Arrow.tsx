import React from "react";

interface ArrowProps {
  open: boolean;
}

const Arrow: React.FC<ArrowProps> = ({ open }) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 0.3s ease",
      }}
    >
      <g id="16 / Arrow">
        <path
          id="Vector"
          d="M5.99998 9C5.8118 9 5.62364 8.92797 5.48017 8.78422L0.965399 4.25832C0.6782 3.97041 0.6782 3.50363 0.965399 3.21584C1.25248 2.92805 1.71803 2.92805 2.00525 3.21584L5.99998 7.22061L9.99474 3.21598C10.2819 2.92819 10.7474 2.92819 11.0345 3.21598C11.3218 3.50377 11.3218 3.97055 11.0345 4.25846L6.51979 8.78436C6.37625 8.92814 6.18809 9 5.99998 9Z"
          fill="#828282"
        />
      </g>
    </svg>
  );
};

export default Arrow;
