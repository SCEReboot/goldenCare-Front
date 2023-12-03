import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import MultipleSelectPlaceholder from '../../Components/SelectPlaceHolder/SelectPlaceHolder';

function AddNurseToPatient() {
 const { patientId } = useParams()
 console.log(patientId)
  return (
   < MultipleSelectPlaceholder/>
  )
}

export default AddNurseToPatient