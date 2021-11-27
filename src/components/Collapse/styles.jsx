import styled from '@emotion/styled';

export const AccordionStyle = styled.div`
  .accordion {
    z-index: 1;
    width: 40rem;
    margin-top: 3rem;
    font-size: 1.8rem;
    border: none;
    .button {
      padding: 1rem;
      outline: none;
      background-color: #eceef6;
    }
    .panel > div {
      padding: 1rem 2rem;
      border-top: 1px solid #eaeaea;
      background-color: #f9fbfe;
    }
  }
`;
