import * as React from 'react'
import Switch from '@mui/material/Switch'
import { Checkbox } from '@mui/material'

export default function ButtonDone(props) {

React.useEffect(() => {
    props.onHandleUpdateTask({id: props.id, completed: props.completed})
}, [props.completed])


  return (
    <>
    <Checkbox color='success' checked={props.tCompleted}
      onChange={() => props.setCompleted(!props.completed)}/>

    </>

  )
}