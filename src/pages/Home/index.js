import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MdFlightTakeoff } from 'react-icons/md';

import { addReserveRequest } from '../../store/modules/Reserve/actions';
import api from '../../services/api';
import { List } from './styles';

export default function Home() {
  const dispatch = useDispatch();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    async function loadApi() {
      const response = await api.get(`trips`);

      setTrips(response.data);
    }

    loadApi();
  }, []);

  function handleAdd(id) {
    dispatch(addReserveRequest(id));
  }

  return (
    <List>
      {trips.map((trip) => (
        <li key={trip.id}>
          <img src={trip.image} alt={trip.title} />
          <strong>{trip.title}</strong>
          <span>Status: {trip.status ? 'Disponível' : 'Não Disponível'}</span>

          <button
            type="button"
            onClick={() => {
              handleAdd(trip.id);
            }}
          >
            <div>
              <MdFlightTakeoff size={16} color="#FFF" />
            </div>

            <span>SOLICITAR A RESERVA</span>
          </button>
        </li>
      ))}
    </List>
  );
}
