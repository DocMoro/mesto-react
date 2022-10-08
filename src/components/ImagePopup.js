import React from "react";

export default class ImagePopup extends React.Component {
  render() {
    return (
      <div className="popup popup_card page__card-popup">
        <div className="popup__card-container">
          <button type="button" className="popup__button-close button" aria-label="Закрыть"></button>
          <img className="popup__image" src="#" alt="#" />
          <h2 className="popup__subtitle"></h2>
        </div>
      </div>
    )
  }
}