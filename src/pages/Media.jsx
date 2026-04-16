import React from "react";
import { useState, useEffect} from "react";
import MediaList from "../components/MediaList";

export default function Media() {
  const [movies, setMovies] = useState([]);
  const apikey = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`;

  useEffect(() => {
    fetch(`${url}`)
    .then(res => res.json())
    .then(data => setMovies(data.results))
  })

  return (
    <div className="media-page">
      <main className="container">
        <section className="page-header">
          <h1>Catalogue complet</h1>
          <p>Explorez tous les films et séries disponibles sur Seeflix.</p>
        </section>
        <MediaList items={movies} />
      </main>
    </div>
  );
}
