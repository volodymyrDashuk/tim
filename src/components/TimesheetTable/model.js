import TimesheetTableDaysFilter from '../../components/TimesheetTableDaysFilter/TimesheetTableDaysFilter.vue'
import TimesheetTableItem from '../../components/TimesheetTableItem/TimesheetTableItem.vue'
import Popup from '../../components/Popup/Popup.vue'
import useVuelidate from "@vuelidate/core";
import {required} from "@vuelidate/validators";
import {mapActions, mapGetters} from "vuex";

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
            project: "",
            note: "",
            startTime: "",
            endTime: "",
            isModalShow: false,
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
        ...mapActions(['createTimesheet', 'fetchTimesheet']),
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
            this.createTimesheet({
                project: this.project,
                name: this.note,
                start_time: this.startTime,
                end_time: this.endTime,
                date: new Date(2011, 0, 1, 0, 0, 0, 0)
            })
            this.closeModal()
            this.$nextTick(() => {
                this.v$.$reset()
            })
        }
    },
    computed: {
        ...mapGetters(['getTimesheet', 'getTotalDuration'])
    },
    mounted() {
        this.fetchTimesheet();
    }
}