import React from 'react';

import { MdDelete } from 'react-icons/md';
import { Container, Reservations, Footer } from './styles';

function Reservation() {
  return (
    <Container>
      <h1>Você solicitou uma reserva</h1>

      <Reservations>
        <img
          src="https://sujeitoprogramador.com/wp-content/uploads/2019/12/maceio.jpg"
          alt="Maceio"
        />
        <strong>Viagem Maceio 7 dias</strong>
        <span>Quantidade: 2</span>
        <button type="button" onClick={() => {}}>
          <MdDelete size={20} color="#191919" />
        </button>
      </Reservations>
      <Footer>
        <button type="button">Solicitar Reserva</button>
      </Footer>
    </Container>
  );
}

export default Reservation;
