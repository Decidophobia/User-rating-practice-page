import React from 'react';

function UserDetailed({ user, borderColor }) {
  
  return (
    <div className="user_modal">
      <div className="user_modal__wrapper">
        <div className="user_modal__img" >
          <img src={user.avatar} style={{borderColor: borderColor}}/>
        </div>
        <div className="user_modal__labels">
          <div className="user_modal__labels-name">
            <div className="user_modal__labels--label">Имя:</div>
            <div className="user_modal__labels--text">{user.name}</div>
          </div>

          <div className="user_modal__labels-rating">
            <div className="user_modal__labels--label">Баллы:</div>
            <div className="user_modal__labels--text">{user.rating}</div>
          </div>

          <div className="user_modal__labels-rating_position">
            <div className="user_modal__labels--label">Позиция в рейтинге:</div>
            <div className="user_modal__labels--text">
              {user.ratingPosition}
            </div>
          </div>
        </div>
      </div>
      <div className="user_modal__description">
        <div className="user_modal__description--label">О себе:</div>
        <div className="user_modal__description--text">{user.description}</div>
      </div>
    </div>
  );
}

export default UserDetailed;
