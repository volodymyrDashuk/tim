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
            await axios.post('logout')
            this.$toast.show(`Logged out successfully.`,  {
                type: 'info'
            });
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            await this.$router.push('/login')
        }
    },
    computed: {
        ...mapGetters(['getUserName'])
    },
    mounted() {
        this.user();
    }
}