import axios from "../../axios";

export default {
    actions: {
        async registration(context, formData) {
            const response = await axios.post('register', formData)
            localStorage.setItem('token', response.data.data.token)
            localStorage.setItem('user', true)
        }
    }
}