import axios from "../../axios";

export default {
    state: {
        taskReport: {}
    },
    actions: {
        async fetchTaskReport(context) {
            try {
                const response = await axios.get('/statistics/tasks')
                const taskReport = await response.data;
                context.commit('setTaskReport', taskReport)
            } catch (e) {
                console.log(e)
            }
        }
    },
    mutations: {
        setTaskReport(state, taskReport) {
            state.taskReport = taskReport
        },
    },
    getters: {
        getTaskReport(state) {
            return state.taskReport
        }
    }
}