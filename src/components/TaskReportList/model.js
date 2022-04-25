import TaskReportItem from "@/components/TaskReportItem/TaskReportItem"
import {mapActions, mapGetters} from "vuex";

export default {
    name: 'TaskReportList',
    components: {
        TaskReportItem
    },
    methods: {
        ...mapActions(['fetchTaskReport'])
    },
    computed: {
        ...mapGetters(['getTaskReport'])
    },
    mounted() {
        this.fetchTaskReport();
    }
}