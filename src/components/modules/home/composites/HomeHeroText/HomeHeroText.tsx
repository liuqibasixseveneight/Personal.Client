import { type FC } from 'react';
import { Text, VStack, VisuallyHidden } from '@chakra-ui/react';

const HomeHeroText: FC = () => {
  return (
    <VStack>
      <Text
        as='h1'
        color='text.primary'
        fontFamily='Protomolecule'
        fontSize='6xl'
        userSelect='none'
      >
        JosHua_{'<riz />'}_Layton
      </Text>
      <VisuallyHidden>Joshua Riz Layton</VisuallyHidden>

      <Text
        color='text.secondary'
        fontSize='2xl'
        marginTop={2}
        userSelect='none'
      >
        Frontend Developer
      </Text>
    </VStack>
  );
};

export default HomeHeroText;
