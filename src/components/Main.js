import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  console.log(currentUser.name);
  return (
    <>
      <div className="profile root__section">
        <div className="user-info">
          <div className="user-info__photo" style={{ backgroundImage: `url(${currentUser.avatar})` }}></div>
          <div className="user-info__data">
            <h1 className="user-info__name">{currentUser.name}</h1>
            <p className="user-info__job">{currentUser.about}</p>
            <button onClick={props.onEditProfile} className="button button_edit user-info__edit">
              Редактировать
            </button>
          </div>
          <button onClick={props.onAddPlace} className="button user-info__button">
            +
          </button>
        </div>
      </div>
      <div className="places-list root__section">
        <Card />
      </div>
    </>
  );
}

export default Main;
