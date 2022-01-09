import TimesheetTableDaysFilter from '../../components/TimesheetTableDaysFilter/TimesheetTableDaysFilter.vue'
import TimesheetTableItem from '../../components/TimesheetTableItem/TimesheetTableItem.vue'
import Popup from '../../components/Popup/Popup.vue'
import axios from '../../axios'

export default {
    data() {
        return {
            timesheetItems: []
        };
    },
    components: {
        TimesheetTableDaysFilter,
        TimesheetTableItem,
        Popup
    },
    methods: {
        showModal: function () {
            this.$refs.popup.showModal = true
        },
        refreshData: async function () {
            console.log('start refreshData')
            try {
                const response = await axios.get('task-times')
                this.timesheetItems = response.data.data
            } catch (e) {
                console.log(e)
            }
        }
    },
    mounted() {
       this.refreshData();
    }
}