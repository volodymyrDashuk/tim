import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/login',
        name: 'Login',
        meta: {layout: 'Auth'},
        component: () => import('../views/Login/Login.vue')
    },
    {
        path: '/registration',
        name: 'Registration',
        meta: {layout: 'Auth'},
        component: () => import('../views/Registration/Registration.vue')
    },
    {
        path: '/',
        name: 'Dashboard',
        meta: {layout: 'Main'},
        component: () => import('../views/Dashboard/Dashboard.vue')
    },
    {
        path: '/activity',
        name: 'Activity',
        meta: {layout: 'Main'},
        component: () => import('../views/Activity/Activity.vue')
    },
    {
        path: '/timesheet',
        name: 'Timesheet',
        meta: {layout: 'Main'},
        component: () => import('../views/Timesheet/Timesheet.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
