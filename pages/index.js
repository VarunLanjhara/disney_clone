import Head from "next/head";
import Navbar from "../components/Navbar";
import { getSession, useSession } from "next-auth/client";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import Logo from "../components/Logo";
import MoviesStuff from "../components/MoviesStuff"
import ShowsStuff from "../components/ShowsStuff";

export default function Home({
  popularMovies,
  popularShows,
  top_ratedShows,
  top_ratedMovies,
}) {
  //accessing props here :)
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
        <main className="relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]">
          <Slider />
          <Logo />
          <MoviesStuff results={popularMovies} title="Popular Movies" />
          <ShowsStuff results={popularShows} title="Popular Shows" />
          <MoviesStuff results={top_ratedMovies} title="Top Rated Movies" />
          <ShowsStuff results={top_ratedShows} title="Top Rated Shows" />
        </main>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const [
    popularMoviesRes,
    popularShowsRes,
    top_ratedMoviesRes,
    top_ratedShowsRes,
  ] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
  ]); //you can fetch multiple stuff with promise
  const [popularMovies, popularShows, top_ratedMovies, top_ratedShows] =
    await Promise.all([
      popularMoviesRes.json(),
      popularShowsRes.json(),
      top_ratedMoviesRes.json(),
      top_ratedShowsRes.json(),
    ]); //doing the thang in json
  return {
    props: {
      session,
      popularMovies: popularMovies.results,
      popularShows: popularShows.results,
      top_ratedMovies: top_ratedMovies.results,
      top_ratedShows: top_ratedShows.results, //now passing stuff here in props
    },
  };
}
