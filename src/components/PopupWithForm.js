import React from "react";
import Close from "../images/close.svg";

function PopupWithForm(props) {
  return (
    <div className={ `popup popup_type_${ props.name } ${ props.isOpen }` } id="popup-place">
      <div className="popup__content">
        <img src={Close} alt="" className="popup__close" id="popupClose" onClick={ props.onClose } />
        <h3 className="popup__title">{ props.title }</h3>
        <form className="popup__form" name={ props.name } onSubmit={ props.onSubmit } noValidate>
          { props.children }
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;