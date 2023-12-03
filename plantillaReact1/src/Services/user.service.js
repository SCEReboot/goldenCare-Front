import api from "."

export const  createPatient = async (data) => {
    const response = await api.post('/user/createPatient', data, {
      headers: {
        authorization: localStorage.getItem('token')
      }
    })
    return response.data
}

export const  createTask = async (data) => {
    const response = await api.post('/home/formTask', data)
    return response.data
}

export const getAllDataUser = async () => {

    const {data} = await api.get('/user/getData', {
        headers: {
          authorization: localStorage.getItem('token')
        }
      })
    return data
}

export const getNurses = async () => {
    const {data} = await api.get('/user/getNurses', {
        headers: {
          authorization: localStorage.getItem('token')
        }
      })
    return data
}

export const assignPatientNurse = async (data) => {
  console.log(data)
  const response = await api.put('user/assignPatient',data , {
    headers: {
      authorization: localStorage.token
    }
  } )
  return response
}

export const  getMyTasks = async (data) => {
  const response = await api.get('/task/myTasks', {
    headers: {
      authorization: localStorage.token
    }
  })
  return response.data
}