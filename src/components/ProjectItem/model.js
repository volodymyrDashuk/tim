import {mapActions} from "vuex"

export default {
    name: 'ProjectItem',
    props: ['projectItem'],
    methods: {
        ...mapActions(['removeProject']),
        removeCard() {
            this.removeProject(this.projectItem.id)
        }
    }
}