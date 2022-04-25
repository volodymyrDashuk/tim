import TimeReportItem from "@/components/TimeReportItem/TimeReportItem"
import {mapActions, mapGetters} from "vuex";

export default {
    name: 'TimeReportList',
    components: {
        TimeReportItem
    },
    methods: {
        ...mapActions(['fetchTimeReport'])
    },
    computed: {
        ...mapGetters(['getTimeReport'])
    },
    mounted() {
        this.fetchTimeReport();
    }
}