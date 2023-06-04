import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { StyledFilterBox, StyledFormControl } from './FilterSelect.styled';

export default function FilterSelect({ value, onChange }) {
  return (
    <StyledFilterBox sx={{ m: 3, minWidth: 140 }}>
      <StyledFormControl fullWidth size="small">
        <InputLabel
          id="filter-label"
          sx={{
            color: '#fff',
            '&.Mui-focused': {
              color: '#fff',
            },
          }}
        >
          Filter
        </InputLabel>
        <Select
          labelId="filter-label"
          id="filter"
          value={value}
          label="Filter"
          onChange={onChange}
          sx={{
            color: '#fff',
            borderColor: '#fff',
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: '#fff',
            },

            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#fff',
            },
            '.MuiSvgIcon-root': {
              color: '#fff',
            },
          }}
        >
          <MenuItem value={'All'}>All</MenuItem>
          <MenuItem value={'Follow'}>Follow</MenuItem>
          <MenuItem value={'Followings'}>Followings</MenuItem>
        </Select>
      </StyledFormControl>
    </StyledFilterBox>
  );
}
