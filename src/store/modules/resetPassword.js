import axios from "../../axios";

export default {
    actions: {
        async resetPassword(context, formData) {
            await axios.post('reset-password', formData)
        }
    }
}