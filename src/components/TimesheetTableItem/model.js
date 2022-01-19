import axios from "../../axios";

export default {
    props: ['timesheetItem', 'refreshData'],
    methods: {
        async removeItem() {
            console.log('start delete')
            const response = await axios.delete(`task-times/${this.timesheetItem.id}`)
            this.refreshData();
        }
    }
}