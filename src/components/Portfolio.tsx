import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../resources/colors';
import { ReactComponent as GitBranch } from '../resources/svg/branch-f.svg';

const StyledContainer = styled.div`
  padding-bottom: 2rem;
`;
const PortfolioItem = styled.div``;
const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.125rem;
  padding: 1rem;
  font-weight: 500;
  color: ${colors.black};
  background-color: ${colors.darkyellow};
`;
const Description = styled.div`
  padding: 1.25rem 1rem;
  text-align: left;
  color: ${colors.black};
  background-color: ${colors.white};
`;
const StyledGitBranch = styled(GitBranch)`
  width: 24px;
  height: 24px;
  fill: ${colors.black};
  cursor: pointer;
  padding: 0.5rem;
  transition: ease-out 200ms;

  &:hover {
    fill: ${colors.lightblue};
  }
`;

type PortfolioProps = {};
export const Portfolio: React.FC<PortfolioProps> = () => {
  return (
    <StyledContainer>
      <PortfolioItem>
        <Name>
          <div>{"Gardener's Exchange"}</div>
          <StyledGitBranch />
        </Name>
        <Description>
          {
            'Peer to peer application that brings the local community together through buying, selling, and trading of home grown produce.'
          }
        </Description>
      </PortfolioItem>
    </StyledContainer>
  );
};
