import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../resources/colors';

const StyledExperience = styled.main`
  display: flex;
`;

const StyledCategory = styled.div`
  display: flex;
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
  const frontend = ['React', 'Angular'];
  return (
    <StyledCategory>
      <CategoryChip name="Front-End" />
      {frontend.map((framework, idx) => (
        <Chip key={idx} name={framework} />
      ))}
    </StyledCategory>
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
