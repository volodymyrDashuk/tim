import TimesheetTable from '../../components/TimesheetTable/TimesheetTable.vue'
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css'
import {daysMonthsYearsHelper} from "../../helper.js";
import {mapActions, mapMutations} from "vuex";
import moment from "moment";

export default {
    name: 'Timesheet',
    components: {
        TimesheetTable,
        Datepicker
    },
    data() {
        return {
            date: new Date(),
            week: [],
            active: 0,
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
            this.active = this.active - 1
            this.setWeek()
            if (this.active < 0) {
                this.active = 6
            }
            this.date = new Date(this.date.setDate(this.date.getDate() - 1))
            this.setDate()
        },
        nextDay() {
            this.active = this.active + 1
            this.setWeek()
            if (this.active > 6) {
                this.active = 0
            }
            this.date = new Date(this.date.setDate(this.date.getDate() + 1))
            this.setDate()
        },
        //  This function gets and sets the current week in array this.week when page is load
        getCurrentWeek() {
            let startOfWeek, endOfWeek;
            startOfWeek= moment(this.date).startOf('isoWeek');
            endOfWeek = moment(this.date).endOf('isoWeek');
            let days = [];
            let day = startOfWeek;

            while (day <= endOfWeek) {
                days.push(day.toDate());
                day = day.clone().add(1, 'd');
            }
            this.week.splice(0, days.length, ...days);
        },
        //  This function sets the week prev or next or current in data()
        setWeek() {
            if (this.active >= 0 && this.active <= 6) {
                return
            }
            let startOfWeek, endOfWeek;
            if (this.active > 6) {
                startOfWeek = moment(this.date).add(1, 'weeks').startOf('isoWeek')
                endOfWeek = moment(this.date).add(1, 'weeks').endOf('isoWeek')
            }
            if (this.active < 0) {
                startOfWeek = moment(this.date).subtract(1, 'weeks').startOf('isoWeek')
                endOfWeek = moment(this.date).subtract(1, 'weeks').endOf('isoWeek')
            }
            let days = [];
            let day = startOfWeek;
            while (day <= endOfWeek) {
                days.push(day.toDate());
                day = day.clone().add(1, 'd');
            }
            this.week.splice(0, days.length, ...days);
        },
        //  This function toggles the class active when the date button is clicked
        async isActive4 (index, item) {
            this.active = index
            this.date = item
            this.setFilterDate(moment(this.date).format('DD.MM.YYYY'))
            await this.fetchFilteredTimesheet()
        },
        //  This function sets the class active for the current date when the page loads
        setActive() {
            this.week.forEach((item, index) => {
                if(moment(item).format('DD.MM.YYYY') === moment(this.date).format('DD.MM.YYYY')) {
                    this.active = index
                }
            })
        }
    },
    mounted() {
        this.setDate()
        this.fetchProjects();
        this.getCurrentWeek();
        this.setActive();
    }
}