import styled from '@emotion/styled';

export const StyledTweetsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* align-content: center; */
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 0px;
  background-color: #1e242a;
`;

export const StyledTweetsUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 25px;
`;

export const StyledLoadMoreButton = styled.button`
  width: 196px;
  height: 50px;
  margin-top: 10px;
  padding: 14px 28px;
  font-family: 'MontserratBold';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #c7c7c7;
  background: #452199;
  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  cursor: pointer;

  &:hover,
  :focus {
    background: #6031cd;
  }
`;
