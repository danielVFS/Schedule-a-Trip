import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { MdFlightTakeoff } from 'react-icons/md';
import logo from '../../assets/logo.svg';
import { Container, Cart } from './styles';

function Header() {
  const reserveSize = useSelector((state) => state.reserve.length);

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>

      <Cart to="/reservation">
        <div>
          <strong>Minhas reservas</strong>
          <span>{reserveSize} reservas</span>
        </div>
        <MdFlightTakeoff color="#FFF" size={36} />
      </Cart>
    </Container>
  );
}

export default Header;
