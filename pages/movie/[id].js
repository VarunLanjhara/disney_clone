import React, { useEffect } from "react";
import { getSession,useSession } from "next-auth/client";
import { useRouter } from "next/router";

const Movie = ({ result }) => {
  const router = useRouter();
  const [session] = useSession();
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, []);
  return (
    <div>
      <h1>Movie go brr</h1>
    </div>
  );
};

export default Movie;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const { id } = context.query;

  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`
  ).then((response) => response.json());

  return {
    props: {
      session,
      result: request,
    },
  };
}
