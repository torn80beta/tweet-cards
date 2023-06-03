import styled from '@emotion/styled';

export const StyledTweetCardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 380px;
  height: 460px;
  border-radius: 20px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const StyledTweetImage = styled.img`
  width: 308px;
  height: 168px;
  margin: 28px 36px 18px;
`;

export const StyledTweetAvatar = styled.img`
  position: absolute;
  width: 58px;
  height: 58px;
  left: 160px;
  top: 185px;
  border-radius: 50%;
`;

export const StyledAvatarEllipse = styled.img`
  position: absolute;
  left: 150px;
  top: 178px;
  width: 80px;
  height: 80px;
  z-index: 100;
`;

export const StyledTweetDivider = styled.div`
  width: 380px;
  height: 8px;
  margin-bottom: 62px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const StyledTweetText = styled.p`
  margin-bottom: 16px;
  font-family: 'MontserratMedium';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

const followButtonBgColor = props => props.bgColor;

export const StyledTweetFallowButton = styled.button`
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
  color: #373737;
  background: ${followButtonBgColor};
  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  cursor: pointer;

  &:hover {
    background: #aeffd9;
  }
  &:active {
    background: #5cd3a8;
  }
`;

export const StyledTweetLogo = styled.img`
  position: absolute;
  width: 76px;
  height: 22px;
  left: 20px;
  top: 20px;
`;
