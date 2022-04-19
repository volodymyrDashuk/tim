import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/login',
        name: 'Login',
        meta: {layout: 'Auth', isAuth: false, title: 'Tim - Login'},
        component: () => import('../views/Login/Login.vue')
    },
    {
        path: '/registration',
        name: 'Registration',
        meta: {layout: 'Auth', isAuth: false, title: 'Tim - Registration'},
        component: () => import('../views/Registration/Registration.vue')
    },
    {
        path: '/forgot-password',
        name: 'forgotPassword',
        meta: {layout: 'Auth', isAuth: false, title: 'Tim - Forgot Password'},
        component: () => import('../views/ForgotPassword/ForgotPassword.vue')
    },
    {
        path: '/reset-password',
        name: 'resetPassword',
        meta: {layout: 'Auth', isAuth: false, title: 'Tim - Reset Password'},
        component: () => import('../views/ResetPassword/ResetPassword.vue')
    },
    {
        path: '/',
        name: 'Dashboard',
        meta: {layout: 'Main', isAuth: true, title: 'Tim - Dashboard'},
        component: () => import('../views/Dashboard/Dashboard.vue')
    },
    {
        path: '/project',
        name: 'Project',
        meta: {layout: 'Main', isAuth: true, title: 'Tim - Project'},
        component: () => import('../views/Project/Project.vue')
    },
    {
        path: '/activity',
        name: 'Activity',
        meta: {layout: 'Main', isAuth: true, title: 'Tim - Activity'},
        component: () => import('../views/Activity/Activity.vue')
    },
    {
        path: '/timesheet',
        name: 'Timesheet',
        meta: {layout: 'Main', isAuth: true, title: 'Tim - Timesheet'},
        component: () => import('../views/Timesheet/Timesheet.vue')
    },
    {
        path: '/:catchAll(.*)',
        name: 'noRoute',
        meta: {title: 'Tim - Page not found'},
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
        document.title = `${to.meta.title}`;
        next()
    }
})

export default router
