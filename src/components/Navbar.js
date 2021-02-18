import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import './Navbar.scss';

const Navbar = () => {
  const NavbarContainer = styled.div`
    width: 100%;
    padding: 1rem 0.5rem;
    background-color: #1C3643;
    margin-bottom: 1rem;
  `;

  return (
    <NavbarContainer>
      <div className="container-fluid">
        <Link className="Navbar__brand" to="/">
          <span className="font-weight-bold">JSON </span>
          <span className="font-weight-light">Placeholder</span>
        </Link>
      </div>
    </NavbarContainer>
  )
}

export default Navbar
