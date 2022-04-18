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
        ...mapActions(['user', 'logout']),
        async accountLogout() {
            await this.logout()
            this.$toast.show(`Logged out successfully.`,  {
                type: 'info'
            });
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