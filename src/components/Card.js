import React from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const card = props.card;
  const currentUser = React.useContext(CurrentUserContext);

  function handleClick() {
    props.onCardClick(card.link, card.name);
  }

  // const isOwn = card.owner._id === currentUser._id;
  return (
    <div className="place-card" key={ card._id }>
      <div className="place-card__image" style={{ backgroundImage: `url(${ card.link })` }} onClick={ handleClick } >
        <button className="place-card__delete-icon"></button>
      </div>
      <div className="place-card__description">
        <h3 className="place-card__name">{ card.name }</h3>
        <button className="place-card__like-icon"></button>
      </div>
    </div>
  );
}

export default Card;
