import axios from "../../axios";

export default {
    actions: {
        async login(context, formData) {
            const response = await axios.post('login', formData)
            localStorage.setItem('token', response.data.data.token)
            localStorage.setItem('user', true)
        }
    }
}