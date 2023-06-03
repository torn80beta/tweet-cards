import { getUsers } from 'redux/users/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from 'redux/users/operations';
import { TweetCard } from 'components/TweetCard/TweetCard';
import { StyledTweetsSection, StyledTweetsUl } from './Tweets.styled';

export const Tweets = () => {
  const dispatch = useDispatch();
  const tweets = useSelector(getUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    // console.log(tweets),
    <StyledTweetsSection>
      <StyledTweetsUl>
        {tweets.map(tweet => (
          <li key={tweet.id}>
            <TweetCard tweet={tweet} />
          </li>
        ))}
      </StyledTweetsUl>
    </StyledTweetsSection>
  );
};
