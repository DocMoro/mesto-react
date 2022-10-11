import React, { useEffect, useState } from 'react';
import api from '../utils/Api';
import Card from './Card';

export default function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([dataUser, dataCards]) => {
      setUserName(dataUser.name);
      setUserDescription(dataUser.about);
      setUserAvatar(dataUser.avatar);
      setCards(dataCards.slice(0, 21));
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <main className="content page__section">
      <section className="profile content__profile">
        <div className="profile__left-column">
          <div className="profile__edit-avatar">
            <img className="profile__avatar" src={userAvatar} alt="Аватар пользователя" onClick={onEditAvatar} />
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button type="button" className="profile__edit-button button" aria-label="Редактировать" onClick={onEditProfile}></button>
            <p className="profile__about-me">{userDescription}</p>
          </div>
        </div>
        <button type="button" className="profile__add-button button" aria-label="Добавить" onClick={onAddPlace}></button>
      </section>
      <section className="cards-section content__cards-section">
        <ul className="cards">
          {cards.map((card) => (
            <Card card={card} onCardClick={onCardClick} key={card._id}/>
          ))}
        </ul>
      </section>
    </main>
  )
}