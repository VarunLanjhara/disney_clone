import Head from "next/head";
import Navbar from "../components/Navbar";
import { getSession, useSession } from "next-auth/client";
import Hero from "../components/Hero";
import Slider from "../components/Slider";

export default function Home() {
  const [session] = useSession();
  return (
    <div className="">
      <Head>
        <title>Disney Clone</title>
        <link rel="icon" href="/shit.png" />
      </Head>
      <Navbar />
      {!session ? (
        <Hero />
      ) : (
        <main className="">
          <Slider />
        </main>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
