import React from "react";

export default function Card({onCardClick, card}) {
  const {link, name, likes} = card;

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="card">
      <img className="card__image" src={link} alt={name} onClick={handleClick}/>
      <div className="card__group">
        <h2 className="card__title">{name}</h2>
        <div className="card__like">
          <button type="button" className="card__button button" aria-label="Мне нравится"></button>
          <p className="card__counter-like">{likes.length}</p>
        </div>
      </div>
    </li>
  )
}