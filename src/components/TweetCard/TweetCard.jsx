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
import { useDispatch } from 'react-redux';
import { setIsFollow } from 'redux/users/usersSlice';

export const TweetCard = ({
  tweet: { name, avatar, tweets, followers, id, follow },
}) => {
  const dispatch = useDispatch();

  function handleFollow(id) {
    console.log(id);
    dispatch(setIsFollow(id));
  }

  const bgColor = () => {
    return follow ? '#5CD3A8' : '#EBD8FF';
  };

  const isFollow = () => {
    return follow ? 'Following' : 'Follow';
  };

  return (
    // console.log(follow, bgColor),
    <StyledTweetCardWrapper>
      <StyledTweetLogo src={logo} />
      <StyledTweetImage src={picture2_1} />
      <StyledAvatarEllipse src={ellipse} />
      <StyledTweetAvatar src={avatar} alt={name} />
      <StyledTweetDivider />
      <StyledTweetText>{tweets} Tweets</StyledTweetText>
      <StyledTweetText>{`100,${followers + 500}`} Followers</StyledTweetText>
      <StyledTweetFallowButton
        type="button"
        bgColor={bgColor}
        onClick={() => {
          handleFollow(id);
        }}
      >
        {isFollow()}
      </StyledTweetFallowButton>
    </StyledTweetCardWrapper>
  );
};
