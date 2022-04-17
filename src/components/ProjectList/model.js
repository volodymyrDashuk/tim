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
            isModalShow: false,
            edit: false,
            id: 0
        };
    },
    validations() {
        return {
            projectName: {required}
        };
    },
    methods: {
        ...mapActions(['fetchProjects', 'createProject', 'getProjectAction', 'editProject']),
        showModal: function () {
            this.isModalShow = true
        },
        closeModal() {
            this.isModalShow = false
            this.projectName = ''
        },
        async submitHandler() {
            this.v$.$touch()
            if (this.v$.$error) return
            await this.createProject ({
                name: this.projectName
            })
            this.$toast.show(`Created successfully.`,  {
                type: 'info'
            });
            this.closeModal()
            this.$nextTick(() => {
                this.v$.$reset()
            })
        },
        async editModal(id){
            this.edit = true
            this.id = id
            await this.getProjectAction(id)

            // ToDo: Отдельная функция.
            this.projectName = this.getUpdateProject.name
            this.showModal()
        },
        async updateProject() {
            await this.editProject({
                id: this.id,
                formData: {
                    name: this.projectName
                }
            })
            this.$toast.show(`Updated successfully.`,  {
                type: 'info'
            });
            this.closeModal()
            this.$nextTick(() => {
                this.v$.$reset()
            })
            this.edit = false
        },
        formSubmit() {
            if (this.edit) {
                this.updateProject()
            } else {
                this.submitHandler()
            }
        }
    },
    computed: {
        ...mapGetters(['getProjects', 'getUpdateProject'])
    },
    mounted() {
        this.fetchProjects()
    }
}