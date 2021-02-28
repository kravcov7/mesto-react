import PopupWithForm from "./PopupWithForm";

function PopupEditAvatar(props) {
  return (
    <PopupWithForm
      isOpen={props.isOpen ? "popup_is-opened" : ""}
      title="Обновить аватар"
      onClose={ props.onClose }
      name="avatar"
      children={
        <>
          <input id="user-name" required type="text" name="user-name" className="popup__input popup__input_type_avatar" placeholder="Ссылка на аватар" minLength="2" />
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