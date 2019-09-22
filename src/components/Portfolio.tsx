import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../resources/colors';
import { boxShadow } from '../resources/styles/styledExtras';
import { ReactComponent as GitBranch } from '../resources/svg/branch-f.svg';

const StyledContainer = styled.div`
  margin-bottom: 2rem;
  ${boxShadow};
`;

const Name = styled.div`
  display: flex;
  padding: 1rem;
  font-weight: 500;
  align-items: center;
  font-size: 1.125rem;
  color: ${colors.white};
  justify-content: space-between;
  background-color: ${colors.darkgreen};
`;
const Description = styled.div`
  text-align: left;
  padding: 1.25rem 1rem;
  color: ${colors.black};
  background-color: ${colors.white};
`;
const StyledGitBranch = styled(GitBranch)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  fill: ${colors.white};
  transition: ease-out 200ms;

  &:hover {
    background-color: ${colors.darkergreen};
  }
`;

type PortfolioProps = {};
export const Portfolio: React.FC<PortfolioProps> = () => {
  return (
    <StyledContainer>
      <Name>
        <div>{"Gardener's Exchange"}</div>
        <a href={'https://github.com/hanneswidrig/gardeners-exchange'}>
          <StyledGitBranch />
        </a>
      </Name>
      <Description>
        {
          'Peer to peer application that brings the local community together through buying, selling, and trading of home grown produce.'
        }
      </Description>
    </StyledContainer>
  );
};
