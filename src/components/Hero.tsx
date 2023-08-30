"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

export default function Hero() {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Fing, book or rent a car — quickly and super easily!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-yellow-500 text-black font-bold rounded-full mt-10 shadow-sm shadow-yellow-800"
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill sizes="100vw" className="object-contain"/>
        </div>
        <div className="hero__image-overlay"/>
      </div>
    </div>
  );
}
