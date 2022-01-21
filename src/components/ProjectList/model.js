import ProjectItem from "../ProjectItem/ProjectItem"
import Popup from "../Popup/Popup";
import axios from "../../axios";
import useVuelidate from "@vuelidate/core";
import {required} from "@vuelidate/validators";

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
            projectItems: [],
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
        showModal: function () {
            this.isModalShow = true
        },
        closeModal() {
            this.isModalShow = false
            this.projectName = ''
        },
        refreshData: async function () {
            try {
                const response = await axios.get('projects')
                this.projectItems = response.data.data
            } catch (e) {
                console.log(e)
            }
        },
        async submitHandler() {
            this.v$.$touch()
            if (this.v$.$error) return
            const formData = {
                name: this.projectName
            }
            const response = await axios.post('projects', formData)
            this.refreshData()
            this.closeModal()
            this.$nextTick(() => {
                this.v$.$reset()
            })
        }
    },
    mounted() {
        this.refreshData();
    }
}