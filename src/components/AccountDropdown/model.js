import axios from "../../axios";
import {mapActions, mapGetters} from "vuex";

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
        ...mapActions(['user']),
        async logout() {
            const response = await axios.post(
                'logout'
            )
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            await this.$router.push('/login')
        },
    },
    computed: {
        ...mapGetters(['getUserName'])
    },
    mounted() {
        this.user();
    }
}