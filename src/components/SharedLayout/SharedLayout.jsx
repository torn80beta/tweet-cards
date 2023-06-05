import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import DrawerAppBar from 'components/Header/Header';

const SharedLayout = () => {
  return (
    <div>
      <DrawerAppBar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tweets">Tweets</NavLink>
      </DrawerAppBar>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
