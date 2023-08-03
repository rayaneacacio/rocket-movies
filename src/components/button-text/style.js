import styled from 'styled-components';

export const Container = styled.button`
  background: none;
  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 1.6rem;

  width: 100%;

  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  > div {
    font-size: 1.6rem;

    width: 1.6rem;
    height: 1.6rem;
  }
`;