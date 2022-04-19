import {createStore} from 'vuex'
import projects from './modules/projects'
import timesheet from './modules/timesheet'
import currentUser from './modules/currentUser'
import login from './modules/login'
import registration from './modules/registration'
import logout from './modules/logout'
import forgotPassword from './modules/forgotPassword'
import resetPassword from './modules/resetPassword'

export default createStore({
    modules: {
        projects,
        timesheet,
        currentUser,
        login,
        registration,
        logout,
        forgotPassword,
        resetPassword
    }
})
