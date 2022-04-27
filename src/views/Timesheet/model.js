import TimesheetTable from '../../components/TimesheetTable/TimesheetTable.vue'
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css'
import {daysMonthsYearsHelper} from "../../helper.js";
import {mapActions, mapMutations} from "vuex";

export default {
    name: 'Timesheet',
    components: {
        TimesheetTable,
        Datepicker
    },
    data() {
        return {
            date: new Date()
        }
    },
    methods: {
        ...mapActions(['fetchFilteredTimesheet', 'fetchTimesheet', 'fetchProjects']),
        ...mapMutations(['setFilterDate']),
        async setDate() {
            this.setFilterDate(daysMonthsYearsHelper(this.date))
            await this.fetchFilteredTimesheet()
        },
        prevDay() {
            this.date = new Date(this.date.setDate(this.date.getDate() - 1))
            this.setDate()
        },
        nextDay() {
            this.date = new Date(this.date.setDate(this.date.getDate() + 1))
            this.setDate()
        }
    },
    mounted() {
        this.setDate()
        this.fetchProjects();
    }
}