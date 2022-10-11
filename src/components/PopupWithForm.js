import React from 'react';

export default function PopupWithForm({name, title, isOpen, onClose, buttonText, children}) {
  return (
    <div className={`popup page__${name}-popup ${isOpen && "popup_active"}`}  >
      <div className="popup__container">
        <button type="button" className="popup__button-close button" aria-label="Закрыть" onClick={onClose}></button>
        <form name={`${name}-form`} className="popup__form">
          <h2 className="popup__title">{title}</h2>
          {children}
          <span className="popup__input-error cardLink-error"></span>
          <button type="submit" className="popup__button button">{buttonText}</button>
        </form>
      </div>
    </div>
  )
}