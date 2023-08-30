import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filter: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filter;

  const headers = {
    "X-RapidAPI-Key": process.env.API_KEY!,
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const getRandomImageCar = () => {
  const carGroups = ["honda", "toyota", "volkswagen", "chevrolet", "bmw", "hyundai"];
  const randomIndex = Math.floor(Math.random() * carGroups.length);
  return carGroups[randomIndex];
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  if (type) {
    searchParams.set(type, value);
  } else {
    searchParams.delete(type);
  }

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname
};
