import React from 'react'
import FormTask from '../../Components/FormTask/FormTask'
import { useLocation } from 'react-router-dom'
import CardProfile from '../../Components/CardProfile/CardProfile'


function Task() {
  let { state } = useLocation();
  
  return (
    <>
    <FormTask  patients={state.user.relativePatient}/>
    </>
  )
}

export default Task