import axios from "../../axios";

export default {
    state: {
        user: {}
    },
    actions: {
        async user(context) {
            const response = await axios.get('me')
            const user = response.data.data.user
            context.commit('setUser', user)
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        }
    },
    getters: {
        getUserName(state) {
            return state.user.name
        },
        getUserEmail(state) {
            return state.user.email
        }
    }
}