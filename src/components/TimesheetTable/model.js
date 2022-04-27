import TimesheetTableDaysFilter from '../../components/TimesheetTableDaysFilter/TimesheetTableDaysFilter.vue'
import TimesheetTableItem from '../../components/TimesheetTableItem/TimesheetTableItem.vue'
import Popup from '../../components/Popup/Popup.vue'
import Dropdown from '../../components/Dropdown/Dropdown.vue'
import useVuelidate from "@vuelidate/core";
import Datepicker from 'vue3-date-time-picker';
import {required} from "@vuelidate/validators";
import {mapActions, mapGetters} from "vuex";
import {minutesHoursHelper, fullDateHelper} from "../../helper";

export default {
    components: {
        TimesheetTableDaysFilter,
        TimesheetTableItem,
        Popup,
        Dropdown,
        Datepicker
    },
    setup() {
        return {v$: useVuelidate()}
    },
    data() {
        return {
            project: 0,
            note: "",
            startTime: "",
            endTime: "",
            isModalShow: false,
            edit: false,
            id: 0,
            date: '',
            editDate: ''
        };
    },
    validations() {
        return {
            project: {required},
            note: {required},
            startTime: {required},
            endTime: {required}
        };
    },
    methods: {
        ...mapActions(['createTimesheet', 'fetchTimesheet', 'getTimesheetAction', 'editTimesheet', 'fetchProjects']),
        showModal: function () {
            this.isModalShow = true
        },
        closeModal() {
            this.isModalShow = false
            this.edit = false
            this.project = ''
            this.note = ''
            this.startTime = ''
            this.endTime = ''
            this.editDate = ''
        },
        async submitHandler() {
            this.v$.$touch()
            if (this.v$.$error) return
            const date = new Date()
            await this.createTimesheet({
                project_id: this.project,
                name: this.note,
                start_time: minutesHoursHelper(this.startTime),
                end_time: minutesHoursHelper(this.endTime),
                date: fullDateHelper(date)
            })
            this.$toast.show(`Created successfully.`,  {
                type: 'info'
            });
            this.closeModal()
            this.$nextTick(() => {
                this.v$.$reset()
            })
        },
        formSubmit() {
            if (this.edit) {
                this.updateTimesheet()
            } else {
                this.submitHandler()
            }
        },
        async editModal(id) {
            this.edit = true
            this.id = id
            await this.getTimesheetAction(id)
            this.project = this.getUpdateTimesheet.project.name
            this.note = this.getUpdateTimesheet.name
            this.startTime = this.getUpdateTimesheet.start_time
            this.endTime = this.getUpdateTimesheet.end_time
            this.date = this.getUpdateTimesheet.date
            this.editDate = this.getUpdateTimesheet.date
            this.showModal()
        },
        async updateTimesheet() {
            await this.editTimesheet({
                id: this.id,
                formData: {
                    project_id: this.project,
                    name: this.note,
                    start_time: minutesHoursHelper(this.startTime),
                    end_time: minutesHoursHelper(this.endTime),
                    date: fullDateHelper(this.editDate)
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
        }
    },
    computed: {
        ...mapGetters(['getTimesheet', 'getTotalDuration', 'getUpdateTimesheet', 'getProjects']),
        isComplete () {
            return this.project && this.note && this.startTime && this.endTime;
        }
    },
    mounted() {
        this.fetchProjects();
    }
}