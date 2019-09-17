import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../resources/colors';

const StyledExperience = styled.main`
  display: flex;
  flex-direction: column;
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
  background-color: ${colors.yellow};
  margin-right: 0.5rem;
`;

export const Experience: React.FC = () => {
  return (
    <StyledExperience>
      <Technical />
    </StyledExperience>
  );
};

const Technical: React.FC = () => {
  const frontend = [
    { name: 'Web', items: ['JavaScript', 'TypeScript'] },
    { name: 'Front-End', items: ['React', 'Angular'] },
    { name: 'Back-End', items: ['.NET Core', 'Node.js'] },
    { name: 'General Purpose', items: ['Python', 'C'] },
    { name: 'Toolbox', items: ['VSCode', 'Jetbrains Suite', 'Figma'] },
  ];
  return (
    <>
      {frontend.map((category, idx) => (
        <StyledCategory key={idx}>
          <CategoryChip name={category.name} />
          {category.items.map((framework, idx) => (
            <Chip key={idx} name={framework} />
          ))}
        </StyledCategory>
      ))}
    </>
  );
};

interface ChipProps {
  name: string;
}
const CategoryChip: React.FC<ChipProps> = (props: ChipProps) => {
  return <StyledCategoryChip>{props.name}</StyledCategoryChip>;
};
const Chip: React.FC<ChipProps> = (props: ChipProps) => {
  return <StyledChip>{props.name}</StyledChip>;
};
