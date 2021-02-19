import React, { useState } from 'react'
import styled from '@emotion/styled';
import { Button, Card, CardBody, UncontrolledCollapse } from 'reactstrap';

const Post = ({post}) => {
  
  const {id, title, body} = post;
  const [coments, setComents] = useState(false);

  const PostContainer = styled.li`
    padding-top: 30px;
    padding-bottom: 30px;
    list-style: none;
    border-bottom: 1px solid #ddd;
    position: relative;
  `;

  return (
    <PostContainer>
      <h4>
        {title}
      </h4>
      <p className="text-gray">
        {body}
      </p>
      <Button
        onClick={() => {
          setComents(!coments);
        }}
      >
        Ver comentarios
      </Button>

      
    </PostContainer>
  )
}

export default Post
