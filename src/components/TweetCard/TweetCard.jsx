import {
  StyledTweetCardWrapper,
  StyledTweetImage,
  StyledTweetAvatar,
  StyledTweetDivider,
  StyledTweetText,
  StyledTweetFallowButton,
  StyledAvatarEllipse,
  StyledTweetLogo,
} from './TweetCard.styled';
import picture2_1 from '../../images/picture2_1.png';
import ellipse from '../../images/ellipse.png';
import logo from '../../images/logo.png';

export const TweetCard = ({
  tweet: { name, avatar, tweets, followers, id, follow },
}) => {
  // function handleFollow(id) {}

  const bgColor = () => {
    return follow ? '#5CD3A8' : '#EBD8FF';
  };

  return (
    // console.log(follow, bgColor),
    <StyledTweetCardWrapper>
      <StyledTweetLogo src={logo} />
      <StyledTweetImage src={picture2_1} />
      {/* <div>{id}</div> */}
      {/* <div>{name}</div> */}
      <StyledAvatarEllipse src={ellipse} />
      <StyledTweetAvatar src={avatar} alt={name} />
      <StyledTweetDivider />
      <StyledTweetText>{tweets} Tweets</StyledTweetText>
      <StyledTweetText>{`100,${followers + 500}`} Followers</StyledTweetText>
      <StyledTweetFallowButton bgColor={bgColor}>
        Follow
      </StyledTweetFallowButton>
    </StyledTweetCardWrapper>
  );
};
