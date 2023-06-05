import {
  StyledMain,
  StyledH1,
  StyledContainerDiv,
  StyledTextP,
  StyledImg,
  StyledH2,
  StyledUl,
  StyledLi,
  StyledH3,
} from './Home.styled';
import ScrollToTop from 'react-scroll-to-top';
import card from '../../images/card.jpg';
import follow from '../../images/follow.jpg';
import follow_2 from '../../images/follow_2.jpg';
import load_more from '../../images/load_more.jpg';
import filter from '../../images/filter.jpg';
import burger from '../../images/burger.jpg';
import modal from '../../images/modal.jpg';
import hi from '../../images/Hi.gif';

export const Home = () => {
  const technologies = [
    'React',
    'Redux Toolkit',
    'React Hooks',
    'Styled components',
    'Material UI',
    'Axios',
    'react-scroll-to-top',
    'react-select',
  ];

  return (
    <StyledMain>
      <StyledContainerDiv>
        <StyledH1>
          Welcome to TweetCards demo page!
          <StyledImg
            src={hi}
            style={{ height: 30, display: 'inline', margin: 0 }}
          />
        </StyledH1>
        <StyledTextP>
          This is a demo project that can be used as part of a larger project.
          It demonstrates the ability to view a list of social network users
          stored in a database.
        </StyledTextP>
        <StyledTextP>
          Each user's card reflects the user's Avatar, the number of "Tweets"
          and the number of the user's Followers.
        </StyledTextP>
        <StyledImg src={card} alt="card" />
        <StyledTextP>
          The "Follow" button displays the subscription status for this user. If
          you are subscribed - the button is green and the inscription is
          "Following". When clicking on the button in this state, the user will
          be unsubscribed, the color of the button will change to pale pink, and
          the number of subscribers will decrease by one.
        </StyledTextP>
        <StyledImg src={follow} alt="following" />
        <br />
        <StyledImg src={follow_2} alt="follow" />

        <StyledTextP>
          By default, when you go to the "TWEETS" page, the first five cards
          from the database are loaded. At the same time, the "Load more" button
          will appear at the bottom of the page, when clicked, the next five
          cards will be loaded. The "Load more" button only appears if the
          server still has cards available for download. The button is also not
          available during the server request process.
        </StyledTextP>
        <StyledImg src={load_more} alt="load more" />
        <StyledTextP>
          The user has the ability to filter already loaded cards using the
          "Filter" interface located on the top panel. If you select the
          "Follow" option, only the cards of users for which the subscription
          has not yet been issued will be displayed. If you select the
          "Following" option, cards of users with an active subscription will be
          displayed. In both cases, the "Load more" button will be disabled.
          Selecting the "All" option will display all currently loaded cards and
          a "Load more" button will appear at the bottom of the list.
        </StyledTextP>
        <StyledImg src={filter} alt="filter" />
        <StyledTextP>
          The application has a responsive design and can be comfortably used on
          devices with a screen width of 400px. When the screen width is less
          than 600px, the navigation buttons located on the top bar are moved to
          a modal menu, which is available by clicking on the "Burger Menu"
          icon. At the same time, for ease of use, the filtering interface
          remains available on the top panel.
        </StyledTextP>
        <StyledImg src={burger} alt="burger" />
        <br />
        <StyledImg src={modal} alt="modal" />
        <section>
          <StyledH2>Technologies</StyledH2>
          <StyledTextP>
            Technologies and libraries used to create this project:
          </StyledTextP>
          <StyledUl>
            {technologies.map(tech => (
              <StyledLi key={tech}>{tech}</StyledLi>
            ))}
          </StyledUl>
        </section>
        <StyledH3>
          Thank you for your attention to the project! I hope you enjoy it!
        </StyledH3>
      </StyledContainerDiv>
      <ScrollToTop smooth style={{ background: '#ebd8ff' }} />
    </StyledMain>
  );
};
