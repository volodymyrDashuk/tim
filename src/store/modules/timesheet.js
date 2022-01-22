import axios from "../../axios";

export default {
    state: {
        timesheet: [],
        totalDuration: ""
    },
    actions: {
        async createTimesheet(context, formData) {
            await axios.post('task-times', formData)
            this.dispatch('fetchTimesheet');
        },
        async fetchTimesheet(context) {
            const response = await axios.get('task-times')
            const timesheet = response.data.data
            const totalDuration = response.data.duration_sum
            context.commit('setTimesheet', {timesheet, totalDuration})
        },
        async removeTimesheet (context, item) {
            const response = await axios.delete('task-times/' + item)
            this.dispatch('fetchTimesheet')
        }
    },
    mutations: {
        setTimesheet(state, {timesheet, totalDuration}) {
            state.timesheet = timesheet
            state.totalDuration = totalDuration
        }
    },
    getters: {
        getTimesheet(state) {
            return state.timesheet
        },
        getTotalDuration(state) {
            return state.totalDuration
        }
    }
}