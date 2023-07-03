import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

import { useRef } from 'react';

const Wrapper = styled.div`
  display: flex;
  position: relative;

  border-radius: 4px;

  &:focus-within {
    outline: 3px solid ${COLORS.primary};
  }
`;

const IconWrapper = styled.div`
  padding-right: 12px;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;

  margin: auto;

  width: 24px;
  height: 24px;
`;

const StyledInput = styled.input`
  padding-left: 32px;

  border: none;
  border-bottom: 2px solid black;
  outline: none;

  flex-grow: 2;

  font-size: var(--size);

  font-family: Roboto, sans-serif;
  color: ${COLORS.gray700};

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:hover&::placeholder {
    color: black;
  }
`;



const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const inputRef = useRef(null);

  const iconClick = () => {
    inputRef.current.focus();
  }

  return (
    <Wrapper style={{width}}>
      <IconWrapper onClick={iconClick}>
        <Icon id={icon} size={size == 'large' ? 24 : 16} />
      </IconWrapper>
      <VisuallyHidden>
        <label>{label}</label>
      </VisuallyHidden>
      <StyledInput ref={inputRef} style={{'--size': size == 'large' ? '2rem' : '1rem'}} type="text" placeholder={placeholder} />
    </Wrapper>
  )
};

export default IconInput;
