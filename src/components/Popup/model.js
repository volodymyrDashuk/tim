export default {
    name: 'popUp',
    props: ['refreshData', 'isModalShow'],
    methods: {
        onCloseModal() {
            this.$emit('onCloseModal')
        }
    }
}