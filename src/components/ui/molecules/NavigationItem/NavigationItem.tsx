import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { Link as ChakraLink, VisuallyHidden } from '@chakra-ui/react';

import { NavigationItemProps } from './types';

const NavigationItem: FC<NavigationItemProps> = ({
  navigationItem: { displayName, hiddenName, path },
  isActive,
}) => {
  return (
    <ChakraLink
      to={path}
      as={Link}
      cursor='pointer'
      color={isActive ? 'highlight.primary' : 'background.primary'}
      fontSize='2xl'
      fontFamily='Protomolecule'
      _hover={{
        color: 'highlight.primary',
        transition: 'all 0.2s ease-in-out',
      }}
      userSelect='none'
    >
      _{displayName}
      <VisuallyHidden>{hiddenName}</VisuallyHidden>
    </ChakraLink>
  );
};

export default NavigationItem;
