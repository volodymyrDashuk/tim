import axios from "../../axios";

export default {
    name: 'ProjectItem',
    props: ['projectItem', 'refreshData'],
    methods: {
        async removeCard() {
            console.log('start delete')
            const response = await axios.delete(`projects/${this.projectItem.id}`)
            this.refreshData();
        }
    }
}