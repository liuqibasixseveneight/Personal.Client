import { FC } from 'react';
import { Text } from '@chakra-ui/react';

import { PageHeadingProps } from './types';

const PageHeading: FC<PageHeadingProps> = ({ title, color }) => {
  return (
    <Text
      as='h1'
      color={color ?? 'text.primary'}
      fontFamily='Protomolecule'
      fontSize='6xl'
      userSelect='none'
    >
      {title}
    </Text>
  );
};

export default PageHeading;
