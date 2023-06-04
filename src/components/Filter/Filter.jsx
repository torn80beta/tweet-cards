import { StyledFilterWrapper, StyledSelect } from './Filter.styled';

const options = [
  { value: 'All', label: 'All' },
  { value: 'Follow', label: 'Follow' },
  { value: 'Followings', label: 'Followings' },
];

export default function Filter({ value, onChange }) {
  return (
    <StyledFilterWrapper className="BaseFilter">
      <StyledSelect
        defaultValue={value}
        onChange={onChange}
        options={options}
        placeholder={'Filter'}
      />
    </StyledFilterWrapper>
  );
}
