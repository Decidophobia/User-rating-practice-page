import React from 'react';

function UserDetailed({ user }) {
  console.log(user.avatar);
  return (
    <div className="user_modal">
      <div className="user_modal__wrapper">
        <div className="user_modal__img">
          {/* <img src={user.avatar} /> */}
        </div>
        <div className="user_modal__labels">
          <div className="user_modal__labels-name">{user.name}</div>
          <div className="user_modal__labels-rating">{user.rating}</div>
          <div className="user_modal__labels-rating_position">{user.ratingPosition}</div>
        </div>
      </div>
      <div className="user_modal__description">{user.description}</div>
    </div>
  );
}

export default UserDetailed;
