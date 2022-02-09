import Burger from "../../components/Burger/Burger";
import useVuelidate from '@vuelidate/core'
import {required, email, minLength} from '@vuelidate/validators'
import axios from '../../axios'

export default {
    components: {Burger},
    name: 'login',
    setup() {
        return {v$: useVuelidate()};
    },
    data() {
        return {
            email: "",
            password: "",
        };
    },
    validations() {
        return {
            email: {email, required},
            password: {required, minLength: minLength(8)},
        };
    },
    methods: {
        async submitHandler() {
            this.v$.$touch();
            if (this.v$.$error) return
            const formData = {
                email: this.email,
                password: this.password
            }

            const response = await axios.post(
                'login',
                formData
            )
            this.$toast.show(`Logged in successfully.`,  {
                type: 'info'
            });
            localStorage.setItem('token', response.data.data.token)
            localStorage.setItem('user', true)

            await this.$router.push('/');
        },
    }
}