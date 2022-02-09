import {mapActions} from "vuex";

export default {
    props: ['timesheetItem'],
    methods: {
        ...mapActions(['removeTimesheet', 'editTimesheet']),
        async removeItem() {
            await this.removeTimesheet(this.timesheetItem.id)
            this.$toast.show(`Removed successfully.`,  {
                type: 'info'
            });
        },
        editItem() {
            this.$emit('editItem', this.timesheetItem.id)
        }
    }
}