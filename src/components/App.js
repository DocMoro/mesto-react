import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

export default class App extends React.Component  {
  constructor(props) {
    super(props);

    this.handleEditAvatarClick = this.handleEditAvatarClick.bind(this);
    this.handleEditProfileClick = this.handleEditProfileClick.bind(this);
    this.handleAddPlaceClick = this.handleAddPlaceClick.bind(this);

    this.state = {
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false
    };
  }

  handleEditAvatarClick() {
    this.setState({
      isEditAvatarPopupOpen: !this.state.isEditAvatarPopupOpen
    });
  }

  handleEditProfileClick() {
    this.setState({
      isEditProfilePopupOpen: !this.state.isEditProfilePopupOpen
    });
  }

  handleAddPlaceClick() {
    this.setState({
      isAddPlacePopupOpen: !this.state.isAddPlacePopupOpen
    });
  }

  render () {
    return (
      <div className="page">
        <Header />
        <Main onEditProfile={this.handleEditProfileClick} onAddPlace={this.handleAddPlaceClick} onEditAvatar={this.handleEditAvatarClick} />
        <Footer />
        <PopupWithForm name="edit" title="Редактировать профиль" isOpen={this.state.isEditProfilePopupOpen} />
        <PopupWithForm name="add" title="Новое место" isOpen={this.state.isAddPlacePopupOpen} />
        <PopupWithForm name="delete" title="Вы уверены?" />
        <PopupWithForm name="avatar" title="Обновить аватар" isOpen={this.state.isEditAvatarPopupOpen}/>
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
