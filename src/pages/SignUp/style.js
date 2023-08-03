import styled from 'styled-components';

import backgroundImg from '../../assets/background.png';

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
    margin: 4.8rem 0 4.8rem 0;
  }

  > :nth-child(3){
    margin: 8px 0;
  }

  > :nth-child(5){
    margin: 1.6rem 0 4.2rem 0;
  }

  > :last-child {
    padding-right: 3rem;
    display: flex;
    justify-content: center;
  }
`;

export const Image = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;