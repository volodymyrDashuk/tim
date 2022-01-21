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
            localStorage.removeItem('user')

            await this.$router.push('/login')
            console.log('end logout')
        },
        async getUserName() {
            await axios
                .get('me')
                .then(response => {
                    this.name = response.data.data.user.name;
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },
    mounted() {
        this.getUserName();
    }
}