import axios from "../../axios";

export default {
    actions: {
        async forgotPassword(context, formData) {
            await axios.post('forgot-password', formData)
        }
    }
}