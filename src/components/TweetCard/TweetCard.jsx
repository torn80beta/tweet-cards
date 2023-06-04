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
import { updateIsFallow } from 'redux/users/operations';

export const TweetCard = ({
  tweet: { name, avatar, tweets, followers, id, follow },
}) => {
  const dispatch = useDispatch();

  const bgColor = () => {
    return follow ? '#5CD3A8' : '#EBD8FF';
  };

  const isFollow = () => {
    return follow ? 'Following' : 'Follow';
  };

  const updateFollowers = () => {
    return follow ? followers - 1 : followers + 1;
  };

  function handleFollow(id, follow) {
    dispatch(
      updateIsFallow({ id, follow: !follow, followers: updateFollowers() })
    );
  }

  return (
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
          handleFollow(id, follow, followers);
        }}
      >
        {isFollow()}
      </StyledTweetFallowButton>
    </StyledTweetCardWrapper>
  );
};
