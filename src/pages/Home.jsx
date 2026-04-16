import React from "react";
import Header from "../components/Header";
import Homelist from "../components/home/Homelist";
import { trending_movies } from "../data/trending_movies";
import { top_shows } from "../data/top_shows";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="container">
        <Homelist title="Trending" items={trending_movies} />
        <Homelist title="Top movies" items={top_shows} />
      </main>
    </div>
  );
}
