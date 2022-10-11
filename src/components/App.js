import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

export default function App() {
  const [isEditProfilePopupOpen, setEditProfileClick] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({name: '', link: ''});
  
  function handleEditProfileClick() {
    setEditProfileClick(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditProfileClick(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard({name: '', link: ''});
  }

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
      <Footer />
      <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} buttonText="Подтвердить">
        <input name="cardName" type="text" className="popup__input popup__input_field_card-name" placeholder="Имя" minLength="2" maxLength="30" required />
        <span className="popup__input-error cardName-error"></span>
        <input name="cardLink" type="url" className="popup__input popup__input_field_card-link" placeholder="О себе" required />
      </ PopupWithForm>
      <PopupWithForm name="add" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} buttonText="Создать">
        <input name="cardName" type="text" className="popup__input popup__input_field_card-name" placeholder="Название" minLength="2" maxLength="30" required />
        <span className="popup__input-error cardName-error"></span>
        <input name="cardLink" type="url" className="popup__input popup__input_field_card-link" placeholder="Ссылка на картинку" required />
      </ PopupWithForm>
      <PopupWithForm name="delete" title="Вы уверены?" buttonText="Удалить"/>
      <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} buttonText="Добавить">
        <input name="cardLink" type="url" className="popup__input popup__input_field_card-link" placeholder="Ссылка на картинку" required />
      </ PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </div>
  );
}
