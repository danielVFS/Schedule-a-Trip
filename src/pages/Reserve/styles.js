import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    color: #fff;
  }
`;

export const Reservations = styled.div`
  padding: 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      border: 1px solid #eee;
      border-radius: 4px;
      color: #242424;
      padding: 10px;
      width: 45px;
    }
  }

  img {
    max-height: 100px;
  }

  button {
    border: 0;
    background-color: #fff;
  }
`;

export const Footer = styled.footer`
  button {
    border: 0;
    padding: 10px;
    display: flex;
    text-align: center;
    border-radius: 4px;
    margin-top: 10px;
    text-transform: uppercase;
    font-weight: bold;
  }
`;
