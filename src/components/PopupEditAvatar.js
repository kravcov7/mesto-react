import PopupWithForm from "./PopupWithForm";
import React from 'react'

function PopupEditAvatar(props) {
  const avatarRef = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen ? "popup_is-opened" : ""}
      title="Обновить аватар"
      onClose={ props.onClose }
      onSubmit={ handleSubmit }
      name="avatar"
      children={
        <>
          <input ref={avatarRef} id="avatarlink" type="url" name="link" className="popup__input popup__input_type_avatar" placeholder="Ссылка на аватар" minLength="2" />
          <span id="user-name-error" className="error"></span>          
          <button type="submit" className="button popup__button popup__button_edit">
            Сохранить
          </button>
        </>
      }
    />
  );
}

export default PopupEditAvatar;