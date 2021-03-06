import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../colors';
import { dmiGradient, boxShadow } from '../styledExtras';

type WorkItem = {
  key: string;
  title: string;
  companyName: string;
  companyLocation: string;
  companyDuration: string;
};

const StyledContainer = styled.div`
  margin-bottom: 2rem;
  ${boxShadow};
`;

const MapKeyToStyle: (key: string, cssProperty: string) => string = (key: string, cssProperty: string) => {
  const style: Record<string, Record<string, string>> = {
    background: {
      dmi: dmiGradient,
      fusion: colors.grey,
    },
    marginTop: {
      dmi: '',
      fusion: '16px',
    },
  };
  return style[cssProperty][key];
};

type JobProps = {
  gradient: string;
};
const Job = styled.div<JobProps>`
  display: flex;
  padding: 1rem;
  text-align: left;
  flex-direction: column;
  color: ${colors.white};
  background: ${(props) => MapKeyToStyle(props.gradient, 'background')};
  margin-top: ${(props) => MapKeyToStyle(props.gradient, 'marginTop')};
`;

const JobTopline = styled.div`
  width: 100%;
  display: flex;
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

export const Work = (): JSX.Element => {
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
      {jobs.map((job) => (
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
