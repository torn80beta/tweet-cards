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
import { clearTweetsOuUnmount } from 'redux/users/usersSlice';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { StyledNavLink } from './Tweets.styled';

export const Tweets = () => {
  const dispatch = useDispatch();
  const tweets = useSelector(getUsers);
  const isFetching = useSelector(getIsLoading);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch, page]);

  useEffect(() => {
    return () => {
      dispatch(clearTweetsOuUnmount());
      setPage(1);
    };
  }, [dispatch]);

  function handleLoadMore() {
    setPage(page + 1);
  }

  return (
    <StyledTweetsSection>
      <StyledNavLink to={'Home'}>
        <KeyboardBackspaceIcon sx={{ fontSize: 50 }} />
      </StyledNavLink>
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
