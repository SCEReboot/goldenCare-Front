import React from 'react'
import FormPatient from '../../Components/FormPatient/FormPatient'
import CardProfile from '../../Components/CardProfile/CardProfile'
import { useLocation } from 'react-router-dom'

function CreatePatient() {
  let { state } = useLocation();
  console.log(state)
  return (
    <>
    <CardProfile user={state.user}/>
    <FormPatient/>
    </>
  )
}

export default CreatePatient