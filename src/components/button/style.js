import styled from 'styled-components';

export const Container = styled.button`
  background: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  font-size: 1.6rem;

  width: 100%;
  height: 5.6rem;

  border: none;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  > div, svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`;