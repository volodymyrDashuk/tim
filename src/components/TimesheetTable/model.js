import TimesheetTableDaysFilter from '../../components/TimesheetTableDaysFilter/TimesheetTableDaysFilter.vue'
import TimesheetTableItem from '../../components/TimesheetTableItem/TimesheetTableItem.vue'
import Popup from '../../components/Popup/Popup.vue'
import Dropdown from '../../components/Dropdown/Dropdown.vue'
import useVuelidate from "@vuelidate/core";
import {required} from "@vuelidate/validators";
import {mapActions, mapGetters} from "vuex";
import {dateHelper} from "../../helper";

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
            project: "",
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
            await this.createTimesheet({
                project: this.project,
                name: this.note,
                start_time: dateHelper(this.startTime),
                end_time: dateHelper(this.endTime),
                date: new Date(2011, 0, 1, 0, 0, 0, 0)
            })
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
        updateTimesheet() {
            this.editTimesheet({
                id: this.id,
                formData: {
                    project: this.project,
                    name: this.note,
                    start_time: dateHelper(this.startTime),
                    end_time: dateHelper(this.endTime),
                    date: new Date(2011, 0, 1, 0, 0, 0, 0)
                }
            })
            this.closeModal()
            this.$nextTick(() => {
                this.v$.$reset()
            })
            this.edit = false
        }
    },
    computed: {
        ...mapGetters(['getTimesheet', 'getTotalDuration', 'getUpdateTimesheet', 'getProjects'])
    },
    mounted() {
        this.fetchTimesheet();
        this.fetchProjects();
    }
}