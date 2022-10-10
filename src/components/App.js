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
    this.closeAllPopups = this.closeAllPopups.bind(this);
    this.handleCardClick = this.handleCardClick.bind(this);

    this.state = {
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
      selectedCard: {name: '', link: ''}
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

  handleCardClick(card) {
    this.setState({
      selectedCard: card
    })
  }

  closeAllPopups() {
    this.setState({
      isAddPlacePopupOpen: false,
      isEditProfilePopupOpen: false,
      isEditAvatarPopupOpen: false,
      selectedCard: {name: '', link: ''}
    });
  }

  render () {
    return (
      <div className="page">
        <Header />
        <Main onEditProfile={this.handleEditProfileClick} onAddPlace={this.handleAddPlaceClick} onEditAvatar={this.handleEditAvatarClick} onCardClick={this.handleCardClick}/>
        <Footer />
        <PopupWithForm name="edit" title="Редактировать профиль" isOpen={this.state.isEditProfilePopupOpen} onClose={this.closeAllPopups} buttonText="Подтвердить">
          <input name="cardName" type="text" className="popup__input popup__input_field_card-name" placeholder="Имя" minLength="2" maxLength="30" required />
          <span className="popup__input-error cardName-error"></span>
          <input name="cardLink" type="url" className="popup__input popup__input_field_card-link" placeholder="О себе" required />
        </ PopupWithForm>
        <PopupWithForm name="add" title="Новое место" isOpen={this.state.isAddPlacePopupOpen} onClose={this.closeAllPopups} buttonText="Создать">
          <input name="cardName" type="text" className="popup__input popup__input_field_card-name" placeholder="Название" minLength="2" maxLength="30" required />
          <span className="popup__input-error cardName-error"></span>
          <input name="cardLink" type="url" className="popup__input popup__input_field_card-link" placeholder="Ссылка на картинку" required />
        </ PopupWithForm>
        <PopupWithForm name="delete" title="Вы уверены?" buttonText="Удалить"/>
        <PopupWithForm name="avatar" title="Обновить аватар" isOpen={this.state.isEditAvatarPopupOpen} onClose={this.closeAllPopups} buttonText="Добавить">
          <input name="cardLink" type="url" className="popup__input popup__input_field_card-link" placeholder="Ссылка на картинку" required />
        </ PopupWithForm>
        <ImagePopup card={this.state.selectedCard} onClose={this.closeAllPopups}/>
      </div>
    );
  }
}
