import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
  padding: 10px 10px;

  img {
    max-width: 110px;
    max-height: 110px;
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    margin-right: 10px;
    text-align: right;

    strong {
      display: block;
      color: #fff;
    }

    span {
      color: #999;
      font-size: 12px;
    }
  }
`;
