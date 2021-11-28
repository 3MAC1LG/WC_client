import styled from '@emotion/styled';

export const AccordionStyle = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  .accordion {
    flex: 1;
    width: 40rem;
    font-size: 1.8rem;
    padding: 1rem;
    border-radius: 1.2rem;
    border: none;
    background-color: #eceef6;
    .accordion-border {
    }
    .button {
      padding: 1rem;
      outline: none;
      background-color: #eceef6;
      cursor: pointer;
    }
    .video > div {
      padding: 1rem 2rem;
      border-top: 1px solid #eaeaea;
      background-color: #f9fbfe;
    }
  }
`;
