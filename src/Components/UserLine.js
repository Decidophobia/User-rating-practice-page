import React, { useState } from 'react';
import StarIcon from './StarIcon';
import ModalWindow from './ModalWindow';

function UserLine({ user }) {
  const [modalShow, setModalShow] = useState(false);

  function getBorderColor() {
    switch (user.ratingPosition) {
      case 1:
        return '#fdd836';
      case 2:
        return '#90a4ae';
      case 3:
        return '#795548';
      default:
        return '#ffffff';
    }
  }

  return (
    <>
      <div className="user_line" onClick={() => setModalShow(true)}>
        <div className="user_line__img">
          <img src={user.avatar} style={{ borderColor: getBorderColor() }} />
        </div>
        <div className="user_line__name">
          <div className="user_line__name--label">Пользователь:</div>
          <div className="user_line__name--text">{user.name}</div>
        </div>

        <div className="user_line__rating">
          <div className="user_line__rating-icon">
            <StarIcon />
          </div>
          <div className="user_line__rating-text">{user.rating}</div>
        </div>
      </div>
      <ModalWindow
        show={modalShow}
        onHide={() => setModalShow(false)}
        user={user}
        borderColor={getBorderColor()}
      />
    </>
  );
}

export default UserLine;
