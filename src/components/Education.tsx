import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../resources/colors';
import { boxShadow } from '../resources/styles/styledExtras';

const StyledContainer = styled.div`
  margin-bottom: 2rem;
  ${boxShadow};
`;

const School = styled.div`
  display: flex;
  padding: 1rem;
  text-align: left;
  flex-direction: column;
  color: ${colors.white};
  background-color: ${colors.purple};
`;

const SchoolTopline = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const SchoolName = styled.div`
  font-weight: 600;
  font-size: 1.337rem;
  margin-bottom: 0.5rem;
`;
const SchoolSubsection = styled.div`
  font-size: 0.875rem;
`;

export const Education = () => {
  return (
    <StyledContainer>
      <School>
        <SchoolTopline>
          <SchoolName>{'B.S. Computer Science w/ Systems'}</SchoolName>
          <SchoolSubsection>{'Fall 2016 - Fall 2018'}</SchoolSubsection>
        </SchoolTopline>
        <SchoolSubsection>{'Taylor University'}</SchoolSubsection>
        <SchoolSubsection>{'Upland, IN'}</SchoolSubsection>
      </School>
    </StyledContainer>
  );
};
