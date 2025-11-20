"use client";

import { useEffect, useState } from "react";
import MovieCard from "./movie-card";

interface Movie {
  id: string;
  image: string;
  title: string;
  year: number;
  imdbScore: number;
  baseScore: number;
}

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch("/api/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
}
