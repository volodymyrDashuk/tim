import TimesheetTableDaysFilter from '../../components/TimesheetTableDaysFilter/TimesheetTableDaysFilter.vue'
import TimesheetTableItem from '../../components/TimesheetTableItem/TimesheetTableItem.vue'
import Popup from '../../components/Popup/Popup.vue'
import axios from '../../axios'
import useVuelidate from "@vuelidate/core";
import {required} from "@vuelidate/validators";

export default {
    components: {
        TimesheetTableDaysFilter,
        TimesheetTableItem,
        Popup
    },
    setup() {
        return {v$: useVuelidate()};
    },
    data() {
        return {
            timesheetItems: [],
            project: "",
            note: "",
            startTime: "",
            endTime: "",
            isModalShow: false
        };
    },
    validations() {
        return {
            project: {required},
            note: {required},
            startTime: {required},
            endTime: {required},
        };
    },
    methods: {
        showModal: function () {
            this.isModalShow = true
        },
        closeModal() {
            this.isModalShow = false
            this.project = ''
            this.note = ''
            this.startTime = ''
            this.endTime = ''
        },
        refreshData: async function () {
            console.log('start refreshData')
            try {
                const response = await axios.get('task-times')
                this.timesheetItems = response.data.data
            } catch (e) {
                console.log(e)
            }
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
            this.closeModal()
        }
    },
    mounted() {
        this.refreshData();
    }
}