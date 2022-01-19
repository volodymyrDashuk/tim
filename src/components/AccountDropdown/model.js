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
            ],
            name: ''
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
        },
        async getUserName() {
            const response = await axios.get('me')
            this.name = response.data.data.user.name;
        }
    },
    mounted() {
        this.getUserName();
    }
}