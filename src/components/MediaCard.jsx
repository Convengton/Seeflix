import React from "react";

export default function MediaCard({ title, cover, rating }) {
  return (
    <div className={`media-card media-card`}>
      <div className="media-card__cover">
        <img src={cover} alt={title} />
      </div>
      <div className="media-card__info">
        <h4 className="media-card__title">{title}</h4>
        <div className="media-card__meta">
          <span className="media-card__rating">⭐ {rating}</span>
        </div>
      </div>
    </div>
  );
}
