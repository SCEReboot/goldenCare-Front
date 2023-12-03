import api from "."

export const getOnePatient  = async () => {

    const {data} = await api.get('/patient/:id', {
        headers: {
          authorization: localStorage.getItem('token')
        }
      })
      console.log(data)
    return data
}
export const getAllPatientData = async (id) => {
  
  const {data} = await api.get(`/patient/getAllPatientData/${id}`, {
    headers: {
      authorization: localStorage.getItem('token')
    }
  })
  console.log(data)
  return data
}