import React from 'react';
import { useSelector } from 'react-redux';

import UserLine from './UserLine';

function UserList(props) {
  const { users } = useSelector((store) => store);

  return (
    <div className="users-list">
      {users && users.map((user) => <UserLine key={user.id} user={user} />)}
    </div>
  );
}

export default UserList;
