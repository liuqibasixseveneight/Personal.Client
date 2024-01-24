import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import {
  About,
  Contact,
  Home,
  Projects,
  WithNavigation,
} from './components/modules';
import { ROUTES } from './config';

function App() {
  return (
    <Box w='100vw' h='100vh' bg='background.primary'>
      <Routes>
        <Route path={ROUTES?.HOME} Component={WithNavigation}>
          <Route path={ROUTES?.HOME} Component={Home} />
          <Route path={ROUTES?.ABOUT} Component={About} />
          <Route path={ROUTES?.PROJECTS} Component={Projects} />
          <Route path={ROUTES?.CONTACT} Component={Contact} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
