"use client";

import { FormEvent, useState } from "react";
import { SearchManufacturer } from ".";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoCarSport } from "react-icons/io5"
import { FaMagnifyingGlass } from "react-icons/fa6"

const SearchButton = ({ otherClasses }: { otherClasses?: string }) => (
  <button type="submit" className={`p-3 bg-white rounded-full -ml-3 z-10 max-sm:-ml-5 ${otherClasses}`}>
    <FaMagnifyingGlass size={22} className="object-contain text-indigo-500"/>
  </button>
);

export default function SearchBar() {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const router = useRouter()

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === "" && model === ""){
      return alert("Please fill in the search bar")
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set('model', model)
    } else {
      searchParams.delete('model')
    }

    if (manufacturer) {
      searchParams.set('manufacturer', manufacturer)
    } else {
      searchParams.delete('manufacturer')
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`

    router.push(newPathname, { scroll: false });
  }

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <div className="absolute top-[16px]">
          <IoCarSport size={20} className="ml-4 text-black-100/70 object-contain"/>
        </div>
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
}
