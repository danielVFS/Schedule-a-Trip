import React from 'react';
import { Link } from 'react-router-dom';

import { MdFlightTakeoff } from 'react-icons/md';
import logo from '../../assets/logo.svg';
import { Container, Cart } from './styles';

function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>

      <Cart to="/reservation">
        <div>
          <strong>Minhas reservas</strong>
          <span>0 reservas</span>
        </div>
        <MdFlightTakeoff color="#FFF" size={36} />
      </Cart>
    </Container>
  );
}

export default Header;
