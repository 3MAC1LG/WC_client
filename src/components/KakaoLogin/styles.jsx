import styled from '@emotion/styled';

export const Button = styled.button`
  width: 35rem;
  height: 5rem;
  border: none;
  border-radius: 1.2rem;
  background-color: #fee500;
  cursor: pointer;
  .box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 2rem;

    .symbol {
      font-size: 2rem;
      margin-right: 8rem;
    }
    .label {
      color: #000000;
      opacity: 0.85;
      font-size: 1.9rem;
    }
  }
`;
