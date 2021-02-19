import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import User from '../components/User';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("")

  const consultarAPI = async () => {
    const api = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await api.json();
    setUsers(users);
  }

  useEffect(() => {
    consultarAPI()
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
      <div className="form-group">
        <label>Busca un usuario</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>

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
    </UsersList>
  )
}

export default Home
