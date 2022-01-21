import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/login',
        name: 'Login',
        meta: {layout: 'Auth', isAuth: false},
        component: () => import('../views/Login/Login.vue')
    },
    {
        path: '/registration',
        name: 'Registration',
        meta: {layout: 'Auth', isAuth: false},
        component: () => import('../views/Registration/Registration.vue')
    },
    {
        path: '/',
        name: 'Dashboard',
        meta: {layout: 'Main', isAuth: true},
        component: () => import('../views/Dashboard/Dashboard.vue')
    },
    {
        path: '/project',
        name: 'Project',
        meta: {layout: 'Main', isAuth: true},
        component: () => import('../views/Project/Project.vue')
    },
    {
        path: '/activity',
        name: 'Activity',
        meta: {layout: 'Main', isAuth: true},
        component: () => import('../views/Activity/Activity.vue')
    },
    {
        path: '/timesheet',
        name: 'Timesheet',
        meta: {layout: 'Main', isAuth: true},
        component: () => import('../views/Timesheet/Timesheet.vue')
    }
    ,
    {
        path: '/:catchAll(.*)',
        name: 'noRoute',
        component: () => import('../views/NoRoute/NoRoute.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const requireAuth = to.matched.some(record => record.meta.isAuth)

    if (requireAuth && !user) {
        next('/login')
    } else {
        next()
    }
})

export default router
