import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const ListContainer = styled.div`
  flex: 1;
  .title {
    font-size: 2.4rem;
    /* font-weight: bold; */
  }

  .lecture-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
    row-gap: 6rem;
    margin-top: 6rem;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin-top: 6rem;

  .search {
    display: flex;
    align-items: center;
    border: 1px shadow #c1c1c1;
    border-radius: 3rem;
    height: 5rem;
    background-color: #f6f7fc;

    .glass {
      margin: 0 2rem;
      font-size: 2.4rem;
    }

    input {
      border: none;
      width: 42rem;
      height: 3rem;
      margin-right: 2rem;
      background-color: #f6f7fc;
      font-size: 1.6rem;
    }

    input::placeholder {
      font-size: 1.6rem;
      opacity: 0.5;
    }

    input:focus {
      outline: none;
    }
  }

  /* .keyword {
    width: 17rem;
    height: 5rem;
    border: 1px shadow #c1c1c1;
    border-radius: 3rem;
    background-color: #f6f7fc;
    position: relative; */

  select {
    width: 13rem;
    position: absolute;
    top: 1.5rem;
    left: 2.5rem;
    border: none;
    opacity: 0.5;
    font-size: 1.6rem;
    background-color: #f6f7fc;
  }

  select:focus {
    outline: none;
  }
  //}
`;

export const ContainerStyles = (theme) => css`
  .title {
    color: ${theme.font_l};
    span {
      color: ${theme.sub};
    }
  }
  .search {
    .glass {
      color: ${theme.primary};
    }

    input::placeholder {
      color: ${theme.primary};
    }
  }

  select {
    color: ${theme.primary};
  }
`;
