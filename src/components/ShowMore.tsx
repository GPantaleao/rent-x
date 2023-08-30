"use client"

import { ShowMoreProps } from "@/types"
import { useRouter } from "next/navigation"
import { CustomButton } from ".";
import { updateSearchParams } from "@/utils";

export default function ShowMore({pageNumber, isNext}: ShowMoreProps) {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathname = updateSearchParams("limit", String(newLimit));

    router.push(newPathname, { scroll: false });
  }

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton 
          title="Show More"
          btnType="button"
          containerStyles="bg-yellow-500 rounded-full text-black font-bold shadow-sm shadow-yellow-800"
          handleClick={handleNavigation}
        />
      )}
    </div>
  )
}
