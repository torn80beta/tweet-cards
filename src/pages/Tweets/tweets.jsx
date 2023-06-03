import { getUsers, getIsLoading } from 'redux/users/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchUsers } from 'redux/users/operations';
import { TweetCard } from 'components/TweetCard/TweetCard';
import {
  StyledTweetsSection,
  StyledTweetsUl,
  StyledLoadMoreButton,
} from './Tweets.styled';

export const Tweets = () => {
  const dispatch = useDispatch();
  const tweets = useSelector(getUsers);
  const isFetching = useSelector(getIsLoading);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch, page]);

  function handleLoadMore() {
    setPage(page + 1);
  }

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
      {tweets.length > 0 && tweets.length < 15 && (
        <StyledLoadMoreButton
          type="button"
          onClick={handleLoadMore}
          disabled={isFetching}
        >
          Load more
        </StyledLoadMoreButton>
      )}
    </StyledTweetsSection>
  );
};
