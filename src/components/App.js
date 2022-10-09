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

  closeAllPopups() {
    this.setState({
      isAddPlacePopupOpen: false,
      isEditProfilePopupOpen: false,
      isEditAvatarPopupOpen: false
    });
  }

  render () {
    return (
      <div className="page">
        <Header />
        <Main onEditProfile={this.handleEditProfileClick} onAddPlace={this.handleAddPlaceClick} onEditAvatar={this.handleEditAvatarClick} />
        <Footer />
        <PopupWithForm name="edit" title="Редактировать профиль" isOpen={this.state.isEditProfilePopupOpen} onClose={this.closeAllPopups}/>
        <PopupWithForm name="add" title="Новое место" isOpen={this.state.isAddPlacePopupOpen} onClose={this.closeAllPopups}/>
        <PopupWithForm name="delete" title="Вы уверены?" />
        <PopupWithForm name="avatar" title="Обновить аватар" isOpen={this.state.isEditAvatarPopupOpen} onClose={this.closeAllPopups}/>
        <ImagePopup />
      </div>
    );
  }
}
