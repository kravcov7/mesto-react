import PopupWithForm from "./PopupWithForm";
import React from "react";

function PopupEditProfile(props) {
  
  return (
    <PopupWithForm
      isOpen={props.isOpen ? "popup_is-opened" : ""}
      title="Редактировать профиль"
      onClose={ props.onClose }
      name="profile"
      children={
        <>
          <input id="user-name" required type="text" name="user-name" className="popup__input popup__input_type_user-name" placeholder="Имя" minLength="2" maxLength="30" />
          <span id="user-name-error" className="error"></span>
          <input required id="about" type="text" name="about" className="popup__input popup__input_type_about" placeholder="О себе" minLength="2" maxLength="30" />
          <span id="about-error" className="error"></span>
          <button type="submit" className="button popup__button popup__button_edit">
            Сохранить
          </button>
        </>
      }
    />
  );
}

export default PopupEditProfile;
