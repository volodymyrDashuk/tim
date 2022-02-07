import axios from "../../axios";
import {minutesHoursHelper} from "../../helper";

export default {
    state: {
        timesheet: [],
        totalDuration: "",
        updateTimesheet: {}
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
        async removeTimesheet(context, item) {
            const response = await axios.delete('task-times/' + item)
            this.dispatch('fetchTimesheet')
        },
        async getTimesheetAction(context, id) {
            const response = await axios.get('task-times/' + id)
            const item = response.data.data
            context.commit('setUpdatedTimesheet', item)
        },
        async editTimesheet(context, data) {
            const response = await axios.put('task-times/' + data.id, data.formData)
            this.dispatch('fetchTimesheet')
        },
        async fetchFilteredTimesheet(context, formData) {
            const response = await axios.get(`task-times?date=${formData.date}&page=1`)
            const timesheet = response.data.data
            const totalDuration = response.data.duration_sum
            context.commit('setTimesheet', {timesheet, totalDuration})
        },
    },
    mutations: {
        setTimesheet(state, {timesheet, totalDuration}) {
            state.timesheet = timesheet
            state.totalDuration = totalDuration
        },
        setUpdatedTimesheet(state, item) {
            state.updateTimesheet = item
        }
    },
    getters: {
        getTimesheet(state) {
            return state.timesheet.map((item) => {
                item.start_time = minutesHoursHelper(item.start_time)
                item.end_time = minutesHoursHelper(item.end_time)
                item.duration = minutesHoursHelper(item.duration)
                return item
            })
        },
        getTotalDuration(state) {
            return state.totalDuration
        },
        getUpdateTimesheet(state) {
            return state.updateTimesheet
        }
    }
}