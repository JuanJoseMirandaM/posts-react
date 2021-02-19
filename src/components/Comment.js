import React from 'react';
import styled from '@emotion/styled';
import Gravatar from './Gravatar';

const Comment = ({comment}) => {
  
  const {name, email, body} = comment;

  const CommentListItem = styled.div`
    background: #FFFFFF;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.23);
    border-radius: 5px;
    display: flex;
    padding: 1rem;
    margin: 1rem;
  `;

  return (
    <CommentListItem>
      <Gravatar
        email={email}
      />

      <div>
        <strong>{name}</strong> <br/>
        <p>{body}</p>
      </div>
    </CommentListItem>
  )
}

export default Comment
