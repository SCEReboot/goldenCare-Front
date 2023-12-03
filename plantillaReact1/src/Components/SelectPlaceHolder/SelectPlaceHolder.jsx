
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useEffect, useState } from 'react';
import { getNurses } from '../../Services/user.service';


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


export default function MultipleSelectPlaceholder({setNurse}) {

  const theme = useTheme()
  const [nurses, setNurses] = useState([])
  const [selectedNurse, setSelectedNurse] = useState([]);

  useEffect(() => {

    const obtenerEnfermerasDesdeAPI = async () => {
      try {
        const response = await getNurses();
        console.log(response)
        setNurses(response)

      } catch (error) {
        console.error('Error al obtener enfermeras:', error);
      }
    };

    obtenerEnfermerasDesdeAPI();
  }, [])

  const handleChange = (event) => {///////////porque no esta marcado?
    
    setSelectedNurse(event.target.value)
    console.log(event)
    setNurse(event.target.value)
  }

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300, mt: 3 ,color:'white'}}>
        <Select
  
          displayEmpty
          value={selectedNurse}
          onChange={(e)=>{
            setNurse(e.target.value)
          }}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Select</em>;
            }

            return selectedNurse
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Select a nurse</em>
          </MenuItem>
          {nurses.map((nurse) => (
            <MenuItem
              key={nurse.id}
              value={nurse.id}
            >
              {nurse.first_name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
