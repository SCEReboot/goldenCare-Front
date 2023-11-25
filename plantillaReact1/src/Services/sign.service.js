import api from "."

const signup = async (data) => {
    const response = await api.post('/auth/signup', data)
    return response.data
 }

export default signup