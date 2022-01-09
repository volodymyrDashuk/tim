import axios from "../../axios";

export default {
    name: 'AccountDropdown',
    data() {
        return {
            showDropDown: false,
            links: [
                {
                    name: "Logout",
                    class: "logout"
                }
            ]
        };
    },
    methods: {
        async logout() {
            console.log('start logout')
            const response = await axios.post(
                'logout'
            )
            localStorage.removeItem('token')

            await this.$router.push('/login')
            console.log('end logout')
        }
    }
}