import styled from 'styled-components';

export const Container = styled.div`
  > div {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_500};

    height: 5.6rem;

    padding: 1.6rem;
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
  }

  button {
    background: none;
    color: ${({ theme }) => theme.COLORS.PINK};

    svg {
      width: 2.2rem;
      height: 2.4rem;
    }
  }

  .newMarker {
    background: none;

    width: 18rem;
    height: 5.6rem;

    border: 2px dashed ${({ theme }) => theme.COLORS.GRAY_300};

    input {
      background: none;
      color: ${({ theme }) => theme.COLORS.WHITE};;
      width: 11rem;
      height: 1.9rem;
    }

    ::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};;
    }
  }
`;