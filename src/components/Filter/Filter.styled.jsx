import styled from '@emotion/styled';
import Select from 'react-select';

export const StyledFilterWrapper = styled.div`
  position: fixed;
  box-sizing: border-box;
  top: 62px;
  right: calc((100vw - 90%) * 0.25);
  min-width: 140px;
`;

export const StyledSelect = styled(Select)`
  background: #29272c;
`;
