import useVuelidate from '@vuelidate/core'
import {required, email, sameAs, minLength} from '@vuelidate/validators'
import {mapActions} from "vuex";

export default {
    name: 'resetPassword',
    setup() {
        return {v$: useVuelidate()};
    },
    data() {
        return {
            email: "",
            password: "",
            confirmPassword: ""
        };
    },
    validations() {
        return {
            email: {email, required},
            password: {required, minLength: minLength(8)},
            confirmPassword: {
                sameAsPassword: sameAs(this.password)
            }
        };
    },
    methods: {
        ...mapActions(['resetPassword']),
        async submitHandler() {
            this.v$.$touch();
            if (this.v$.$error) return
            await this.resetPassword ({
                email: this.email,
                password: this.password,
                password_confirmation: this.confirmPassword,
                token: this.$route.query.token
            })
            this.$toast.show(`Password reset successfully.`,  {
                type: 'info'
            });
            await this.$router.push('/');
        }
    }
}