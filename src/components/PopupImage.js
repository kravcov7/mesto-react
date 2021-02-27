import Close from "../images/close.svg";

function PopupImage(props) {
  return (
    <div className={ (props.card.isOpen ? `popup popup_type_${ props.name } popup_is-opened` : `popup popup_type_${ props.name }`) } id="popup-image">
      <div className="popup__image">
        <img src={Close} alt="" className="popup__close popup__close_image" id="popupClose" onClick={ props.onClose } />
        <img src={ props.card.link } className="popup__image-open" alt="" />
      </div>
    </div>
  );
}

export default PopupImage;