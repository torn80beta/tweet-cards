// import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { StyledFilterBox, StyledFormControl } from './FilterSelect.styled';

export default function FilterSelect({ value, onChange }) {
  return (
    <StyledFilterBox sx={{ minWidth: 140 }}>
      <StyledFormControl fullWidth size="small">
        <InputLabel id="filter-label">Filter</InputLabel>
        <Select
          labelId="filter-label"
          id="filter"
          value={value}
          label="Filter"
          onChange={onChange}
        >
          <MenuItem value={'All'}>All</MenuItem>
          <MenuItem value={'Follow'}>Follow</MenuItem>
          <MenuItem value={'Followings'}>Followings</MenuItem>
        </Select>
      </StyledFormControl>
    </StyledFilterBox>
  );
}
