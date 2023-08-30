"use client";

import { useEffect, useState } from "react";
import { CarProps } from "@/types";
import { calculateCarRent, getRandomImageCar } from "@/utils";
import Image from "next/image";
import { CarDetails, CustomButton } from ".";
import { PiSteeringWheelFill } from 'react-icons/pi'
import { GiCarWheel, GiGasPump } from 'react-icons/gi'

interface CardCardProps {
  car: CarProps;
}

export default function CarCard({ car }: CardCardProps) {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const [isOpen, setIsOpen] = useState(false);

  const carRent = calculateCarRent(city_mpg, year);

  const [randomCarGroup, setRandomCarGroup] = useState('');
  
  useEffect(() => {
    const setRandomCar = getRandomImageCar();
    setRandomCarGroup(setRandomCar)
  }, [])

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={`/cars/${randomCarGroup}/car-catalogue.png`}
          alt="car model"
          priority
          fill
          className="object-contain w-10 h-10"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray-450">
          <div className="flex flex-col justify-center items-center gap-2">
            <PiSteeringWheelFill size={24} className="text-indigo-500 object-contain"/>
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <GiCarWheel size={24} className="text-orange-500 object-contain"/>
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <GiGasPump size={24} className="text-green-600 object-contain"/>
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-4 rounded-full bg-yellow-500 shadow-sm shadow-yellow-800"
            textStyles="text-black text-[14px] leading-[17px] font-bold"
            rightIcon
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} carImage={randomCarGroup}/>
    </div>
  );
}
