import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../resources/colors';

const StyledContainer = styled.div`
  margin-bottom: 2rem;
`;

const StyledCategory = styled.div`
  display: flex;
  width: 100%;

  & + & {
    margin-top: 1rem;
  }
`;

const StyledChip = styled.div`
  display: flex;
  color: ${colors.white};
  background-color: ${colors.rust};
  padding: 4px 8px;

  & + & {
    margin-left: 0.25rem;
  }
`;

const StyledCategoryChip = styled(StyledChip)`
  font-weight: 500;
  width: 128px;
  color: ${colors.black};
  background-color: ${colors.darkyellow};
  margin-right: 0.5rem;
`;

export const Technical = (): JSX.Element => {
  const frontend = [
    { name: 'Web', items: ['JavaScript', 'TypeScript'] },
    { name: 'Front-End', items: ['React', 'Angular'] },
    { name: 'Back-End', items: ['.NET Core', 'Node.js'] },
    { name: 'General Purpose', items: ['C#', 'Python', 'C'] },
    { name: 'Toolbox', items: ['VSCode', 'Jetbrains Suite', 'Figma'] },
  ];
  return (
    <StyledContainer>
      {frontend.map((category, idx) => (
        <StyledCategory key={idx}>
          <CategoryChip name={category.name} />
          {category.items.map((framework, idx) => (
            <Chip key={idx} name={framework} />
          ))}
        </StyledCategory>
      ))}
    </StyledContainer>
  );
};

type ChipProps = {
  name: string;
};
const CategoryChip = (props: ChipProps) => {
  return <StyledCategoryChip>{props.name}</StyledCategoryChip>;
};
const Chip = (props: ChipProps) => {
  return <StyledChip>{props.name}</StyledChip>;
};
