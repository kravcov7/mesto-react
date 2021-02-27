import Close from "../images/close.svg";

function PopupImage(props) {
  return (
    <div className="popup" id="popup-image">
      <div className="popup__image">
        <img src={Close} alt="" className="popup__close popup__close_image" id="popupClose" onClick={ props.onClose } />
        <img src="" className="popup__image-open" alt="" />
      </div>
    </div>
  );
}

export default PopupImage;