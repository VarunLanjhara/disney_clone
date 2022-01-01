import Head from "next/head";
import Image from "next/image";
import React from "react";
import { getSession, signIn, signOut, useSession } from "next-auth/client";

const Hero = () => {
  return (
    <section className="relative">
      <Head>
        <title>Log in | Disney Clone</title>
        <link rel="icon" href="/shit.jpg" />
      </Head>
      <div className="relative min-h-[calc(100vh-72px)]">
        <Image
          src="/images/hero-background.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="absolute flex flex-col space-y-3 top-1/4 w-full justify-center items-center max-w-screen-sm mx-auto p-8 -mt-16">
          <Image
            src="/images/cta-logo-one.svg"
            width="600"
            height="150"
            objectFit="contain"
          />
          <button className="bg-blue-600 uppercase text-xl tracking-wide font-extrabold py-4 px-6 w-full rounded hover:bg-[#0485ee]" onClick={() => {
            signIn()
          }}>
            Get all there
          </button>
          <p className="text-xs text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
          </p>
          <Image
            src="/images/cta-logo-two.png"
            width="600"
            height="70"
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
