import axios from "../../axios";

export default {
    actions: {
        async registration(context, formData) {
            try {
                const response = await axios.post('register', formData)
                localStorage.setItem('token', response.data.data.token)
                localStorage.setItem('user', true)
            } catch (e) {
                console.log(e)
            }
        }
    }
}