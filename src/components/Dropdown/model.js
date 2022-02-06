export default {
    props: ['options'],
    data() {
        return {
            selected: "select an option",
            placeholder: "Select from the dropdown",
            showDropdown: false
        }
    },
    methods: {
        toggleDropdown() {
            this.showDropdown = !this.showDropdown
        },
        selectOption(option) {
            this.selected = option.name
            this.placeholder = option.name
            this.$emit('interface', this.selected)
        }
    }
}