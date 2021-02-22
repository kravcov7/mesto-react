import React from "react";
import Header from "./Header";
import Main from "./Main";
import PopupEditProfile from "./PopupEditProfile";
import PopupAddPlace from "./PopupAddPlace";
import api from "../utils/api";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isPopupEditProfileOpen, setIsPopupEditProfileOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setIsPopupEditProfileOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsPopupEditProfileOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  React.useEffect(() => {
    Promise.all([api.getUsersInfo()])
      .then(([user]) => {
        setCurrentUser(user);
        
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} />
        <PopupEditProfile isOpen={isPopupEditProfileOpen} onClose={closeAllPopups} />
        <PopupAddPlace isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
