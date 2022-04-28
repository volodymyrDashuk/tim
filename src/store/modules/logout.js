import axios from "../../axios";

export default {
    actions: {
        async logout() {
            try {
                await axios.post('logout')
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                localStorage.setItem("user-theme", '');
                document.documentElement.className = "";
            } catch (e) {
                console.log(e)
            }
        }
    }
}