import styled from 'styled-components';

export const Container = styled.div`
  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 4.8rem;
    font-weight: 700;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 1.4rem;
    font-weight: 400;
  }
`;