import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Comment from './Comment';

const ListComments = ({postId}) => {
  const [comments, setComments] = useState([])

  const consultarAPI = async () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(({ data: comments}) => {
      // console.log(comments);
      setComments(comments);
    });
  }

  useEffect(() => {
    consultarAPI()
  }, []);

  return (
    <ul className="list-unstyled mt-4">
      {comments.map(comment => {
        return (
          <li key={comment.id}>    
            <Comment comment={comment} />
          </li>
        );
      })}
    </ul>
  )
}

export default ListComments
