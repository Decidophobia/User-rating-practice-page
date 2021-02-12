import React, { useState } from 'react';
import StarIcon from './StarIcon';
import ModalWindow from './ModalWindow';

function UserLine({ user }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className="user_line" onClick={() => setModalShow(true)}>
        <div className="user_line__name">{user.name}</div>
        <div className="user_line__description">{user.description}</div>
        <div className="user_line__img">
          <img src={user.avatar} />
        </div>
        <div className="user_line__rating">
          <div className="user_line__rating-icon">
            <StarIcon />
          </div>
          <div className="user_line__rating-text">{user.rating}</div>
        </div>
      </div>
      <ModalWindow show={modalShow} onHide={() => setModalShow(false)} user = {user} />
    </>
  );
}

export default UserLine;
