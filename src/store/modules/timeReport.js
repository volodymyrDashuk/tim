import axios from "../../axios";

export default {
    state: {
        timeReport: {}
    },
    actions: {
        async fetchTimeReport(context) {
            try {
                const response = await axios.get('/statistics/months')
                const timeReport = await response.data;
                context.commit('setTimeReport', timeReport)
            } catch (e) {
                console.log(e)
            }
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