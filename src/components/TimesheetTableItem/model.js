import {mapActions} from "vuex";

export default {
    props: ['timesheetItem'],
    methods: {
        ...mapActions(['removeTimesheet', 'editTimesheet']),
        removeItem() {
            this.removeTimesheet(this.timesheetItem.id)
        },
        editItem() {
            this.$emit('editItem', this.timesheetItem.id)
        }
    }
}