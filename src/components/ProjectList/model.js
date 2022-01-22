import ProjectItem from "../ProjectItem/ProjectItem"
import Popup from "../Popup/Popup";
import useVuelidate from "@vuelidate/core";
import {required} from "@vuelidate/validators";
import {mapGetters, mapActions} from "vuex"

export default {
    name: 'ProjectList',
    components: {
        ProjectItem,
        Popup
    },
    setup() {
        return {v$: useVuelidate()};
    },
    data() {
        return {
            projectName: "",
            isModalShow: false
        };
    },
    validations() {
        return {
            projectName: {required}
        };
    },
    methods: {
        ...mapActions(['fetchProjects', 'createProject']),
        showModal: function () {
            this.isModalShow = true
        },
        closeModal() {
            this.isModalShow = false
            this.projectName = ''
        },
        submitHandler() {
            this.v$.$touch()
            if (this.v$.$error) return
            this.createProject ({
                name: this.projectName
            })
            this.closeModal()
            this.$nextTick(() => {
                this.v$.$reset()
            })
        }
    },
    computed: {
        ...mapGetters(['getProjects'])
    },
    mounted() {
        this.fetchProjects()
    }
}