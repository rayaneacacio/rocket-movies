import styled from 'styled-components';

import backgroundIMG from '../../assets/background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;

  > div {
    width: 63.7rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Form = styled.form`
  width: 34rem;

  > h2 {
    font-size: 2.4rem;
    margin: 4.8rem 0;
  }

  > :nth-child(2) {
    margin-bottom: 8px;
  }

  > :nth-child(4) {
    margin: 2.4rem 0 4.2rem 0;
  }

  > :last-child {
    display: flex;
    justify-content: center;
  }
`;

export const Image = styled.div`
  flex: 1;
  background: url(${backgroundIMG}) no-repeat center center;
  background-size: cover;
`;