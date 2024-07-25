import styled from 'styled-components'; 

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between; /* Corrected 'between' to 'space-between' */
  border-bottom: 1px solid blue;
  padding-bottom: 20px;

  div {
    flex: 1;
  }

  .information, .button {
    display: flex;
    justify-content: space-between; /* Corrected 'between' to 'space-between' */
  }

  img {
    max-width: 80px;
    object-fit: cover;
    margin-left: 40px;
  }
`;
