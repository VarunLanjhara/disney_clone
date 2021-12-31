import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Disney Clone</title>
        <link rel="icon" href="/shit.png" />
      </Head>
      <Navbar />
    </div>
  );
}
