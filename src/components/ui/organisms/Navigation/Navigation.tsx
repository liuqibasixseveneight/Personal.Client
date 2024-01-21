import { type FC } from 'react';
import { useLocation } from 'react-router-dom';
import { HStack, List, ListItem, Text, VisuallyHidden } from '@chakra-ui/react';

import { NavigationProps } from './types';
import { NavigationItem } from '../..';

const Navigation: FC<NavigationProps> = ({ navigationItems }) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <List as='nav' w='full' bg='text.primary' h='80px'>
      <HStack w='full' h='full' justifyContent='space-between' px={16}>
        <Text
          color='background.tertiary'
          fontSize='2xl'
          fontFamily='Protomolecule'
          userSelect='none'
        >
          // Navigation
          <VisuallyHidden>Navigation</VisuallyHidden>
        </Text>

        <HStack spacing={8} justifyContent='space-between'>
          {navigationItems?.map((navItem, index) => (
            <ListItem key={`${index}-${navItem?.id}-${navItem?.displayName}`}>
              <NavigationItem
                navigationItem={navItem}
                isActive={pathname === navItem?.path}
              />
            </ListItem>
          ))}
        </HStack>
      </HStack>
    </List>
  );
};

export default Navigation;
