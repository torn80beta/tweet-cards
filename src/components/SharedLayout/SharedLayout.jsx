import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { StyledLoadSpinner } from 'components/LoadSpinner/LoadSpinner.styled';
import { RotatingLines } from 'react-loader-spinner';
import DrawerAppBar from 'components/Header/Header';

const SharedLayout = () => {
  return (
    <div>
      <DrawerAppBar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tweets">Tweets</NavLink>
      </DrawerAppBar>
      <Suspense
        fallback={
          <StyledLoadSpinner>
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
          </StyledLoadSpinner>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
