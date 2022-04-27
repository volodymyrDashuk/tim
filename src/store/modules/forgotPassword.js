import axios from "../../axios";

export default {
    actions: {
        async forgotPassword(context, formData) {
            try {
                await axios.post('forgot-password', formData)
            } catch (e) {
                console.log(e)
            }
        }
    }
}