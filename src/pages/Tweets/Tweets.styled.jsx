import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledTweetsSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  padding: 80px 0px 60px;
  background-color: #112538;
`;

export const StyledTweetsUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export const StyledNavLink = styled(NavLink)`
  position: fixed;
  top: 50%;
  left: calc((100vw - 90%) * 0.25);
  color: #ebd8ff;
  z-index: 100;
  &:hover {
    color: #aeffd9;
  }
  &:active {
    color: #5cd3a8;
  }
`;
