import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default class App extends React.Component  {
  render () {
    return (
      <div className="page">
        <Header />
        <Main />
        <Footer />
        <div className="popup page__edit-popup">
          <div className="popup__container">
            <button type="button" className="popup__button-close button" aria-label="Закрыть"></button>
            <form name="edit-form" className="popup__form">
              <h2 className="popup__title">Редактировать профиль</h2>
              <input name="profileName" type="text" className="popup__input popup__input_field_name" placeholder="Имя" minLength="2" maxLength="40" required />
              <span className="popup__input-error profileName-error"></span>
              <input name="profileInfo" type="text" className="popup__input popup__input_field_about-me" placeholder="О себе" minLength="2" maxLength="200" required />
              <span className="popup__input-error profileInfo-error"></span>
              <button type="submit" className="popup__button button">Сохранить</button>
            </form>
          </div>
        </div>
        <div className="popup page__add-popup">
          <div className="popup__container">
            <button type="button" className="popup__button-close button" aria-label="Закрыть"></button>
            <form name="add-form" className="popup__form">
              <h2 className="popup__title">Новое место</h2>
              <input name="cardName" type="text" className="popup__input popup__input_field_card-name" placeholder="Название" minLength="2" maxLength="30" required />
              <span className="popup__input-error cardName-error"></span>
              <input name="cardLink" type="url" className="popup__input popup__input_field_card-link" placeholder="Ссылка на картинку" required />
              <span className="popup__input-error cardLink-error"></span>
              <button type="submit" className="popup__button button">Сохранить</button>
            </form>
          </div>
        </div>
        <div className="popup popup_card page__card-popup">
          <div className="popup__card-container">
            <button type="button" className="popup__button-close button" aria-label="Закрыть"></button>
            <img className="popup__image" src="#" alt="#" />
            <h2 className="popup__subtitle"></h2>
          </div>
        </div>
        <div className="popup page__delete-popup">
          <div className="popup__delete-container">
            <button type="button" className="popup__button-close button" aria-label="Закрыть"></button>
            <h2 className="popup__delete-title">Вы уверены?</h2>
            <button type="button" className="popup__button button">Да</button>
          </div>
        </div>
        <div className="popup page__avatar-popup">
          <div className="popup__avatar-container">
            <button type="button" className="popup__button-close button" aria-label="Закрыть"></button>
            <form name="avatar-form" className="popup__form">
              <h2 className="popup__avatar-title">Обновить аватар</h2>
              <input name="avatarLink" type="url" className="popup__input " placeholder="Ссылка на картинку" required />
              <span className="popup__input-error avatarLink-error"></span>
              <button type="submit" className="popup__button button">Сохранить</button>
            </form>
          </div>
        </div>
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
