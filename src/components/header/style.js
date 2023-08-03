import styled from 'styled-components';

export const Container = styled.div`
  padding: 2.4rem 12.3rem ;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6.4rem;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BORDER_BOTTOM};

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 2.4rem;
    font-weight: 700;
  }

  > div {
    width: 63rem;
  }
`;

export const Span = styled.span`
  width: 19.8rem;
  height: 6.8rem;

  display: flex;
  align-items: center;
  gap: 0.9rem;

  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 1.4rem;

  > div {
    width: 12.5rem;
    height: 3.6rem;

    display: flex;
    flex-direction: column;

    :nth-child(1), :nth-child(2) {
      display: flex;
      justify-content: flex-end;
    }

    :last-child {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > img {
    width: 6.4rem;
    height: 6.4rem;

    border-radius: 50%;

    cursor: pointer;
  }
`;