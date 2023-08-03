import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  overflow: hidden;

  > main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 74.6rem;

  margin: 5rem 0 4.45rem 0;

  > h1 {
    font-size: 3.2rem;
    width: 18.7rem;
    height: 4.2rem;
  }

  > :last-child {
    width: 20.7rem;
  }
`;

export const Notes = styled.div`
  height: 50rem;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  padding-right: 1rem; 
  padding-bottom: 3rem;

  &::-webkit-scrollbar {
    background: none;
    width: 0.8rem;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 0.8rem;
  }
`;