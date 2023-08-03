import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16rem;

  > :last-child {
    width: 34rem;
    margin-top: -14rem;
  }
`;

export const Header = styled.div`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_PROFILE};
  color: ${({ theme }) => theme.COLORS.PINK};

  width: 100%;
  height: 14.4rem;

  > :first-child {
    height: 14.4rem;

    padding: 6.4rem 0 0 14.4rem;

    display: flex;
    justify-content: flex-start;
  }
`;

export const Avatar = styled.div`
  position: absolute;
  top: 5.5rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;

    border-radius: 50%;
  }

  > label {
    background: ${({ theme }) => theme.COLORS.PINK};

    width: 4.8rem;
    height: 4.8rem;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    svg {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_SVG};

      width: 2rem;
      height: 2rem;
    }

    input {
      display: none;
    }
  }
`;

export const Form = styled.form`
  width: 34rem;

  > :nth-child(2), :nth-child(4){
    margin: 0.8rem 0 2.4rem 0;
  }
`;