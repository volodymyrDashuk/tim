import moment from "moment";

export default {
    name: 'TimesheetTableDaysFilter',
    props: ['week', 'active'],
    data() {
        return {

        };
    },
    methods: {
        async isActive (index, item) {
            this.$emit('isActive1', index, item)
        },
        getFormatedDayOfWeek(item) {
              return moment(item).format('ddd')
        },
        getFormatedDate(item) {
            return moment(item).format('DD.MM')
        }
    }
}