import {mapActions, mapGetters} from "vuex";

export default {
    name: 'AccountDropdown',
    data() {
        return {
            showDropDown: false
        };
    },
    methods: {
        ...mapActions(['user'])
    },
    computed: {
        ...mapGetters(['getUserName'])
    },
    mounted() {
        this.user();
    }
}