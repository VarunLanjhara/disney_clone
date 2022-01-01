import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center mt-10 gap-6 px-8 max-w-[1400px] mx-auto">
        <div className="flex relative w-52 h-32 sm:w-64 sm:h-36 border-[3px] border-[#f9f9f9] border-opacity-10 rounded-lg cursor-pointer shadow-xl overflow-hidden  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300 group">
        <Image src="/images/disnep.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src="/videos/disney.mp4" type="video/mp4" />
        </video>
      </div>
         <div className="flex relative w-52 h-32 sm:w-64 sm:h-36 border-[3px] border-[#f9f9f9] border-opacity-10 rounded-lg cursor-pointer shadow-xl overflow-hidden  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300 group">
        <Image src="/images/pixar.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src="/videos/pixar.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="flex relative w-52 h-32 sm:w-64 sm:h-36 border-[3px] border-[#f9f9f9] border-opacity-10 rounded-lg cursor-pointer shadow-xl overflow-hidden  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300 group">
        <Image src="/images/marvel.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src="/videos/marvel.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="flex relative w-52 h-32 sm:w-64 sm:h-36 border-[3px] border-[#f9f9f9] border-opacity-10 rounded-lg cursor-pointer shadow-xl overflow-hidden  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300 group">
        <Image src="/images/starwars.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src="/videos/star-wars.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="flex relative w-52 h-32 sm:w-64 sm:h-36 border-[3px] border-[#f9f9f9] border-opacity-10 rounded-lg cursor-pointer shadow-xl overflow-hidden  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300 group">
        <Image
          src="/images/national-geographic.png"
          layout="fill"
          objectFit="cover"
        />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src="/videos/national-geographic.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Logo;
