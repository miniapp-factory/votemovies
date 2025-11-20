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
    <ul className="space-y-2">
      {movies.map((movie) => (
        <li key={movie.id}>
          <a
            href={movie.imdbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {movie.title} ({movie.year})
          </a>
        </li>
      ))}
    </ul>
  );
}
