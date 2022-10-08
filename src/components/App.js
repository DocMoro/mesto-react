import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

export default class App extends React.Component  {
  render () {
    return (
      <div className="page">
        <Header />
        <Main />
        <Footer />
        <PopupWithForm name="edit" title="Редактировать профиль" />
        <PopupWithForm name="add" title="Новое место" />
        <PopupWithForm name="delete" title="Вы уверены?" />
        <PopupWithForm name="avatar" title="Обновить аватар" />
        <ImagePopup />
        <template className="template-card">
          <li className="card">
            <img className="card__image" src="#" alt="#" />
            <div className="card__group">
              <h2 className="card__title"></h2>
              <div className="card__like">
                <button type="button" className="card__button button" aria-label="Мне нравится"></button>
                <p className="card__counter-like">1</p>
              </div>
            </div>
          </li>
        </template>
      </div>
    );
  }
}
