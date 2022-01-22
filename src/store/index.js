import {createStore} from 'vuex'
import projects from './modules/projects'
import timesheet from './modules/timesheet'
import currentUser from './modules/currentUser'

export default createStore({
    modules: {
        projects,
        timesheet,
        currentUser
    }
})
