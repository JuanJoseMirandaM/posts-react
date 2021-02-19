import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import User from '../components/User';
import Spinner from '../components/Spinner';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [cargando, setCargando] = useState(false)

  const consultarAPI = async () => {
    const api = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await api.json();
    setUsers(users);
  }

  useEffect(() => {
    setCargando(true);

    setTimeout(() => {
      setCargando(false); 

      consultarAPI();
    }, 3000);
  }, []);

  const UsersList = styled.div`
    width: 100%;
    max-width: 580px;
    margin: 0 auto;
    padding: 0 1rem;

    ul{
      li{
        margin-bottom: 1rem;
      }
    }
  `;

  return (
    <UsersList>
      
      { cargando ? <Spinner className="m-auto"/> : null }

      { !cargando ?
      <Fragment>
        <h1>Users</h1>
        <ul className="list-unstyled">
          {users.map(user => {
            return (
              <li key={user.id}>
                <Link
                  className="text-reset text-decoration-none"
                  to={`/users/${user.id}`}
                >
                  <User user={user} />
                </Link>
              </li>
            );
          })}
        </ul>
      
      </Fragment>
      :null}
    </UsersList>
  )
}

export default Home
