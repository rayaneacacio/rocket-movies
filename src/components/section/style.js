import styled from 'styled-components';

export const Container = styled.button`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};  
  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 1.6rem;
  text-align: justify;

  width: 112.1rem;
  height: 22.3rem;

  padding: 3.2rem;
  border-radius: 1.6rem;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2.4rem;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY};
    width: 105.7rem;
    height: 3.5rem;
    overflow: hidden;
  
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;