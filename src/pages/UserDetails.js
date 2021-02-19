import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Container } from 'reactstrap';
import Post from '../components/Post';

const UserDetails = (props) => {
  const userId = props.match.params.userId;

  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([])

  const consultarAPIUser = async () => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(({ data: user}) => {
      // console.log(user);
      setUser(user);
    });
  }

  const consultarAPIPosts = async () => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then(({ data: posts}) => {
      console.log(posts);
      setPosts(posts);
    });
  }

  useEffect(() => {
    consultarAPIUser();
    consultarAPIPosts();
  }, []);

  const {name, username, email, phone, website, address, company} = user;

  return (
    <Container>
      <h1>{name}</h1>
      <ul className="list-unstyled">
        {posts.map(post => {
          return (
            <Post post={post} key={post.id}/>
          );
        })}
      </ul>
    </Container>
  )
}

export default UserDetails
