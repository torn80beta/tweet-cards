import * as React from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import PropTypes from 'prop-types';

export const LayoutSwitch = ({ checked, onChange }) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            checked={checked}
            onChange={onChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        }
        label="Layout control"
        labelPlacement="top"
        sx={{ color: 'white' }}
      />
    </FormGroup>
  );
};

LayoutSwitch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
