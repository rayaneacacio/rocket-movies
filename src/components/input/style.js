import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  width: 100%;
  height: 5.6rem;
  
  padding: 0 1.6rem;
  border-radius: 10px;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  > :first-child {
    width: 2rem;
    height: 2rem;
  }

  > input {
    background: none;
    color: ${({ theme }) => theme.COLORS.WHITE};

    width: 100vh;

    ::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;