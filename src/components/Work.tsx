import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../resources/colors';

const StyledContainer = styled.div`
  padding-bottom: 2rem;
`;

const Job = styled.div`
  display: flex;
  padding: 1rem;
  text-align: left;
  flex-direction: column;
  color: ${colors.white};
  background: rgb(219, 50, 54);
  background: linear-gradient(
    135deg,
    rgba(219, 50, 54, 1) 0%,
    rgba(175, 54, 120, 1) 100%
  );
`;
const JobTopline = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const JobTitle = styled.div`
  font-weight: 600;
  font-size: 1.337rem;
  margin-bottom: 0.5rem;
`;
const JobSubsection = styled.div`
  font-size: 0.875rem;
`;

type WorkProps = {};
export const Work: React.FC<WorkProps> = () => {
  const jobs = ['developer'];
  return (
    <StyledContainer>
      {jobs.map(job => (
        <Job key={job}>
          <JobTopline>
            <JobTitle>{'Software Engineer'}</JobTitle>
            <JobSubsection>{'January 2019 - Present'}</JobSubsection>
          </JobTopline>
          <JobSubsection>{'DMI (Digital Management, LLC)'}</JobSubsection>
          <JobSubsection>{'Indianapolis, IN'}</JobSubsection>
        </Job>
      ))}
    </StyledContainer>
  );
};
