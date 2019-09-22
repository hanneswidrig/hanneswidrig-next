import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../resources/colors';
import { dmiGradient } from '../resources/styles/styledExtras';
import { WorkItem } from '../dataModels/root';

const StyledContainer = styled.div`
  margin-bottom: 2rem;
`;

type JobProps = {
  gradient: string;
};
const Job = styled.div<JobProps>`
  display: flex;
  padding: 1rem;
  text-align: left;
  flex-direction: column;
  color: ${colors.white};
  ${props => (props.gradient === 'dmi' ? dmiGradient : '')};
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
  const jobs: WorkItem[] = [
    {
      key: 'dmi',
      title: 'Software Engineer',
      companyName: 'DMI (Digital Management, LLC)',
      companyDuration: 'January 2019 - Present',
      companyLocation: 'Indianapolis, IN',
    },
    {
      key: 'fusion',
      title: 'UX Consultant Intern',
      companyName: 'Fusion Alliance',
      companyDuration: 'May 2018 - July 2018',
      companyLocation: 'Indianapolis, IN',
    },
  ];

  jobs.pop();

  return (
    <StyledContainer>
      {jobs.map(job => (
        <Job key={job.key} gradient={job.key}>
          <JobTopline>
            <JobTitle>{job.title}</JobTitle>
            <JobSubsection>{job.companyDuration}</JobSubsection>
          </JobTopline>
          <JobSubsection>{job.companyName}</JobSubsection>
          <JobSubsection>{job.companyLocation}</JobSubsection>
        </Job>
      ))}
    </StyledContainer>
  );
};
