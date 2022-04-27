import Burger from "../../components/Burger/Burger";
import useVuelidate from '@vuelidate/core'
import {required, email, minLength} from '@vuelidate/validators'
import {mapActions} from "vuex";

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
        ...mapActions(['login']),
        async submitHandler() {
            this.v$.$touch();
            if (this.v$.$error) return
            await this.login ({
                email: this.email,
                password: this.password
            })
            this.$toast.show(`Logged in successfully.`,  {
                type: 'info'
            });
            await this.$router.push('/');
        }
    },
    computed: {
        isComplete () {
            return this.email && this.password;
        }
    }
}