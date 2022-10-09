import React from 'react';
import api from '../utils/Api';

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      userDescription : '',
      userAvatar: '',
      cards: []
    };
  }

  componentDidMount() {
      Promise.all([api.getUserInfo(), api.getInitialCards()])
        .then(([dataUser, dataCards]) => {
          this.setState({
            userName: dataUser.name,
            userDescription : dataUser.about,
            userAvatar: dataUser.avatar,
            cards: dataCards.slice(0, 6)
          });
        })
        .catch(err => console.log(err));
  }

  render() {
    return (
      <main className="content page__section">
        <section className="profile content__profile">
          <div className="profile__left-column">
            <div className="profile__edit-avatar">
              <img className="profile__avatar" src={this.state.userAvatar} alt="Аватар пользователя" onClick={this.props.onEditAvatar} />
            </div>
            <div className="profile__info">
              <h1 className="profile__name">{this.state.userName}</h1>
              <button type="button" className="profile__edit-button button" aria-label="Редактировать" onClick={this.props.onEditProfile}></button>
              <p className="profile__about-me">{this.state.userDescription}</p>
            </div>
          </div>
          <button type="button" className="profile__add-button button" aria-label="Добавить" onClick={this.props.onAddPlace}></button>
        </section>
        <section className="cards-section content__cards-section">
          <ul className="cards">
            {this.state.cards.map((card) => (
              <li className="card" key={card._id}>
                <img className="card__image" src={card.link} alt="#" />
                <div className="card__group">
                  <h2 className="card__title">{card.name}</h2>
                  <div className="card__like">
                    <button type="button" className="card__button button" aria-label="Мне нравится"></button>
                    <p className="card__counter-like">{card.likes.length}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    )
  }
}