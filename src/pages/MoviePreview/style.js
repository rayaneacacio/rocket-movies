import styled from 'styled-components';

export const Container = styled.div`
  > :last-child {
    display: flex;
    justify-content: center;
  }
`;

export const Main = styled.div`
  width: 153.7rem;
  height: 63rem;

  padding-right: 2rem;
  margin: 4rem 0;

  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  > p {
    text-align: justify;
  }

  &::-webkit-scrollbar {
    background: none;
    width: 0.8rem;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 0.8rem;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 99999px;
  }

  > :first-child {
    display: flex;
    justify-content: space-between;

    > :last-child {
      margin-right: 10rem;
      display: flex;
      justify-content: end;
    }
  }
  
  > :nth-child(2) {
    display: flex;
    align-items: center;
    gap: 1.9rem;

    margin-top: 2.4rem;

    h1 {
      font-size: 3.6rem;
    }
  }

  > :last-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.8rem;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`;

export const SectionMarkers = styled.span`
  display: flex;
  gap: 0.8rem;
`;