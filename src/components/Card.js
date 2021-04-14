import React from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const card = props.card;
  const currentUser = React.useContext(CurrentUserContext);

  function handleClick() {
    props.onCardClick(card.link, card.name);
  }

  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `place-card__delete-icon ${isOwn ? 'place-card__delete-icon_visible' : ''}`
  );

  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `place-card__like-icon ${isLiked ? 'place-card__like-icon_liked' : ''}`
  );

  function handleDeleteClick() {
    props.onCardDelete(props.card)
  }

  function handleLikeClick() {
    props.onCardLike(card)
  }

  return (
    <div className="place-card" key={ card._id }>
      <div className="place-card__image" style={{ backgroundImage: `url(${ card.link })` }} onClick={ handleClick } >
        <button  onClick={ handleDeleteClick }  className="place-card__delete-icon"></button>
      </div>
      <div className="place-card__description">
        <h3 className="place-card__name">{ card.name }</h3>
        <button onClick={ handleLikeClick } className={ `${ cardLikeButtonClassName }` }></button>
      </div>
    </div>
  );
}

export default Card;
