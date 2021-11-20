import styled from '@emotion/styled';

export const Button = styled.button`
  width: 35rem;
  height: 5rem;
  border: none;
  border-radius: 1.2rem;
  background-color: #fee500;
  .box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    .symbol {
      font-size: 1.8rem;
    }
    .label {
      color: #000000;
      opacity: 0.85;
      margin-right: 10rem;
      font-size: 1.7rem;
    }
  }
`;
