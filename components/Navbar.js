import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import {
  HomeIcon,
  SearchIcon,
  PlusIcon,
  StarIcon,
} from "@heroicons/react/solid";

const Navbar = () => {
  const router = useRouter();
  return (
    <header className="sticky bg-[#040714] top-0 z-[1000] flex items-center px-10 sm:px-12 h-[72px]">
      <Image
        src="/images/logo.svg"
        alt=""
        width={80}
        height={80}
        className="cursor-pointer top-[-12px]"
        onClick={() => {
          router.push("/");
        }}
      />
      <div className="hidden ml-10 md:flex items-center space-x-6">
        <a className="flex items-center space-x-2 cursor-pointer text-white group">
          <HomeIcon className="h-4" />
          <span className="relative uppercase text-sm font-medium before:bg-[#f9f9f9] before:rounded-bl before:-bottom-1.5 before:h-0.5 before:inset-x-0 before:absolute before:transform before:origin-left before:scale-x-0 before:transition-all before:duration-200 group-hover:before:scale-x-100">
            Home
          </span>
        </a>
        <a className="flex items-center space-x-2 cursor-pointer text-white group">
          <SearchIcon className="h-4" />
          <span className="relative uppercase text-sm font-medium before:bg-[#f9f9f9] before:rounded-bl before:-bottom-1.5 before:h-0.5 before:inset-x-0 before:absolute before:transform before:origin-left before:scale-x-0 before:transition-all before:duration-200 group-hover:before:scale-x-100">
            Search
          </span>
        </a>
        <a className="flex items-center space-x-2 cursor-pointer text-white group">
          <PlusIcon className="h-4" />
          <span className="relative uppercase text-sm font-medium before:bg-[#f9f9f9] before:rounded-bl before:-bottom-1.5 before:h-0.5 before:inset-x-0 before:absolute before:transform before:origin-left before:scale-x-0 before:transition-all before:duration-200 group-hover:before:scale-x-100">
            Watchlist
          </span>
        </a>
        <a className="flex items-center space-x-2 cursor-pointer text-white group">
          <StarIcon className="h-4" />
          <span className="relative uppercase text-sm font-medium before:bg-[#f9f9f9] before:rounded-bl before:-bottom-1.5 before:h-0.5 before:inset-x-0 before:absolute before:transform before:origin-left before:scale-x-0 before:transition-all before:duration-200 group-hover:before:scale-x-100">
            Originals
          </span>
        </a>
        <a className="flex items-center space-x-2 cursor-pointer text-white group">
          <img src="/images/movie-icon.svg" alt="" className="h-5" />
          <span className="relative uppercase text-sm font-medium before:bg-[#f9f9f9] before:rounded-bl before:-bottom-1.5 before:h-0.5 before:inset-x-0 before:absolute before:transform before:origin-left before:scale-x-0 before:transition-all before:duration-200 group-hover:before:scale-x-100">
            Movies
          </span>
        </a>
        <a className="flex items-center space-x-2 cursor-pointer text-white group">
          <img src="/images/series-icon.svg" alt="" className="h-5" />
          <span className="relative uppercase text-sm font-medium before:bg-[#f9f9f9] before:rounded-bl before:-bottom-1.5 before:h-0.5 before:inset-x-0 before:absolute before:transform before:origin-left before:scale-x-0 before:transition-all before:duration-200 group-hover:before:scale-x-100">
            Series
          </span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
