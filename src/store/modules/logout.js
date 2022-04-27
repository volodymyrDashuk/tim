import axios from "../../axios";

export default {
    actions: {
        async logout() {
            try {
                await axios.post('logout')
                localStorage.removeItem('token')
                localStorage.removeItem('user')
            } catch (e) {
                console.log(e)
            }
        }
    }
}