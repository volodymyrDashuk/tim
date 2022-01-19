import axios from "../../axios";

export default {
    props: ['timesheetItem', 'refreshData'],
    methods: {
        data() {

        },
        async removeItem() {
            const response = await axios.delete(`task-times/${this.timesheetItem.id}`)
            this.refreshData();
        },
        editItem() {
            console.log('edit')
        }
    }
}