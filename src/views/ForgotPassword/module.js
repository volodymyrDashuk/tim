import useVuelidate from '@vuelidate/core'
import {required, email} from '@vuelidate/validators'
import {mapActions} from "vuex";

export default {
    name: 'forgotPassword',
    setup() {
        return {v$: useVuelidate()};
    },
    data() {
        return {
            email: ""
        };
    },
    validations() {
        return {
            email: {email, required}
        };
    },
    methods: {
        ...mapActions(['forgotPassword']),
        async submitHandler() {
            this.v$.$touch();
            if (this.v$.$error) return
            await this.forgotPassword ({
                email: this.email
            })
            this.$toast.show(`Check your email. We sent you a link to reset your password.`,  {
                type: 'info'
            });
        },
    }
}