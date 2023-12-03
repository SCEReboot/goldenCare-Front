
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useEffect, useState } from 'react';
import { getAllDataUser } from '../../Services/user.service';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
     
    },
  },
};


export default function SelectPatient({patients, setPatientId}) {
  const theme = useTheme()
  // const [patients, setPatients] = useState([])
  const [selectedPatient, setSelectedPatient] = useState([]);
    function handleSelectPatient(id) {
      const result = patients.filter((patient) => patient.id === id)
      setSelectedPatient(result[0].first_name)
    
    }
  const handleChange = (event) => {

    handleSelectPatient(event.target.value)
    setPatientId(event.target.value)
  }

  return (
    <div>
      { patients && 
      <FormControl sx={{ m: 1, width: 300, mt: 3 ,color:'white'}}>
        <Select
          
          displayEmpty
          value={selectedPatient}
          onChange={
            handleChange
          }
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Select a Patient</em>
            }
            return selectedPatient
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Select a Patient</em>
          </MenuItem>
          {patients.map((patient) => (
            <MenuItem
              key={patient.id}
              value={patient.id}
            >
              {patient.first_name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
}
    </div>
  );
}
