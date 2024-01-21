import { type FC } from 'react';
import { Box, useTheme } from '@chakra-ui/react';

import { HomeHeroGridPattern } from './HomeHeroGridPattern';
import { HomeHeroText } from '../../composites';

const HomeHero: FC = () => {
  const theme = useTheme();

  const {
    colors: {
      background: { secondary: backgroundSecondary },
    },
  } = theme;

  return (
    <HomeHeroGridPattern $gridColor={backgroundSecondary}>
      <Box
        w='full'
        minW='100vw'
        h='full'
        minH='100vh'
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <HomeHeroText />
      </Box>
    </HomeHeroGridPattern>
  );
};

export default HomeHero;
