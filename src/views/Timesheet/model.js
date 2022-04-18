import TimesheetTable from '../../components/TimesheetTable/TimesheetTable.vue'
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css'
import {daysMonthsYearsHelper} from "../../helper.js";
import {mapActions} from "vuex";

export default {
    name: 'Timesheet',
    components: {
        TimesheetTable,
        Datepicker
    },
    data() {
        return {
            date: new Date(),
            formattedDate: ''
        }
    },
    methods: {
        ...mapActions(['fetchFilteredTimesheet', 'fetchTimesheet', 'fetchProjects']),
        setDate() {
            if (this.date !== null) {
                this.formattedDate = daysMonthsYearsHelper(this.date);
                this.fetchFilteredTimesheetItems()
            } else {
                this.fetchTimesheet();
            }
        },
        async fetchFilteredTimesheetItems() {
            await this.fetchFilteredTimesheet({
                date: this.formattedDate
            })
        },
        clearDate() {
            // console.log('close')
        }
    },
    mounted() {
        this.setDate()
        this.fetchProjects();
    }
}