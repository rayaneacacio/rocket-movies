import styled from 'styled-components';

export const Container = styled.div`
  > :last-child {
    display: flex;
    justify-content: center;
  }
`;

export const Main = styled.main`
  width: 111.3rem;
  height: 70rem;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  padding-right: 1.5rem;
  margin: 4rem 0;

  overflow-x: hidden;
  overflow-y: auto;

  > :first-child {
    flex-direction: column;
    gap: 2.4rem;
  }

  > div {
    display: flex;
    gap: 4rem;
  }

  .buttonRemove {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_MARKERS};
    color: ${({ theme }) => theme.COLORS.PINK};
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

export const SectionMarkers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > div {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_MARKERS};

    width: 100%;
    height: 8.8rem;

    padding: 1.6rem;
    border-radius: 0.8rem;

    display: flex;
    gap: 4rem;
  }
`;