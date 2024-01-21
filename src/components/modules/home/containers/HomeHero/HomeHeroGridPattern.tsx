import styled from 'styled-components';

import { HomeHeroGridPatternProps } from '../../types';

export const HomeHeroGridPattern = styled.div<HomeHeroGridPatternProps>`
  background-size: 40px 40px;
  background-image: linear-gradient(
      to right,
      ${({ $gridColor }) => $gridColor} 1px,
      transparent 1px
    ),
    linear-gradient(
      to bottom,
      ${({ $gridColor }) => $gridColor} 1px,
      transparent 1px
    );
`;
