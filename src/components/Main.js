import React from 'react';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="content page__section">
        <section className="profile content__profile">
          <div className="profile__left-column">
            <div className="profile__edit-avatar">
              <img className="profile__avatar" src="#" alt="Аватар пользователя" onClick={this.props.onEditAvatar} />
            </div>
            <div className="profile__info">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button type="button" className="profile__edit-button button" aria-label="Редактировать" onClick={this.props.onEditProfile}></button>
              <p className="profile__about-me">Исследователь океана</p>
            </div>
          </div>
          <button type="button" className="profile__add-button button" aria-label="Добавить" onClick={this.props.onAddPlace}></button>
        </section>
        <section className="cards-section content__cards-section">
          <ul className="cards">
          </ul>
        </section>
      </main>
    )
  }
}