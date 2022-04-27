import axios from "../../axios";
import {minutesHoursHelper} from "../../helper";

export default {
    state: {
        timesheet: [],
        totalDuration: "",
        updateTimesheet: {},
        filterDate: ''
    },
    actions: {
        async createTimesheet(context, formData) {
            try {
                await axios.post('task-times', formData)
                this.dispatch('fetchFilteredTimesheet')
            } catch (e) {
                console.log(e)
            }
        },
        async removeTimesheet(context, item) {
            try {
                const response = await axios.delete('task-times/' + item)
                this.dispatch('fetchFilteredTimesheet')
            } catch (e) {
                console.log(e)
            }
        },
        async getTimesheetAction(context, id) {
            try {
                const response = await axios.get('task-times/' + id)
                const item = response.data.data
                context.commit('setUpdatedTimesheet', item)
            } catch (e) {
                console.log(e)
            }
        },
        async editTimesheet(context, data) {
            try {
                const response = await axios.put('task-times/' + data.id, data.formData)
                this.dispatch('fetchFilteredTimesheet')
            } catch (e) {
                console.log(e)
            }
        },
        async fetchFilteredTimesheet(context) {
            try {
                const response = await axios.get(`task-times?date=${context.state.filterDate}&page=1`)
                const timesheet = response.data.data
                const totalDuration = response.data.duration_sum
                context.commit('setTimesheet', {timesheet, totalDuration})
            } catch (e) {
                console.log(e)
            }
        }
    },
    mutations: {
        setTimesheet(state, {timesheet, totalDuration}) {
            state.timesheet = timesheet
            state.totalDuration = totalDuration
        },
        setUpdatedTimesheet(state, item) {
            state.updateTimesheet = item
        },
        setFilterDate(state, data) {
            state.filterDate = data
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