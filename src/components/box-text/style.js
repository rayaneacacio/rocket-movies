import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_500};

  width: 100%;
  
  border-radius: 10px;

  > input, textarea {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 1.6rem;

    width: 100%;

    padding: 1.9rem 2.4rem;
    border-radius: 10px;

    resize: none;
  }
`;