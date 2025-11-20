import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://www.imdb.com/search/title/?groups=top_100&sort=num_votes,desc"
  );
  const html = await res.text();
  const movieRegex =
    /<td class="titleColumn">.*?<a href="[^"]+" title="[^"]+">([^<]+)<\/a>.*?<span class="secondaryInfo">\((\d{4})\)<\/span>.*?<td class="ratingColumn imdbRating">.*?<strong title="[^"]+">([^<]+)<\/strong>/gs;
  const movies = [];
  let match;
  let id = 1;
  while ((match = movieRegex.exec(html)) !== null && movies.length < 100) {
    const title = match[1].trim();
    const year = parseInt(match[2], 10);
    const imdbScore = parseFloat(match[3]);
    movies.push({
      id: `${id++}`,
      image: `/images/movie-${id - 1}.jpg`,
      title,
      year,
      imdbScore,
      baseScore: 0,
    });
  }
  return NextResponse.json(movies);
}
