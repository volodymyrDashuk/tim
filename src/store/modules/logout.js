import axios from "../../axios";

export default {
    actions: {
        async logout() {
            await axios.post('logout')
            localStorage.removeItem('token')
            localStorage.removeItem('user')
        }
    }
}