import React from 'react';
import { useSelector } from 'react-redux';

import { MdDelete } from 'react-icons/md';
import { Container, Reservations, Footer } from './styles';

function Reservation() {
  const reserves = useSelector((state) => state.reserve);

  return (
    <Container>
      <h1>Você solicitou {reserves.length} reservas.</h1>

      {reserves.map((reserve) => (
        <Reservations key={reserve.id}>
          <img src={reserve.image} alt={reserve.title} />
          <strong>{reserve.title}</strong>
          <span>Quantidade: {reserve.amount}</span>
          <button type="button" onClick={() => {}}>
            <MdDelete size={20} color="#191919" />
          </button>
        </Reservations>
      ))}
      <Footer>
        <button type="button">Solicitar Reserva</button>
      </Footer>
    </Container>
  );
}

export default Reservation;
