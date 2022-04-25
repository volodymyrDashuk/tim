import axios from "../../axios";

export default {
    state: {
        timeReport: {}
    },
    actions: {
        async fetchTimeReport(context) {
            const response = await axios.get('/statistics/months')
            const timeReport = await response.data;
            context.commit('setTimeReport', timeReport)
        }
    },
    mutations: {
        setTimeReport(state, timeReport) {
            state.timeReport = timeReport
        },
    },
    getters: {
        getTimeReport(state) {
            return state.timeReport
        }
    }
}