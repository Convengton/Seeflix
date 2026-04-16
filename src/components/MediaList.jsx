import React from "react";
import MediaCard from "./MediaCard";

export default function MediaList({ items}) {
  return (
    <section className="media-list">
      <div className="media-list__header">
        <h3>Popular Movies</h3>
      </div>
      <div className="media-list__grid">
        {items.map((item) => (
          <MediaCard
            key={item.id}
            title={item.title}
            cover={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            rating={item.vote_average}
          />
        ))}
      </div>
    </section>
  );
}
