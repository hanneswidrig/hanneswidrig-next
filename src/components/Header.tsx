import React from 'react';
import { ReactComponent as GitHub } from '../resources/svg/github.svg';
import styled from '@emotion/styled';
import { colors } from '../resources/colors';

interface HeaderProps {
  fullName: string;
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding-bottom: 2rem;
`;

const StyledName = styled.div``;

const StyledLink = styled.a`
  font-size: 2rem;
  color: ${colors.white};
  box-shadow: none;
  text-decoration: none;
  margin: 2rem 0;
  transition: ease-out 200ms;

  &:hover,
  &:active {
    color: ${colors.lightgreen};
  }
`;

const StyledGitHub = styled(GitHub)`
  width: 43px;
  height: 43px;
  fill: ${colors.white};
  cursor: pointer;
  transition: ease-out 200ms;

  &:hover {
    fill: ${colors.lightgreen};
  }
`;

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <StyledHeader>
      <StyledName>
        <StyledLink href="/">{props.fullName}</StyledLink>
      </StyledName>
      <StyledGitHub />
    </StyledHeader>
  );
};
