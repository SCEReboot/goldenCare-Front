import api from "."

export const  createTask = async (data) => {
    const response = await api.post('/task', data, {
      headers: {
        authorization: localStorage.getItem('token')
      }
    })
    return response.data
}

export const  updateTask = async (task) => {
  const response = await api.put(`/task/${task.id}`, {completed: task.completed}, {
    headers: {
      authorization: localStorage.getItem('token')
    }
  })
  return response.data
}