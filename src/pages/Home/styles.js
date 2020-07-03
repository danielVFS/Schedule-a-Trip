import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 13px;

    img {
      max-width: 280px;
      align-self: center;
      border-radius: 4px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      margin-top: 10px;
      color: #191919;
    }

    > span {
      font-size: 15px;
      font-weight: bold;
      margin: 5px 0px;
    }

    button {
      background-color: #191919;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: auto;
      border: 0;
      border-radius: 4px;

      div {
        display: flex;
        align-items: center;
        padding: 10px;

        svg {
          margin-right: 5px;
        }
      }
    }
  }
`;
