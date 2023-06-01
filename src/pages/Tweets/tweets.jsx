import { TweetsSection } from 'components/TweetsSection/TweetsSection';
import { getUsers } from 'redux/users/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from 'redux/users/operations';

export const Tweets = () => {
  const dispatch = useDispatch();
  const tweets = useSelector(getUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    // console.log(tweets),
    <section>
      <TweetsSection></TweetsSection>
    </section>
  );
};
