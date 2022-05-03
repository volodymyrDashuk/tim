import axios from "../../axios";

export default {
    actions: {
        async resetPassword(context, formData) {
            try {
                await axios.post('reset-password', formData)
            } catch (e) {
                console.log(e)
            }
        }
    }
}