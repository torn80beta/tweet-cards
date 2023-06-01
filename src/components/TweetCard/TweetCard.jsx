export const TweetCard = ({
  tweet: { name, avatar, tweets, followers, id },
}) => {
  return (
    // console.log(id),
    <>
      {/* <div>{id}</div> */}
      <div>{name}</div>
      <img src={avatar} alt={name} />
      <div>Tweets - {tweets}</div>
      <div>Followers - {followers}</div>
    </>
  );
};
