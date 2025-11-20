"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";

interface MovieCardProps {
  image: string;
  title: string;
  year: number;
  imdbScore: number;
  baseScore: number;
}

export default function MovieCard({ image, title, year, imdbScore, baseScore }: MovieCardProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{year}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <Image src={image} alt={title} width={200} height={300} className="rounded" />
        <div className="mt-2 flex gap-4">
          <span>IMDb: {imdbScore.toFixed(1)}</span>
          <span>Base: {baseScore.toFixed(1)}</span>
        </div>
      </CardContent>
    </Card>
  );
}
