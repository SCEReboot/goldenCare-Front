import * as React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function AddButton() {
  return (
    <Stack direction="row"  justifyContent="flex-end" width={"100%"} spacing={1}>
      <IconButton aria-label="delete" size="large">
        <AddCircleOutlineIcon fontSize="inherit" />
      </IconButton>
    </Stack>
  );
}