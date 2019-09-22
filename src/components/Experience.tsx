import React from 'react';
import styled from '@emotion/styled';

import { Technical } from './Technical';
import { Work } from './Work';
import { Portfolio } from './Portfolio';
import { Education } from './Education';

const StyledExperience = styled.main`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
`;

type ExperienceProps = {};
export const Experience: React.FC<ExperienceProps> = () => {
  return (
    <StyledExperience>
      <Technical />
      <Work />
      <Education />
      <Portfolio />
    </StyledExperience>
  );
};
