import TimesheetTableDaysFilter from '../../components/TimesheetTableDaysFilter/TimesheetTableDaysFilter.vue'
import TimesheetTableItem from '../../components/TimesheetTableItem/TimesheetTableItem.vue'
import Popup from '../../components/Popup/Popup.vue'
import Dropdown from '../../components/Dropdown/Dropdown.vue'
import useVuelidate from "@vuelidate/core";
import {required} from "@vuelidate/validators";
import {mapActions, mapGetters} from "vuex";
import {minutesHoursHelper, fullDateHelper} from "../../helper";

export default {
    components: {
        TimesheetTableDaysFilter,
        TimesheetTableItem,
        Popup,
        Dropdown
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
            id: 0
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
            this.project = ''
            this.note = ''
            this.startTime = ''
            this.endTime = ''
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

            // ToDo: Отдельная функция.
            this.project = this.getUpdateTimesheet.project
            this.note = this.getUpdateTimesheet.name
            this.startTime = this.getUpdateTimesheet.start_time
            this.endTime = this.getUpdateTimesheet.end_time
            this.showModal()
        },
        async updateTimesheet() {
            const date = new Date()
            await this.editTimesheet({
                id: this.id,
                formData: {
                    project_id: this.project,
                    name: this.note,
                    start_time: minutesHoursHelper(this.startTime),
                    end_time: minutesHoursHelper(this.endTime),
                    date: fullDateHelper(date)
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
    },
    computed: {
        ...mapGetters(['getTimesheet', 'getTotalDuration', 'getUpdateTimesheet', 'getProjects']),
        isComplete () {
            return this.project && this.note && this.startTime && this.endTime;
        }
    },
    mounted() {
        this.fetchTimesheet();
        this.fetchProjects();
    }
}