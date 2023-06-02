import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/tweets">Tweets</NavLink>
        </nav>
      </header>
      <Suspense
        fallback={
          <p>...Loading</p>
          // {/* <StyledLoadSpinner>
          //   <RotatingLines
          //     strokeColor="grey"
          //     strokeWidth="5"
          //     animationDuration="0.75"
          //     width="96"
          //     visible={true}
          //   />
          // </StyledLoadSpinner> */}
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
