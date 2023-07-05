"use client";
import React from "react";

interface ButtonProps {
  name: string;
  label: string;
  color: string;
}

const Button: React.FC<ButtonProps> = ({ name, color, label }) => {
  // use name as idenifer for which stock is being sold or bought rather than id or set up things to have an id with each stock

  return (
    <button className={`text-xs bg-[#F4F5FA] py-2 px-[14px] w-[49px] h-[32px] `} style={{ color: color }}>
      {label}
    </button>
  );
};

export default Button;
