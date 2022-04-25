import axios from "../../axios";

export default {
    state: {
        taskReport: {}
    },
    actions: {
        async fetchTaskReport(context) {
            const response = await axios.get('/statistics/tasks')
            const taskReport = await response.data;
            console.log(response.data)
            context.commit('setTaskReport', taskReport)
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