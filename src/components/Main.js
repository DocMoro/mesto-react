import React from 'react';

export default class Main extends React.Component {

  handleEditAvatarClick() {
    const popupAvatar = document.querySelector('.page__avatar-popup');
    popupAvatar.classList.add('popup_active');
  }

  handleEditProfileClick() {
    const popupEdit = document.querySelector('.page__edit-popup');
    popupEdit.classList.add('popup_active');
  }

  handleAddPlaceClick() {
    const popupAdd = document.querySelector('.page__add-popup');
    popupAdd.classList.add('popup_active');
  }

  render() {
    return (
      <main className="content page__section">
        <section className="profile content__profile">
          <div className="profile__left-column">
            <div className="profile__edit-avatar">
              <img className="profile__avatar" src="#" alt="Аватар пользователя" onClick={this.handleEditAvatarClick} />
            </div>
            <div className="profile__info">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button type="button" className="profile__edit-button button" aria-label="Редактировать" onClick={this.handleEditProfileClick}></button>
              <p className="profile__about-me">Исследователь океана</p>
            </div>
          </div>
          <button type="button" className="profile__add-button button" aria-label="Добавить" onClick={this.handleAddPlaceClick}></button>
        </section>
        <section className="cards-section content__cards-section">
          <ul className="cards">
          </ul>
        </section>
      </main>
    )
  }
}