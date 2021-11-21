import styled from '@emotion/styled';

export const ListContainer = styled.div`
  flex: 1;
  .title {
    font-size: 2.4rem;
    color: #8a85ec;
    span {
      color: #fed595;
    }
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
      color: #8a85ec;
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
      color: #8a85ec;
      opacity: 0.5;
    }

    input:focus {
      outline: none;
    }
  }

  .keyword {
    width: 15rem;
    height: 5rem;
    border: 1px shadow #c1c1c1;
    border-radius: 3rem;
    background-color: #f6f7fc;
    position: relative;

    select {
      width: 10rem;
      position: absolute;
      top: 1.5rem;
      left: 2.5rem;
      border: none;
      background-color: #f6f7fc;
      color: #8a85ec;
      opacity: 0.5;
      font-size: 1.6rem;
    }
  }
`;
