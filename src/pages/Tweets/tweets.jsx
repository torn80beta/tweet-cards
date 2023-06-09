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
import { StyledLoadSpinner } from 'components/LoadSpinner/LoadSpinner.styled';
import { RotatingLines } from 'react-loader-spinner';
import Filter from 'components/Filter/Filter';
import ScrollToTop from 'react-scroll-to-top';
import { LayoutSwitch } from 'components/Switch/Switch';

const Tweets = () => {
  const dispatch = useDispatch();
  const tweets = useSelector(getUsers);
  const isFetching = useSelector(getIsLoading);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('All');
  const [layout, setLayout] = useState(true);

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch, page]);

  useEffect(() => {
    return () => {
      dispatch(clearTweetsOuUnmount());
      setPage(1);
    };
  }, [dispatch]);

  const handleFilterChange = ({ value }) => {
    setFilter(value);
  };

  function handleLoadMore() {
    setPage(page + 1);
  }

  const handleLayoutSwitch = event => {
    setLayout(event.target.checked);
  };

  const filteredTweets = () => {
    if (filter === 'Follow') {
      return tweets.filter(tweet => tweet.follow === false);
    }
    if (filter === 'Followings') {
      return tweets.filter(tweet => tweet.follow === true);
    }
    return tweets;
  };

  return (
    <StyledTweetsSection>
      <StyledNavLink to={'Home'}>
        <KeyboardBackspaceIcon sx={{ fontSize: 50 }} />
      </StyledNavLink>
      {filteredTweets().length > 1 && !isFetching && (
        <LayoutSwitch
          onChange={handleLayoutSwitch}
          checked={layout}
        ></LayoutSwitch>
      )}
      <Filter onChange={handleFilterChange} value={filter}></Filter>
      {isFetching && (
        <StyledLoadSpinner>
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </StyledLoadSpinner>
      )}
      <StyledTweetsUl
        style={
          layout
            ? { flexDirection: 'column' }
            : { flexDirection: 'row', flexWrap: 'wrap' }
        }
      >
        {filteredTweets().length === 0 && !isFetching && (
          <p style={{ color: 'white' }}>
            There is nothing to display ¯\_(ツ)_/¯
          </p>
        )}
        {filteredTweets().map(tweet => (
          <li key={tweet.id}>
            <TweetCard tweet={tweet} />
          </li>
        ))}
      </StyledTweetsUl>
      {tweets.length > 0 && tweets.length < 40 && filter === 'All' && (
        <StyledLoadMoreButton
          type="button"
          onClick={handleLoadMore}
          disabled={isFetching}
        >
          Load more
        </StyledLoadMoreButton>
      )}
      <ScrollToTop smooth style={{ background: '#ebd8ff' }} />
    </StyledTweetsSection>
  );
};

export default Tweets;
