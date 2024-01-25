import { FC } from 'react';
import { Box } from '@chakra-ui/react';

import { PageContainerProps } from './types';

const PageContainer: FC<PageContainerProps> = ({ children }) => {
  return (
    <Box
      alignItems='center'
      display='flex'
      justifyContent='center'
      h='full'
      minH='100vh'
      w='full'
      minW='100vw'
    >
      {children}
    </Box>
  );
};

export default PageContainer;
