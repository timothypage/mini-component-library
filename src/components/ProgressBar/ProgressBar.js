/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  large: '24px',
  medium: '12px',
  small: '8px'
}


const Styled = styled.div`
  height: ${props => SIZES[props.size]};
  background: ${COLORS.transparentGray15};
  border-radius: 4px;
  box-shadow: 0px 2px 4px 0px #80808059 inset;

  overflow: hidden;
`;

const ProgressBar = ({ value, size }) => {
  return (
    <Styled role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" size={size}>
      <VisuallyHidden>progress is {value} percent</VisuallyHidden>
      <div style={{height: 100+'%', width: value + '%', background: COLORS.primary}}></div>
    </Styled>
  );
};


export default ProgressBar;
