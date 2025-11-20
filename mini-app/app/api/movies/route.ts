import { NextResponse } from "next/server";

export async function GET() {
  const movies = Array.from({ length: 100 }, (_, i) => ({
    id: `${i + 1}`,
    image: `/images/movie-${i + 1}.jpg`,
    title: `Movie Title ${i + 1}`,
    year: 2000 + (i % 20),
    imdbScore: parseFloat((Math.random() * 4 + 6).toFixed(1)),
    baseScore: parseFloat((Math.random() * 4 + 6).toFixed(1)),
  }));
  return NextResponse.json(movies);
}
