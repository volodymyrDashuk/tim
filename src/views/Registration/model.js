import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import axios from '../../axios'

export default {
    name: 'registration',
    setup() {
        return { v$: useVuelidate() };
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
            name: { required },
            email: { email, required },
            password: { required, minLength: minLength(8) },
        };
    },
    methods: {
        async submitHandler () {
            this.v$.$touch();
            if (this.v$.$error) return
            const formData = {
                name: this.name,
                email: this.email,
                password: this.password
            }
            const response = await axios.post(
                'register',
                formData
            )
            await this.$router.push('/login')
        },
    }
}