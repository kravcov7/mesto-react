import React from "react";
import Header from "./Header";
import Main from "./Main";
import PopupEditProfile from "./PopupEditProfile";
import PopupAddPlace from "./PopupAddPlace";
import api from "../utils/api";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupImage from "./PopupImage";
import PopupEditAvatar from "./PopupEditAvatar";

function App() {

  const [cards, setCards] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isPopupEditProfileOpen, setIsPopupEditProfileOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    isOpen: false,
    link: '',
    name: ''
  });

  function handleEditProfileClick() {
    setIsPopupEditProfileOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(link, name) {
    setSelectedCard({
      isOpen: true,
      link: link,
      name: name
    });
  }

  function closeAllPopups() {
    setIsPopupEditProfileOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({
      isOpen: false,
      link: '',
      name: ''
    });
  }

  React.useEffect(() => {
    Promise.all([api.getUsersInfo(), api.getInitialCards()])
      .then(([user, cards]) => {
        setCurrentUser(user);
        setCards(cards);        
      })
      .catch(err => console.log(err));
  }, []);

  function handleUpdateAvatar(data) {
    api.addNewAvatar(data)
      .then((res) => {
        setCurrentUser(res)
        closeAllPopups()
      })
      .catch(err => console.log(err))
  }

  function handleCardDelete(card) {
    api.removeCard(card._id)
      .then(() => {
        const cardNew = cards.filter((c) => c._id !== card._id)
        setCards(cardNew)
        closeAllPopups()
      })
      .catch(err => console.log('Нельзя удалять чужие карточки', err))
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    if(!isLiked) {
      api.setLikeCard(card._id)
        .then((newCard) => {
          const newCards = cards.map((c) => c._id === card._id ? newCard : c);
          setCards(newCards);
        })
        .catch(err => console.log(err))
    } else {
      api.unLikeCard(card._id)
        .then((newCard) => {
          const newCards = cards.map((c) => c._id === card._id ? newCard : c);
          setCards(newCards);
        })
        .catch(err => console.log(err))
    }
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main cards={cards} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}
         onCardClick={handleCardClick} onCardDelete={handleCardDelete} onCardLike={handleCardLike} />
        <PopupEditProfile isOpen={isPopupEditProfileOpen} onClose={closeAllPopups} />
        <PopupAddPlace isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
        <PopupImage card={selectedCard} onClose={closeAllPopups} />
        <PopupEditAvatar isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
