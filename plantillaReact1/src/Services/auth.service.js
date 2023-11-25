import api from "./index"
const login = async (data) => {
    const response = await api.post('/auth/login', data)
    return response.data
 }
export default login