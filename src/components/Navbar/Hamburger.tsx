import React from "react";

export default function Hamburger({
  isOpen,
  setIsOpen,
  className,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}) {
  return (
    <button
      id="hamburger"
      className={`relative focus:outline-none h-[30px] ${className}`}
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      aria-controls="navbarDefault"
      aria-expanded={isOpen}
      aria-label="Toggle navigation">
      <span
        className={`block bg-white h-[3px] w-[25px] my-[4px] transition-transform duration-500 ease-in-out ${
          isOpen ? "absolute top-[10px] rotate-[135deg] opacity-90" : ""
        }`}></span>
      <span
        className={`block bg-white h-[3px] w-[25px] my-[4px]  ${
          isOpen && "invisible"
        }`}></span>
      <span
        className={`block bg-white h-[3px] w-[25px] my-[4px] transition-transform duration-500 ease-in-out ${
          isOpen ? "absolute top-[10px] rotate-[-135deg] opacity-90" : ""
        }`}></span>
    </button>
  );
}
