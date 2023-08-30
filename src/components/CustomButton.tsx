"use client"

import { CustomButtonProps } from "@/types"
import { HiOutlineArrowRight } from "react-icons/hi"

export default function CustomButton({title, btnType, containerStyles, textStyles, rightIcon, isDisabled, handleClick}: CustomButtonProps) {
  return (
    <button
    disabled={false}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>
        {title}
      </span>
      {rightIcon && (
        <div className="relative w-6 h-6 bg-yellow-300/50 flex items-center justify-center rounded-md">
          <HiOutlineArrowRight size={16} className="text-black"/>
        </div>
      )}
    </button>
  )
}
