import React from 'react';
import { ReactComponent as GitHub } from '../resources/svg/github.svg';
import styled from '@emotion/styled';
import { colors } from '../resources/colors';

interface HeaderProps {
  fullName: string;
}

const StyledHeader = styled.header`
  height: 64px;
  display: flex;
  align-items: center;
  padding-bottom: 2rem;
  justify-content: space-between;
`;

const StyledName = styled.div``;

const StyledLink = styled.a`
  margin: 2rem 0;
  font-size: 2rem;
  box-shadow: none;
  text-decoration: none;
  color: ${colors.white};
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
    fill: ${colors.lightblue};
  }
`;

export const Header = (props: HeaderProps) => {
  return (
    <StyledHeader>
      <StyledName>
        <StyledLink href="/">{props.fullName}</StyledLink>
      </StyledName>
      <a href={'https://github.com/hanneswidrig'}>
        <StyledGitHub />
      </a>
    </StyledHeader>
  );
};
