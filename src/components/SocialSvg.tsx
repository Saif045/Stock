"use client"
import React from "react";
interface SocialSvgProps {
  d1: string;
  d2: string;
  id: string;
}
const SocialSvg:React.FC<SocialSvgProps> = ({ d1, d2, id }) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id={id}>
      <g>
        <g>
          <path id="Vector" d={d1} fill="#9CA5AF" />
          <path id="Vector_2" d={d2} fill="white" />
        </g>
      </g>
    </svg>
  );
};

export default SocialSvg;
