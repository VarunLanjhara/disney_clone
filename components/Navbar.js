import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import {
  HomeIcon,
  SearchIcon,
  PlusIcon,
  StarIcon,
} from "@heroicons/react/solid";
import { getSession, signIn, signOut, useSession } from "next-auth/client";

const Navbar = () => {
  const router = useRouter();
  const [session] = useSession();
  return (
    <header className="sticky bg-[#040714] top-0 z-[1000] flex items-center px-10 sm:px-12 h-[72px]">
      <div>
        <Image
          src="/images/logo.svg"
          alt=""
          width={90}
          height={80}
          className="cursor-pointer top-[-12px]"
          onClick={() => {
            router.push("/");
          }}
        />
      </div>
      {session ? (
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
      ) : (
        ""
      )}
      {session ? (
        <img
          src={session.user.image}
          className="ml-auto h-12 w-12 rounded-full object-cover cursor-pointer"
          onClick={() => {
            signOut();
          }}
        />
      ) : (
        <button
          className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200"
          onClick={() => {
            signIn();
          }}
        >
          Login
        </button>
      )}
    </header>
  );
};

export default Navbar;
