import React from 'react';
import styled from '@emotion/styled';
import Gravatar from './Gravatar';

const User = ({user}) => {
  
  const {name, email, phone} = user;

  const UserListItem = styled.div`
    background: #FFFFFF;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.23);
    border-radius: 5px;
    display: flex;
    padding: 1rem;
  `;

  return (
    <UserListItem>
      <Gravatar
        className="BadgesListItem__avatar"
        email={email}
      />

      <div>
        <strong>
          {name}
        </strong> <br/>
        @{email} <br/>
        {phone}
      </div>
    </UserListItem>
  )
}

export default User
