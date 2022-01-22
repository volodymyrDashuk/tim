import {mapActions} from "vuex";

export default {
    props: ['timesheetItem'],
    methods: {
        ...mapActions(['removeTimesheet']),
        removeItem() {
            this.removeTimesheet(this.timesheetItem.id)
        },
        editItem() {
            console.log('edit')
        }
    }
}