import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const MovieThumbnail = ({ result }) => {
  const router = useRouter();
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="flex min-w-[250px] min-h-[170px] md:min-w-[330px] md:min-h-[210px] rounded-lg overflow-hidden shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300">
      <Image
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        width={330}
        height={210}
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
  );
};

export default MovieThumbnail;
