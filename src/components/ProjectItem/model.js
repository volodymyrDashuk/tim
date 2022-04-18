import {mapActions} from "vuex"

export default {
    name: 'ProjectItem',
    props: ['projectItem'],
    methods: {
        ...mapActions(['removeProject']),
        async removeCard() {
            await this.removeProject(this.projectItem.id)
            this.$toast.show(`Removed successfully.`,  {
                type: 'info'
            });
        },
        editItem() {
            this.$emit('editItem', this.projectItem.id)
        },
        addBackgroundColor(){
            return "hsl(" + 360 * Math.random() + ',' + (25 + 70 * Math.random()) + '%,' + (85 + 10 * Math.random()) + '%)'
        }
    }
}