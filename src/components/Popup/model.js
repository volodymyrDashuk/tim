export default {
    name: 'popUp',
    props: ['isModalShow'],
    methods: {
        onCloseModal() {
            this.$emit('onCloseModal')
        }
    }
}