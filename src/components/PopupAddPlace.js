import PopupWithForm from "./PopupWithForm";
import React from "react";

function PopupAddPlace(props) {
  return (
    <PopupWithForm
      isOpen={props.isOpen ? "popup_is-opened" : ""}
      name="card"
      title="Новое место"
      onClose={ props.onClose }
      children={
        <>
          <input required id="name-card" type="text" name="name" className="popup__input popup__input_type_name" placeholder="Название" />
          <span id="name-card-error" className="error"></span>
          <input required id="link" type="url" name="link" className="popup__input popup__input_type_link-url" placeholder="Ссылка на картинку" />
          <span id="link-error" className="error"></span>
          <button type="submit" className="button popup__button">
            +
          </button>
        </>
      }
    />
  );
}

export default PopupAddPlace;
