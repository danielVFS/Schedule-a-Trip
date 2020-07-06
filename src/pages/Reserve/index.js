import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md';

import {
  removeReserve,
  updateAmountRequest,
} from '../../store/modules/Reserve/actions';
import { Container, Reservations, Footer } from './styles';

function Reservation() {
  const dispatch = useDispatch();
  const reserves = useSelector((state) => state.reserve);

  function handleRemove(id) {
    dispatch(removeReserve(id));
  }

  function decrementAmount(trip) {
    dispatch(updateAmountRequest(trip.id, trip.amount - 1));
  }

  function incrementAmount(trip) {
    dispatch(updateAmountRequest(trip.id, trip.amount + 1));
  }

  return (
    <Container>
      <h1>Você solicitou {reserves.length} reservas.</h1>

      {reserves.map((reserve) => (
        <Reservations key={reserve.id}>
          <img src={reserve.image} alt={reserve.title} />
          <strong>{reserve.title}</strong>

          <div>
            <button type="button" onClick={() => decrementAmount(reserve)}>
              <MdRemoveCircle size={20} color="#191919" />
            </button>
            <input type="text" readOnly value={reserve.amount} />
            <button type="button" onClick={() => incrementAmount(reserve)}>
              <MdAddCircle size={20} color="#191919" />
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              handleRemove(reserve.id);
            }}
          >
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
