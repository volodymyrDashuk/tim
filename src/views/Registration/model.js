import useVuelidate from '@vuelidate/core'
import {required, email, minLength} from '@vuelidate/validators'
import {mapActions} from "vuex";

export default {
    name: 'registration',
    setup() {
        return {v$: useVuelidate()};
    },
    data() {
        return {
            name: "",
            email: "",
            password: "",
        };
    },
    validations() {
        return {
            name: {required},
            email: {email, required},
            password: {required, minLength: minLength(8)},
        };
    },
    methods: {
        ...mapActions(['registration']),
        async submitHandler() {
            this.v$.$touch();
            if (this.v$.$error) return
            await this.registration({
                name: this.name,
                email: this.email,
                password: this.password
            })
            this.$toast.show(`Registered successfully.`,  {
                type: 'info'
            })
            await this.$router.push('/')
        }
    },
    computed: {
        isComplete () {
            return this.name && this.email && this.password;
        }
    }
}