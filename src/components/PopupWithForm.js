import React from 'react';

export default class PopupWithForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={`popup page__${this.props.name}-popup ${this.props.isOpen && "popup_active"}`}  >
        <div className="popup__container">
          <button type="button" className="popup__button-close button" aria-label="Закрыть" onClick={this.props.onClose}></button>
          <form name={`${this.props.name}-form`} className="popup__form">
            <h2 className="popup__title">{this.props.title}</h2>
            {this.props.name !== "avatar" && <input name="cardName" type="text" className="popup__input popup__input_field_card-name" placeholder={this.props.name === "edit" ? "Имя" : this.props.name === "add" ? "Название" : ""} minLength="2" maxLength="30" required />}
            {this.props.name !== "avatar" && <span className="popup__input-error cardName-error"></span>}
            <input name="cardLink" type="url" className="popup__input popup__input_field_card-link" placeholder={this.props.name === "edit" ? "О себе" : "Ссылка на картинку"} required />
            <span className="popup__input-error cardLink-error"></span>
            <button type="submit" className="popup__button button">Сохранить</button>
          </form>
        </div>
      </div>
    )
  }
}