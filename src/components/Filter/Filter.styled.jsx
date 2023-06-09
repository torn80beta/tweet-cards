import styled from '@emotion/styled';
import Select from 'react-select';

export const StyledFilterWrapper = styled.div`
  position: fixed;
  box-sizing: border-box;
  top: 10px;
  left: calc((50vw + 50%) * 0.46);
  min-width: 140px;
  z-index: 1100;
`;

export const StyledSelect = styled(Select)`
  background: #29272c;
`;
