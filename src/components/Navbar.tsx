import Image from "next/image";
import Link from "next/link";
import { CustomButton } from ".";

export default function Navbar() {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href={""} className="flex justify-center items-center">
          <Image src={"/logo.svg"} alt="Logo" width={186} height={18} className="w-auto h-auto object-contain"/>
        </Link>

        <CustomButton 
          title="Sign In"
          btnType="button"
          containerStyles="text-yellow-300 rounded-full bg-black-100 min-w-[130px] shadow-sm shadow-black-100"
        />
      </nav>
    </header>
  )
}
