import {mapActions, mapGetters} from "vuex";
import Toggle from "@/components/Toggle/Toggle";

export default {
    name: 'AccountDropdown',
    components: {Toggle},
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