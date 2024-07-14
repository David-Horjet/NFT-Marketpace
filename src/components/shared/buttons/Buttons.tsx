import React from "react";
import { ButtonProps } from "../../../types/Interface";

export const ButtonBg: React.FC<ButtonProps> = ({ children, disabled, onClick, className, ...rest }) => {
  return (
    <>
      <button
        className={`w-full ${disabled ? "" : ""
          } rounded-2xl items-center cursor-pointer justify-center inline-flex text-center text-white text-base font-medium leading-normal ${className}`}
        onClick={onClick}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};

export const ButtonOutline: React.FC<ButtonProps> = ({ children, disabled, onClick, className, ...rest }) => {
  return (
    <>
      <button
        className={`w-full ${disabled ? "" : ""
          } border-bc border-2 rounded-3xl items-center cursor-pointer justify-center inline-flex text-center text-white text-base font-medium leading-normal ${className}`}
        onClick={onClick}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};

export const ButtonOutlineWhite: React.FC<ButtonProps> = ({ children, disabled, onClick, className, ...rest }) => {
  return (
    <>
      <button
        className={`w-full ${disabled ? "" : ""
          } border-[#7A798A] font-semibold border rounded-3xl items-center cursor-pointer justify-center inline-flex text-center text-white text-base leading-normal ${className}`}
        onClick={onClick}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};
