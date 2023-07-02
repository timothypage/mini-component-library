import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';


const StyledSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  opacity: 0;
  appearance: none;

  cursor: pointer;
  `;

const StyledSelectDisplay = styled.div`
  background: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  border-radius: 8px;
  padding: 12px 16px;
  padding-right: 52px;

  ${StyledSelect}:focus + & {
    outline: 5px solid #4374CB;
    outline: 5px auto --webkit-focus-ring-color;
  }

  ${StyledSelect}:hover + & {
    color: black;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;

  width: 24px;
  height: 24px;

  margin: auto;
  pointer-events: none;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
      <StyledSelectDisplay>
        {displayedValue}&nbsp; 
        <IconWrapper>
          <Icon id="chevron-down" size={24} />
        </IconWrapper>
      </StyledSelectDisplay>
    </Wrapper>

  );
};

export default Select;
