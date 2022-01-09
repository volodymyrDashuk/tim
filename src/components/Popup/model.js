import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import axios from '../../axios'

export default {
    name: 'popUp',
    props: ['refreshData'],
    setup() {
        return { v$: useVuelidate() };
    },
    data() {
        return {
            project: "",
            note: "",
            startTime: "",
            endTime: "",
            showModal: false
        };
    },
    validations() {
        return {
            project: { required },
            note: { required },
            startTime: { required },
            endTime: { required },
        };
    },
    methods: {
        openModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false
        },
        async submitHandler() {
            this.v$.$touch()
            if (this.v$.$error) return
            const formData = {
                project: this.project,
                name: this.note,
                start_time: this.startTime,
                end_time: this.endTime,
                date: new Date(2011, 0, 1, 0, 0, 0, 0)
            }
            const response = await axios.post('task-times', formData)
            this.refreshData();
            this.closeModal();
        }
    }
}