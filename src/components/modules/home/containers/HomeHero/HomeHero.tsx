import { type FC } from 'react';
import { useTheme } from '@chakra-ui/react';

import { HomeHeroGridPattern } from './HomeHeroGridPattern';
import { HomeHeroText } from '../../composites';
import { PageContainer } from '../../../../ui';

const HomeHero: FC = () => {
  const theme = useTheme();

  const {
    colors: {
      background: { secondary: backgroundSecondary },
    },
  } = theme;

  return (
    <HomeHeroGridPattern $gridColor={backgroundSecondary}>
      <PageContainer>
        <HomeHeroText />
      </PageContainer>
    </HomeHeroGridPattern>
  );
};

export default HomeHero;
