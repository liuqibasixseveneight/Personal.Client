import { type FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Navigation } from '../../../ui';
import { navigationItems } from './navigationItems';

const WithNavigation: FC = () => {
  return (
    <>
      <Navigation navigationItems={navigationItems} />
      <Outlet />
    </>
  );
};

export default WithNavigation;
